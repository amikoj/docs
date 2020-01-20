---
id: socket
title: Socket
author:胖蔡
---

Sanic可以使用python 套接字模块来容纳非IPv4套接字。

IPv6示例：

```python
from sanic import Sanic
from sanic.response import json
import socket

sock = socket.socket(socket.AF_INET6, socket.SOCK_STREAM)
sock.bind(('::', 7777))

app = Sanic()


@app.route("/")
async def test(request):
    return json({"hello": "world"})

if __name__ == "__main__":
    app.run(sock=sock)
```    
    
测试IPv6:

```shell
 curl -g -6 "http://[::1]:7777/"
```

UNIX套接字示例：

```python
import signal
import sys
import socket
import os
from sanic import Sanic
from sanic.response import json


server_socket = '/tmp/sanic.sock'

sock = socket.socket(socket.AF_UNIX, socket.SOCK_STREAM)
sock.bind(server_socket)

app = Sanic()


@app.route("/")
async def test(request):
    return json({"hello": "world"})


def signal_handler(sig, frame):
        print('Exiting')
        os.unlink(server_socket)
        sys.exit(0)


if __name__ == "__main__":
    app.run(sock=sock)
```
测试UNIX：

```shell
 curl -v --unix-socket /tmp/sanic.sock http://localhost/hello
```
