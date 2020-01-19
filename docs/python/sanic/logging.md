---
id: log
title: 日志
sidebar_label: 日志
---

Sanic允许您基于python3日志记录API对请求执行不同类型的日志记录（访问日志，错误日志）。如果要创建新配置，则应具有有关python3日志记录的一些基本知识。

## 快速入门
使用默认设置的一个简单示例如下所示：

```python
from sanic import Sanic
from sanic.log import logger
from sanic.response import text

app = Sanic('test')

@app.route('/')
async def test(request):
    logger.info('Here is your log')
    return text('Hello World!')

if __name__ == "__main__":
  app.run(debug=True, access_log=True)
```
服务器运行后，您可以看到一些消息如下：

```shell
[2018-11-06 21:16:53 +0800] [24622] [INFO] Goin' Fast @ http://127.0.0.1:8000
[2018-11-06 21:16:53 +0800] [24667] [INFO] Starting worker [24667]
```

您可以将请求发送到服务器，它将打印日志消息：

```shell
[2018-11-06 21:18:53 +0800] [25685] [INFO] Here is your log
[2018-11-06 21:18:53 +0800] - (sanic.access)[INFO][127.0.0.1:57038]: GET http://localhost:8000/  200 12
```


要使用自己的日志记录配置，只需使用 logging.config.dictConfig，或log_config在初始化Sanic应用程序时通过：


```python
app = Sanic('test', log_config=LOGGING_CONFIG)

```
要关闭日志记录，只需分配access_log = False：


```python
if __name__ == "__main__":
  app.run(access_log=False)
```
处理请求时，这将跳过调用日志记录功能。您甚至可以进一步进行生产以提高速度：


```python
if __name__ == "__main__":
  # disable debug messages
  app.run(debug=False, access_log=False)
```


## 配置
默认情况下，log_config参数设置为使用 sanic.log.LOGGING_CONFIG_DEFAULTS字典进行配置。

loggersSanic中使用了三种，如果要创建自己的日志记录配置，则必须定义以下三种：

|记录仪名称|用例|
|:-|:-|
|sanic.root|用于记录内部消息。|
|sanic.error|用于记录错误日志。|
|sanic.access|用于记录访问日志。|



## 日志格式
除了由python提供默认参数（asctime， levelname，message），Sanic也提供了用于访问记录器与另外的参数：

|日志上下文参数|参数值|数据类型|
|:-|:-|:-|
|host|request.ip|str|
|request|request.method +”” + request.url|str|
|status|response.status|整型|
|byte|len(response.body)|整型|

默认访问日志格式为:

```pytohon
%(asctime)s - (%(name)s)[%(levelname)s][%(host)s]: %(request)s %(message)s %(status)d %(byte)d
```
