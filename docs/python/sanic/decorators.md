---
id: decorators
title: 装饰器
author: 胖蔡
---

## 处理程序装饰器
由于Sanic处理程序是简单的Python函数，因此可以以类似于Flask的方式将装饰器应用于它们。一个典型的用例是当您希望在执行处理程序的代码之前运行一些代码时。

## 授权装饰器
假设您要检查用户是否有权访问特定端点。您可以创建装饰器，该装饰器包装处理程序函数，检查请求是否授权客户端访问资源并发送适当的响应。

```python
from functools import wraps
from sanic.response import json

def authorized():
    def decorator(f):
        @wraps(f)
        async def decorated_function(request, *args, **kwargs):
            # run some method that checks the request
            # for the client's authorization status
            is_authorized = check_request_for_authorization_status(request)

            if is_authorized:
                # the user is authorized.
                # run the handler method and return the response
                response = await f(request, *args, **kwargs)
                return response
            else:
                # the user is not authorized.
                return json({'status': 'not_authorized'}, 403)
        return decorated_function
    return decorator


@app.route("/")
@authorized()
async def test(request):
    return json({'status': 'authorized'})
```
