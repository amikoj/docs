---
id: deploy
title: 部署
author:胖蔡
---

使用以下三个选项之一，部署Sanic非常简单：内置Web服务器，ASGI Web服务器或gunicorn。将Sanic放在反向代理（如nginx）后面也很常见。

通过Sanic Web服务器运行
定义sanic.Sanic的实例之后，我们可以使用以下关键字参数调用run方法：

- host （默认为“ 127.0.0.1”）：托管服务器的地址。
- 端口 （默认为8000）：用于托管服务器的端口。
- debug （默认为False）：启用调试输出（降低服务器速度）。
- ssl （默认为“无”）：SSLContext用于对工作人员进行SSL加密。
- sock （默认为None）：服务器接受其连接的套接字。
- worker （默认值为1）：要产生的工作进程数。
- 循环 （默认为“无”）：异步兼容的事件循环。如果未指定，Sanic将创建其自己的事件循环。
- 协议 （默认为HttpProtocol）：asyncio.protocol的子类。
- access_log （默认为True）：启用登录以处理请求（显着降低服务器速度）。

```python
app.run(host='0.0.0.0', port=1337, access_log=False)
```

在上面的示例中，我们决定关闭访问日志以提高性能。

## worker
默认情况下，Sanic仅使用一个CPU内核侦听主进程。要提高效率，只需在运行参数中指定工作者数。

```python
app.run(host='0.0.0.0', port=1337, workers=4)
```
Sanic将自动启动多个进程并在它们之间路由流量。我们建议您使用尽可能多的核心。

## 通过命令运行
如果您喜欢使用命令行参数，则可以通过执行模块来启动Sanic Web服务器。例如，如果在名为server.py的文件中将Sanic初始化为app，则可以这样运行服务器：

通过这种方式运行sanic，无需在Python文件中调用app.run。如果这样做，请确保将其包装起来，以便仅在由解释器直接运行时才执行。

```python
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=1337, workers=4)
```

## 通过ASGI运行
Sanic也符合ASGI。这意味着您可以使用首选的ASGI Web服务器来运行Sanic。ASGI的三个主要的实现是 达芙妮，Uvicorn和Hypercorn。

按照他们的文档来运行它们的正确方法，但是它看起来应该像这样：

```doc
daphne myapp:app
uvicorn myapp:app
hypercorn myapp:app
```
使用ASGI时要注意以下几点：

1. 使用Sanic Web服务器时，Websockets将使用websockets软件包运行。在ASGI模式下，由于websocket是在ASGI服务器中管理的，因此不需要此软件包。
2. ASGI 寿命协议<https://asgi.readthedocs.io/en/latest/specs/lifespan.html>仅支持两个服务器事件：启动和关闭。Sanic有四个：启动之前，启动之后，关闭之前和关闭之后。因此，在ASGI模式下，启动和关闭事件将连续运行，而实际上不会围绕服务器进程的开始和结束运行（因为现在由ASGI服务器控制）。因此，最好使用after_server_start和 before_server_stop。
3. 从Sanic v19.6开始，ASGI模式仍处于“ beta”状态。

## 通过Gunicorn运行
Gunicorn'Green Unicorn'是用于UNIX的WSGI HTTP服务器。这是从Ruby的Unicorn项目移植来的前叉工作模型。

为了运行与Gunicorn中信高科应用程序，您需要使用特殊sanic.worker.GunicornWorker 为Gunicorn 工人类的说法：
```shell
gunicorn myapp:app --bind 0.0.0.0:1337 --worker-class sanic.worker.GunicornWorker
```
如果您的应用程序遭受内存泄漏的困扰，您可以将Gunicorn配置为在处理了给定数量的请求之后正常重启工作器。这是帮助限制内存泄漏影响的便捷方法。

有关更多信息，请参见[Gunicorn](http://docs.gunicorn.org/en/latest/settings.html#max-requests)文档。

## 其他部署注意事项
### 在反向代理后面运行
Sanic可以与反向代理（例如nginx）一起使用。有一个简单的nginx配置示例：

```shell
server {
  listen 80;
  server_name example.org;
  location / {
    proxy_pass http://127.0.0.1:8000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```
如果要获取真实的客户端ip，则应配置X-Real-IP和X-Forwarded-For HTTP标头，并将app.config.PROXIES_COUNT设置为1；有关更多信息，请参见配置页面。

### 禁用调试日志记录以提高性能
为了提高性能，请在运行参数中添加debug = False和access_log = False。

```python
app.run(host='0.0.0.0', port=1337, workers=4, debug=False, access_log=False)
```
通过Gunicorn运行，您可以设置环境变量SANIC_ACCESS_LOG =“ False”

```python
env SANIC_ACCESS_LOG="False" gunicorn myapp:app --bind 0.0.0.0:1337 --worker-class sanic.worker.GunicornWorker --log-level warning\
```
或者您可以直接重写应用程序配置

```python
app.config.ACCESS_LOG = False
```
### 异步支持和共享环路
如果您需要与其他应用程序（特别是loop）共享Sanic进程，则此方法非常适合。但是，请注意，此方法不支持使用多个进程，并且通常不是运行该应用程序的首选方法。

这是一个不完整的示例（请参阅示例中的run_async.py了解更多实用信息）：

```python
server = app.create_server(host="0.0.0.0", port=8000, return_asyncio_server=True)
loop = asyncio.get_event_loop()
task = asyncio.ensure_future(server)
loop.run_forever()
```
> 注意：使用此方法，调用app.create_server（）将触发“ before_server_start”服务器事件，但不会触发“ after_server_start”，“ before_server_stop”或“ after_server_stop”服务器事件。

对于更高级的用例，您可以使用AsyncioServer对象触发这些事件，该对象是通过等待服务器任务返回的。

这是一个不完整的示例（请参阅示例中的run_async_advanced.py了解更完整的内容）：

```python
serv_coro = app.create_server(host="0.0.0.0", port=8000, return_asyncio_server=True)
loop = asyncio.get_event_loop()
serv_task = asyncio.ensure_future(serv_coro, loop=loop)
server = loop.run_until_complete(serv_task)
server.after_start()
try:
    loop.run_forever()
except KeyboardInterrupt as e:
    loop.stop()
finally:
    server.before_stop()

    # Wait for server to close
    close_task = server.close()
    loop.run_until_complete(close_task)

    # Complete all tasks on the loop
    for connection in server.connections:
        connection.close_if_idle()
    server.after_stop()
```
