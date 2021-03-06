---
id: conf
title: 参数配置
sidebar_label: 参数配置
author: 胖蔡
---

任何相当复杂的应用程序都需要未包含在实际代码中的配置。对于不同的环境或安装，设置可能会有所不同。

## 基础配置
Sanic将配置保存在应用程序对象的config属性中。配置对象仅仅是可以使用点符号或字典进行修改的对象：

```python
app = Sanic('myapp')
app.config.DB_NAME = 'appdb'
app.config.DB_USER = 'appuser'
```

由于config对象实际上是一个字典，因此可以使用它的update方法来一次设置多个值：

```python
db_settings = {
    'DB_HOST': 'localhost',
    'DB_NAME': 'appdb',
    'DB_USER': 'appuser'
}
app.config.update(db_settings)
```

通常，惯例是仅具有大写配置参数。下文描述的用于加载配置的方法仅查找此类大写参数。

## 配置加载

Sanic 可以通过以下几种方式来加载配置项：

- 通过系统环境变量加载
任何使用SANIC_前缀定义的变量都将应用于sanic配置。例如，设置SANIC_REQUEST_TIMEOUT将由应用程序自动加载并馈入REQUEST_TIMEOUT配置变量。您可以将不同的前缀传递给Sanic：

```python
app = Sanic(load_env='MYAPP_')
```
那么上面的变量将是MYAPP_REQUEST_TIMEOUT。如果要禁用从环境变量加载，可以将其设置为 **False**：

```shell
app = Sanic(load_env=False)
```

- 通过python对象加载
如果有很多配置值，并且它们具有合理的默认值，则将它们放入模块中可能会有所帮助：

```python
import myapp.default_settings

app = Sanic('myapp')
app.config.from_object(myapp.default_settings)

```

或者也可以通过配置路径：

```python
app = Sanic('myapp')
app.config.from_object('config.path.config.Class')
```


- 通过文件加载

通常，您会希望从不属于分布式应用程序的文件中加载配置。您可以使用from_pyfile（/path/to/config_file）从文件中加载配置。但是，这需要程序知道配置文件的路径。因此，您可以在环境变量中指定配置文件的位置，并告诉Sanic使用它来查找配置文件：


```python
app = Sanic('myapp')
app.config.from_envvar('MYAPP_SETTINGS')

```
然后，可以在设置了MYAPP_SETTINGS环境变量的情况下运行您的应用程序：

```shell
#$ MYAPP_SETTINGS=/path/to/config_file python3 myapp.py
#INFO: Goin' Fast @ http://0.0.0.0:8000
```


配置文件是常规的Python文件，为了加载它们而执行该文件。这使您可以使用任意逻辑来构建正确的配置。仅将大写变量添加到配置中。最常见的配置包括简单的键值对：

```python
# config_file
DB_HOST = 'localhost'
DB_NAME = 'appdb'
DB_USER = 'appuser'
```


- 内置的配置值

开箱即用，只有几个预定义的值可以在创建应用程序时覆盖。

|变量|默认|描述|
|:---|:---|:---|
|REQUEST_MAX_SIZE|100000000|请求的大小（字节）|
|REQUEST_BUFFER_QUEUE_SIZE|100|请求流缓冲区队列大小|
|REQUEST_TIMEOUT|60|请求到达需要多长时间（秒）|
|RESPONSE_TIMEOUT|60|响应需要花费多长时间（秒）|
|KEEP_ALIVE|True|False时禁用保持活动状态|
|KEEP_ALIVE_TIMEOUT|5|保持TCP连接打开的时间（秒）|
|GRACEFUL_SHUTDOWN_TIMEOUT|	15.0|强制关闭非空闲连接的等待时间（秒）|
|ACCESS_LOG|True|禁用或启用访问日志|
|PROXIES_COUNT|-1|应用程序前面的代理服务器的数量（例如nginx；请参见下文）|
|FORWARDED_FOR_HEADER|“X-Forwarded-For”|包含客户端和代理ip的“ X-Forwarded-For” HTTP标头的名称|
|REAL_IP_HEADER|“X-Real-IP”|包含真实客户端ip的“ X-Real-IP” HTTP标头的名称|

## 不同的超时变量

### REQUEST_TIMEOUT
请求超时测量从新的打开的TCP连接传递到Sanic后端服务器到接收到整个HTTP请求之间的时间。如果花费的时间超过 REQUEST_TIMEOUT值（以秒为单位），则将其视为客户端错误，因此Sanic会生成HTTP 408响应并将其发送给客户端。如果您的客户端通常传递非常大的请求有效负载或非常缓慢地上传请求，则将此参数的值设置得更高。

