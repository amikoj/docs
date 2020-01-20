---
id: websocket
title: WebSocket
author: 胖蔡
---

Sanic在websockets之上提供了易于使用的抽象。Sanic支持websocket版本7和8。

设置WebSocket：

```python
from sanic import Sanic
from sanic.response import json
from sanic.websocket import WebSocketProtocol

app = Sanic()

@app.websocket('/feed')
async def feed(request, ws):
    while True:
        data = 'hello!'
        print('Sending: ' + data)
        await ws.send(data)
        data = await ws.recv()
        print('Received: ' + data)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, protocol=WebSocketProtocol)
    
```
或者，app.add_websocket_route可以使用该方法代替装饰器：

```python
async def feed(request, ws):
    pass

app.add_websocket_route(feed, '/feed')
```

调用WebSocket路由的处理程序时，将请求作为第一个参数，将WebSocket协议对象作为第二个参数。协议对象具有send 和recv分别发送和接收数据的方法。

您可以通过设置自己的WebSocket配置app.config，例如

```pytohon
app.config.WEBSOCKET_MAX_SIZE = 2 ** 20
app.config.WEBSOCKET_MAX_QUEUE = 32
app.config.WEBSOCKET_READ_LIMIT = 2 ** 16
app.config.WEBSOCKET_WRITE_LIMIT = 2 ** 16
```

在本Configuration节中找到更多内容。
