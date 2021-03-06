---
id: middleware
title: 中间件
author: 胖蔡
---

中间件是在对服务器的请求之前或之后执行的功能。它们可用于修改对 用户定义的处理函数的请求或响应。
此外，Sanic还提供了侦听器，使您可以在应用程序生命周期的各个阶段运行代码。

## 中间件
中间件有两种类型：请求和响应。两者都使用@ app.middleware装饰器声明，装饰器的参数是一个表示其类型的字符串：'request'或'response'。
- 请求中间件仅接收请求作为参数。
- 响应中间件同时接收请求和响应。
- 最简单的中间件根本不会修改请求或响应：

```python
@app.middleware('request')
async def print_on_request(request):
    print("I print when a request is received by the server")

@app.middleware('response')
async def print_on_response(request, response):
    print("I print when a response is returned by the server")
    
```
## 修改request和response
中间件可以修改给定的请求或响应参数，只要它不返回即可。以下示例显示了一个实际的用例。

```python
app = Sanic(__name__)

@app.middleware('request')
async def add_key(request):
    # Arbitrary data may be stored in request context:
    request.ctx.foo = 'bar'

@app.middleware('response')
async def custom_banner(request, response):
    response.headers["Server"] = "Fake-Server"


@app.middleware('response')
async def prevent_xss(request, response):
    response.headers["x-xss-protection"] = "1; mode=block"

@app.get("/")
async def index(request):
    return sanic.response.text(request.ctx.foo)

app.run(host="0.0.0.0", port=8000)
```
三个中间件按顺序执行：
- 第一个请求中间件add_key将新的密钥foo添加到请求上下文中。
- 请求被路由到处理程序索引，该索引从上下文获取键并返回文本响应。
- 第一个响应中间件custom_banner改变HTTP响应头服务器说假服务器
- 第二个响应中间件prevent_xss添加了HTTP标头，以防止跨站点脚本（XSS）攻击。

## 提前响应
如果中间件返回HTTPResponse对象，则该请求将停止处理并返回响应。如果在到达相关的用户路由处理程序之前在请求中发生这种情况，则永远不会调用该处理程序。返回响应也将阻止任何其他中间件运行。

```python
@app.middleware('request')
async def halt_request(request):
    return text('I halted the request')

@app.middleware('response')
async def halt_response(request, response):
    return text('I halted the response') 
```
## 自定义context
任意数据可以存储在request.ctx中。典型的用例是将从数据库中获取的用户对象存储在身份验证中间件中。在请求期间，所有以后的中间件以及处理程序都可以访问添加的密钥。

自定义上下文保留给应用程序和扩展。Sanic本身不使用它。

## 监听器
如果要在服务器启动或关闭时执行启动/拆卸代码，则可以使用以下侦听器：
- before_server_start
- after_server_start
- before_server_stop
-after_server_stop

这些侦听器在接受应用程序对象以及异步循环的函数上作为装饰器实现。

示例：
```python
@app.listener('before_server_start')
async def setup_db(app, loop):
    app.db = await db_setup()

@app.listener('after_server_start')
async def notify_server_started(app, loop):
    print('Server successfully started!')

@app.listener('before_server_stop')
async def notify_server_stopping(app, loop):
    print('Server shutting down!')

@app.listener('after_server_stop')
async def close_db(app, loop):
    await app.db.close()
```
也可以使用register_listener方法注册一个侦听器。如果您在实例化应用程序的模块之外的其他模块中定义了侦听器，这可能会很有用。
```python
app = Sanic()

async def setup_db(app, loop):
    app.db = await db_setup()

app.register_listener(setup_db, 'before_server_start')
```
如果您希望安排后台任务在循环开始后运行，那么Sanic提供了add_task方法可以轻松地做到这一点。

```python
async def notify_server_started_after_five_seconds():
    await asyncio.sleep(5)
    print('Server successfully started!')

app.add_task(notify_server_started_after_five_seconds())
```
Sanic将尝试自动注入应用程序，并将其作为参数传递给任务：

```python
async def notify_server_started_after_five_seconds(app):
    await asyncio.sleep(5)
    print(app.name)

app.add_task(notify_server_started_after_five_seconds)
```
或者，您可以显式地传递应用程序以达到相同的效果：

```python
async def notify_server_started_after_five_seconds(app):
    await asyncio.sleep(5)
    print(app.name)

app.add_task(notify_server_started_after_five_seconds(app))
```