### RESPONSE_TIMEOUT
响应超时用于衡量Sanic服务器将HTTP请求传递给Sanic App的瞬间与HTTP响应被发送给客户端的瞬间之间的持续时间。如果花费的时间超过RESPONSE_TIMEOUT 值（以秒为单位），则将其视为服务器错误，因此Sanic会生成HTTP 503响应并将其发送给客户端。如果您的应用程序可能需要长时间运行以延迟响应的生成，请将此参数的值设置得更高。

### KEEP_ALIVE_TIMEOUT
### 什么是保持生命？保持活动超时值有什么作用？

Keep-Alive是HTTP 1.1中引入的HTTP功能。发送HTTP请求时，客户端（通常是Web浏览器应用程序）可以设置Keep-Alive标头，以指示http服务器（Sanic）在发送响应后不关闭TCP连接。这使客户端可以重用现有的TCP连接以发送后续的HTTP请求，并确保客户端和服务器的网络通信效率更高。

默认情况下，KEEP_ALIVE配置变量在Sanic中设置为True。如果您的应用程序中不需要此功能，请将其设置为False，以使所有客户端连接在发送响应后立即关闭，无论请求上的Keep-Alive标头如何。

服务器保持TCP连接打开的时间由服务器本身决定。在Sanic中，使用KEEP_ALIVE_TIMEOUT值配置该值。默认情况下，它设置为5秒。这是与Apache HTTP服务器相同的默认设置，并且在允许客户端有足够的时间发送新请求和不立即打开太多连接之间取得了很好的平衡。不要超过75秒，除非您知道您的客户端正在使用支持TCP连接保持打开状态这么长时间的浏览器。

以供参考：

- Apache httpd服务器默认keepalive超时= 5秒
- Nginx服务器默认Keepalive超时= 75秒
- Nginx性能调整准则使用keepalive = 15秒
- IE（5-9）客户端硬keepalive限制= 60秒
- Firefox客户端硬keepalive限制= 115秒
- Opera 11客户端硬性保持活动限制= 120秒
- Chrome 13+客户端Keepalive限制> 300+秒


## 代理配置
当您使用反向代理服务器（例如nginx）时，request.ip的值将包含代理的ip，通常为127.0.0.1。Sanic可以配置为使用代理标头来确定真实的客户端IP，可作为request.remote_addr使用。完整的外部URL也会从标头字段构建（如果可用）。

如果没有适当的预防措施，恶意客户端可能会使用代理标头欺骗其自身的IP。为避免此类问题，除非明确启用，Sanic不会使用任何代理标头。

反向代理服务的背后必须配置FORWARDED_SECRET，REAL_IP_HEADER和/或PROXIES_COUNT。

### 转发头

将FORWARDED_SECRET设置为目标代理使用的标识符。该机密用于安全地标识特定的代理服务器。给定上述标头，密码Pr0xy将使用第一行的信息，密码_1234proxy将使用第二行的信息。机密必须完全匹配secret或by的值。by by中的secret 必须以下划线开头，并且只能使用RFC 7239第6.3节中指定的字符 ，而secret没有这种限制。

Sanic会忽略没有密钥的任何元素，如果未设置密钥，甚至不会解析标头。

一旦找到受信任的转发元素，所有其他代理标头将被忽略，因为它已经包含有关客户端的完整信息。

### 传统代理头

- 将REAL_IP_HEADER设置为x-real-ip，true-client-ip，cf-connecting-ip或此类标头的其他名称。
- 将PROXIES_COUNT设置为x-forwarded-for（可通过FORWARDED_FOR_HEADER配置的名称）中预期的条目数。

如果通过这些方法之一找到了客户端IP，Sanic会对URL部分使用以下标头：

- x-forward-proto，x-forwarded-host，x-forwarded-port，x-forwarded-path以及（如有必要）x-scheme。


### 如果使用代理配置...

- 支持转发的代理：将FORWARDED_SECRET设置为代理在标头中插入的值

-- Apache Traffic Server：CONFIG proxy.config.http.insert_forwarded STRING for | proto | host | by = _secret
-- NGHTTPX：nghttpx –add-forwarded = for，proto，host，by –forwarded-for = ip –forwarded-by = _secret
-- NGINX：按照官方指示，在您的配置中添加任何位置：

- 具有客户端IP的自定义标头：将REAL_IP_HEADER设置为该标头的名称
- x-forwarded-for：将单个代理的PROXIES_COUNT设置为1，或将其设置为更大的值以允许Sanic选择正确的IP
- 无需代理：无需配置！

## Sanic 19.9中的更改
早期的Sanic版本具有不安全的默认设置。从19.9开始，必须手动设置代理设置，并且已删除了对否定PROXIES_COUNT的支持。
