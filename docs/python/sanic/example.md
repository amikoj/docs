---
id: example
title: 创建一个Example
author:胖蔡
---

## 创建一个main.py文件

```python
from sanic import Sanic
from sanic.response import json

app = Sanic()

@app.route("/")
async def test(request):
  return json({"hello": "world"})

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=8000)

```



## 运行服务


```shell

python main.py

```


## 查看浏览器

在浏览器中打开地址http://0.0.0.0:8000。您应该看到消息Hello world！。您现在已经可以使用Sanic服务器了！
