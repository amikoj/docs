---
id: versioning
title: 版本控制
author:胖蔡
---

您可以将version关键字传递给路由装饰器或蓝图初始化器。这将产生v {version}网址前缀，其中{version}是版本号。

## 单个路由
您可以将版本号直接传递给路由。

```python
from sanic import response


@app.route('/text', version=1)
def handle_request(request):
    return response.text('Hello world! Version 1')

@app.route('/text', version=2)
def handle_request(request):
    return response.text('Hello world! Version 2')

app.run(port=80)
```

可以通过**curl**获取：
```shell
curl localhost/v1/text
curl localhost/v2/text
```
## 全局蓝图版本
您也可以将版本号传递给蓝图，该版本号将应用于所有路线。

```python
from sanic import response
from sanic.blueprints import Blueprint

bp = Blueprint('test', version=1)

@bp.route('/html')
def handle_request(request):
    return response.html('<p>Hello world!</p>')
    
```
curl 获取如下：

```shell
curl localhost/v1/html
```
