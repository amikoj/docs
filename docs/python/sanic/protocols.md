---
id: protocols
title: 自定义协议
author:胖蔡
---

> 这是高级用法，大多数读者将不需要这种功能。

您可以通过指定自定义协议来更改Sanic协议的行为，该协议应该是asyncio.protocol的子类。然后可以将该协议作为关键字参数传递protocol给该sanic.run方法。
定制协议类的构造函数从Sanic接收以下关键字参数。

- loop：一个asyncio兼容的事件循环。
- connections：set用于存储协议对象。当Sanic收到 SIGINT或时SIGTERM，它将protocol.close_if_idle对存储在此集中的所有协议对象执行。
- signal：sanic.server.Signal具有stopped属性的对象。当Sanic收到SIGINT或时SIGTERM，signal.stopped被分配True。
- request_handler：一个协程，将一个sanic.request.Request对象和一个response回调作为参数。
- error_handler：sanic.exceptions.Handler引发异常时调用的a 。
- request_timeout：请求超时之前的秒数。
- request_max_size：一个整数，指定请求的最大大小，以字节为单位。

## 示例
如果处理程序函数不返回HTTPResponse对象，则默认协议中会发生错误。

通过覆盖write_response协议方法，如果处理程序返回一个字符串，它将被转换为。HTTPResponse object

```python
from sanic import Sanic
from sanic.server import HttpProtocol
from sanic.response import text

app = Sanic(__name__)


class CustomHttpProtocol(HttpProtocol):

    def __init__(self, *, loop, request_handler, error_handler,
                 signal, connections, request_timeout, request_max_size):
        super().__init__(
            loop=loop, request_handler=request_handler,
            error_handler=error_handler, signal=signal,
            connections=connections, request_timeout=request_timeout,
            request_max_size=request_max_size)

    def write_response(self, response):
        if isinstance(response, str):
            response = text(response)
        self.transport.write(
            response.output(self.request.version)
        )
        self.transport.close()


@app.route('/')
async def string(request):
    return 'string'


@app.route('/1')
async def response(request):
    return text('response')

app.run(host='0.0.0.0', port=8000, protocol=CustomHttpProtocol)
```
