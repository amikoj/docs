---
id: response
title: 响应数据
sidebar_label: 响应数据
---

使用sanic.response模块中的函数来创建响应。响应数据类型如下：

## 文本

```python
from sanic import response


@app.route('/text')
def handle_request(request):
    return response.text('Hello world!')
```

## HTML

```python
from sanic import response


@app.route('/html')
def handle_request(request):
    return response.html('<p>Hello world!</p>')
```


## JSON

```python
from sanic import response


@app.route('/json')
def handle_request(request):
    return response.json({'message': 'Hello world!'})
```


## File文件类型

```python
from sanic import response


@app.route('/file')
async def handle_request(request):
    return await response.file('/srv/www/whatever.png')

```



## Stream(流)

```python

from sanic import response

@app.route("/streaming")
async def index(request):
    async def streaming_fn(response):
        await response.write('foo')
        await response.write('bar')
    return response.stream(streaming_fn, content_type='text/plain')
```

## 重定向

```python
from sanic import response


@app.route('/redirect')
def handle_request(request):
    return response.redirect('/json')

```


## 原始数据
无需编码身体即可响应
```python
from sanic import response


@app.route('/raw')
def handle_request(request):
    return response.raw(b'raw data')
```


## 空数据

用于响应[RFC 2616](https://tools.ietf.org/search/rfc2616#section-7.2.1)定义的空消息
