---
id: testing
title: 测试
author:胖蔡
---

Sanic端点可以使用test_client对象在本地进行测试，该对象取决于一个附加程序包：httpx 库，该库实现了一个镜像请求库的API 。

该test_client自曝获得，后，放，删除，补丁，头和选择方法，为您对您的应用程序运行。一个简单的示例（使用pytest）如下所示：

```python
# Import the Sanic app, usually created with Sanic(__name__)
from external_server import app

def test_index_returns_200():
    request, response = app.test_client.get('/')
    assert response.status == 200

def test_index_put_not_allowed():
    request, response = app.test_client.put('/')
    assert response.status == 405
    
```
    
在内部，每次调用test_client方法之一时，Sanic应用程序将在127.0.0.1:42101上运行，并使用httpx针对您的应用程序执行测试请求。

该test_client方法接受以下参数和关键字参数：
- uri （默认值'/'`）表示要测试的URI的字符串。
- collect_request （默认为True）一个布尔值，确定函数是否将返回原始请求。如果设置为True，则返回值为（request，response）的元组，如果为False，则仅返回响应。
- server_kwargs （默认为{}），用于在运行测试请求之前将其他参数传递给app.run。
- debug （默认为False）一个布尔值，用于确定是否以调试模式运行服务器。

该函数还接受* request_args和** request_kwargs，它们直接传递给请求。

例如，要将数据提供给GET请求，您可以执行以下操作：

```python
def test_get_request_includes_data():
    params = {'key1': 'value1', 'key2': 'value2'}
    request, response = app.test_client.get('/', params=params)
    assert request.args.get('key1') == 'value1'
```
并将数据提供给JSON POST请求：

```python
def test_post_json_request_includes_data():
    data = {'key1': 'value1', 'key2': 'value2'}
    request, response = app.test_client.post('/', data=json.dumps(data))
    assert request.json.get('key1') == 'value1'
```
有关httpx可用参数的更多信息，可以在[ httpx文档中找到。

## 使用随机端口
如果您需要使用内核选择的免费非特权端口而不是SanicTestClient的默认端口进行测试，则可以通过指定 port = None进行测试。在大多数系统上，端口范围为1024至65535。

```python
# Import the Sanic app, usually created with Sanic(__name__)
from external_server import app
from sanic.testing import SanicTestClient

def test_index_returns_200():
    request, response = SanicTestClient(app, port=None).get('/')
    assert response.status == 200
pytest，中信高科
pytest-sanic是pytest插件，它可以帮助您异步测试代码。只需编写如下测试

async def test_sanic_db_find_by_id(app):
    """
    Let's assume that, in db we have,
        {
            "id": "123",
            "name": "Kobe Bryant",
            "team": "Lakers",
        }
    """
    doc = await app.db["players"].find_by_id("123")
    assert doc.name == "Kobe Bryant"
    assert doc.team == "Lakers" 
```
pytest-sanic还提供了一些有用的固定装置，例如循环，未使用的端口，test_server，test_client。

```python
@pytest.yield_fixture
def app():
    app = Sanic("test_sanic_app")

    @app.route("/test_get", methods=['GET'])
    async def test_get(request):
        return response.json({"GET": True})

    @app.route("/test_post", methods=['POST'])
    async def test_post(request):
        return response.json({"POST": True})

    yield app


@pytest.fixture
def test_cli(loop, app, test_client):
    return loop.run_until_complete(test_client(app, protocol=WebSocketProtocol))


#########
# Tests #
#########

async def test_fixture_test_client_get(test_cli):
    """
    GET request
    """
    resp = await test_cli.get('/test_get')
    assert resp.status == 200
    resp_json = await resp.json()
    assert resp_json == {"GET": True}

async def test_fixture_test_client_post(test_cli):
    """
    POST request
    """
    resp = await test_cli.post('/test_post')
    assert resp.status == 200
    resp_json = await resp.json()
    assert resp_json == {"POST": True}
```
