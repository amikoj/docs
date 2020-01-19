---
id: request
title: 请求数据
sidebar_label: 请求数据
author:胖蔡
---


当端点接收到HTTP请求时，将向路由功能传递一个 Request对象。

以下变量可以作为Request对象的属性访问：

- json（any）-JSON正文

```python
from sanic.response import json

@app.route("/json")
def post_json(request):
  return json({ "received": True, "message": request.json })
```

- args（dict）-查询字符串变量。查询字符串是URL中类似于的部分?key1=value1&key2=value2

如果要解析该URL，则args词典将类似于{'key1'：['value1']，'key2'：['value2']}}。请求的query_string变量保存未解析的字符串值。属性提供默认的解析策略。如果要更改它，请查看下面的部分（更改queryset的默认解析规则）。

```python

from sanic.response import json

@app.route("/query_string")
def query_string(request):
  return json({ "parsed": True, "args": request.args, "url": request.url, "query_string": request.query_string })
```

- query_args（列表）-在许多情况下，您将需要以较少打包的形式访问url参数。query_args是（键，值）元组的列表。

属性提供默认的解析策略。如果要更改它，请查看下面的部分（更改queryset的默认解析规则）。对于相同的先前URL queryset ？key1 = value1＆key2 = value2，query_args列表类似于[（'key1'，'value1'），（'key2'，'value2'）]。如果多个参数具有相同的键，例如？key1 = value1＆key2 = value2＆key1 = value3，则query_args列表看起来像 [（'key1'，'value1'），（'key2'，'value2'），（'key1 '，'value3'）]。

queryset的Request.args和Request.query_args之间的区别？key1 = value1＆key2 = value2＆key1 = value3


```python
 from sanic import Sanic
  from sanic.response import json

  app = Sanic(__name__)


  @app.route("/test_request_args")
  async def test_request_args(request):
    return json({
        "parsed": True,
        "url": request.url,
        "query_string": request.query_string,
        "args": request.args,
        "raw_args": request.raw_args,
        "query_args": request.query_args,
    })

  if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8000)

```

```shell
{
    "parsed":true,
    "url":"http:\/\/0.0.0.0:8000\/test_request_args?key1=value1&key2=value2&key1=value3",
    "query_string":"key1=value1&key2=value2&key1=value3",
    "args":{"key1":["value1","value3"],"key2":["value2"]},
    "raw_args":{"key1":"value1","key2":"value2"},
    "query_args":[["key1","value1"],["key2","value2"],["key1","value3"]]
}
```

- raw_args仅包含key1的第一项。在将来的版本中将不推荐使用。
- 文件（“ File”对象的字典）-具有名称，正文和类型的文件的列表


```shell
from sanic.response import json

@app.route("/files")
def post_json(request):
  test_file = request.files.get('test')

  file_parameters = {
      'body': test_file.body,
      'name': test_file.name,
      'type': test_file.type,
  }

  return json({ "received": True, "file_names": request.files.keys(), "test_file_parameters": file_parameters })
```

- 表格（dict）-发布的表格变量

```shell
from sanic.response import text

@app.route("/users", methods=["POST",])
def create_user(request):
    return text("You are trying to create a user with the following POST: %s" % request.body)
```


- method（str）-请求的HTTP方法（即GET，POST）。
- ip（str）-请求者的IP地址。
- port（str）-请求者的端口地址。
- 套接字（元组）-请求者的（IP，端口）。
- 应用程序 -到正在处理这一请求的应用中信高科浙江对象的引用。当在无法访问全局应用程序对象的模块中的蓝图或其他处理程序内部时，此功能很有用。


```shell
from sanic.response import json
from sanic import Blueprint

bp = Blueprint('my_blueprint')

@bp.route('/')
async def bp_root(request):
    if request.app.config['DEBUG']:
        return json({'status': 'debug'})
    else:
        return json({'status': 'production'})
```

- url：请求的完整URL，即：http//localhost8000/posts/1/？foo=bar
- scheme：与请求关联的URL方案：“ http | https | ws | wss”或标头提供的任意值。
- host：与请求关联的主机（位于Host标头中）：localhost：8080
- server_name：服务器的主机名，不带端口号。值按以下顺序搜索：config.SERVER_NAME，x-forwarded-host标头，Request.host()
- server_port：类似于server_name。按以下顺序搜索：x-forwarded-port标头，Request.host()传输层套接字使用的实际端口。
- path：请求的路径：/posts/1/
- query_string：请求的查询字符串：foo= ar或空白字符串”
- uri_template：用于匹配路由处理程序的模板：/ posts / <id> /
- token：授权标头的值：Basic YWRtaW46YWRtaW4 =
- url_for：就像sanic.Sanic.url_for一样，但是会根据请求自动确定方案和netloc。由于这种方法的目标是产生正确的模式及netloc，_external是隐含的。



## 更改默认解析查询集的规则
在args和query_args属性内部使用的默认参数来解析queryset：
- keep_blank_values（布尔）：假 -标志表示是否在百分比编码查询空白值应该为空白串进行处理。真值表示应将空格保留为空白字符串。默认的false值指示将忽略空白值并将其视为未包含空白值。
- strict_parsing（bool）：假 -指示如何处理解析错误的标志。如果为false（默认值），错误将被忽略。如果为true，则错误引发ValueError异常。
- 编码和错误（str）：'utf-8'和'replace'-指定如何将百分比编码的序列解码为Unicode字符，这是bytes.decode（）方法所接受的。

如果要更改默认参数，可以使用新值调用get_args和get_query_args方法。
对于queryset /?test1=value1&test2=&test3=value3：

```python
from sanic.response import json

@app.route("/query_string")
def query_string(request):
    args_with_blank_values = request.get_args(keep_blank_values=True)
    return json({
        "parsed": True,
        "url": request.url,
        "args_with_blank_values": args_with_blank_values,
        "query_string": request.query_string
    })
```

输出结果:

```shell
{
    "parsed": true,
    "url": "http:\/\/0.0.0.0:8000\/query_string?test1=value1&test2=&test3=value3",
    "args_with_blank_values": {"test1": ["value1"], "test2": "", "test3": ["value3"]},
    "query_string": "test1=value1&test2=&test3=value3"
}
```


## 使用get和getlist访问值

该request.args中收益的子类字典称为requestParameters的。使用此对象时的主要区别是get和getlist方法之间的区别。
- get（key，default = None）正常运行，除了当给定键的值是列表时，仅返回第一项。
- getlist（key，default = None）正常运行，返回整个list。

```shell
from sanic.request import RequestParameters
args = RequestParameters()
args['titles'] = ['Post 1', 'Post 2']
args.get('titles') # => 'Post 1'
args.getlist('titles') # => ['Post 1', 'Post 2']
```

## request.endpoint
该request.endpoint属性保存处理程序的名称。例如，以下路线将返回“ hello”

```python
from sanic.response import text
from sanic import Sanic

app = Sanic()

@app.get("/")
def hello(request):
    return text(request.endpoint)
```

或者，使用蓝图将包括两者，并以句点分隔。例如，以下路由将返回foo.bar：


```shell
from sanic import Sanic
from sanic import Blueprint
from sanic.response import text


app = Sanic(__name__)
blueprint = Blueprint('foo')

@blueprint.get('/')
async def bar(request):
    return text(request.endpoint)

app.blueprint(blueprint)

app.run(host="0.0.0.0", port=8000, debug=True)
```
