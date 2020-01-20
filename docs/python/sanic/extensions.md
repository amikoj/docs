---
id: extensions
title: 扩展
author:胖蔡
---

## API
- [Sanic CRUD](https://github.com/Typhon66/sanic_crud)：使用Peewee模型生成CRUD REST API。
- [Sanic-GraphQL](https://github.com/graphql-python/sanic-graphql)：GraphQL与Sanic的集成
- [Sanic-RestPlus](https://github.com/ashleysommer/sanic-restplus)：Sanic的Flask-RestPlus的端口。具有SwaggerUI生成功能的全功能REST API。
- [Sanic-Transmute](https://github.com/yunstanford/sanic-transmute)：Sanic扩展，可从python函数和类生成API，并自动生成Swagger UI /文档。

## 认证方式
- [Sanic-JWT](https://github.com/ahopkins/sanic-jwt)：JSON Web令牌（JWT）的身份验证扩展。
- [Sanic-JWT-Extended](https://github.com/NovemberOscar/Sanic-JWT-Extended)：flask-jwt-extended的端口，提供访问/刷新令牌，具有新鲜，轻松的自定义声明插入和基于角色的访问控制
- [Sanic-OAuth](https://gitlab.com/SirEdvin/sanic-oauth)：具有许多提供程序和OAuth1 / OAuth2支持的OAuth库。
- [Sanic-Token-Auth](https://github.com/saabeilin/sanic-token-auth)：基于令牌的简单身份验证。
- [Sanic-HTTPAuth](https://github.com/MihaiBalint/Sanic-HTTPAuth)：Flask-HTTPAuth的叉子，为Sanic路由提供基本，摘要和令牌HTTP身份验证

## Development
- [Pytest-Sanic](https://github.com/yunstanford/pytest-sanic)：Sanic的pytest插件。它可以帮助您异步测试代码。
- [Sanic-OpenAPI](https://github.com/channelcat/sanic-openapi)：支持OpenAPI，外加Swagger UI。
- [Sanic-Devtools](https://github.com/yunstanford/sanic-devtools)：Sanic的开发工具。

## 前端
- [Jinja2-sanic](https://github.com/yunstanford/jinja2-sanic)：Sanic的jinja2模板渲染器。
- [Sanic-Babel](https://github.com/lixxu/sanic-babel)：借助该Babel库，为Sanic应用程序添加了i18n / l10n支持
- [Sanic-CORS](https://github.com/ashleysommer/sanic-cors)：sanic 跨域处理库。
- 【Sanic-Jinja2](https://github.com/lixxu/sanic-jinja2)：支持Jinja2模板。

## 监控
- [Sanic-Prometheus](https://github.com/dkruchinin/sanic-prometheus)：Sanic的Prometheus指标
- [Prometheus-Sanic：Fork](https://github.com/skar404/prometheus-sanic)：[dkruchinin/sanic-prometheus](https://github.com/dkruchinin/sanic-prometheus)
- [Sanic-Rollbar](https://github.com/saabeilin/sanic-rollbar)：Sanic的Rollbar（例外报告）集成
- [Sanic-Sentry](https://github.com/serathius/sanic-sentry)：Sanic的Sentry集成。
- [Sanic-Statsd](https://github.com/saabeilin/sanic-statsd)：Sanic的StatsD（当前仅DataDog； WIP）度量标准收集

## ORM
- [GINO](https://github.com/fantix/gino)：基于SQLAlchemy核心的轻量级异步ORM，带有asyncpg方言和Sanic扩展。
- [Sanic-Motor](https://github.com/lixxu/sanic-motor)：简单的motor包装器。
- [Sanic-mongodb-extension](https://github.com/Relrin/sanic-mongodb-extension)：具有对Sanic框架的μMongoODM支持的MongoDB扩展

## Requests and Responses
- [Python-Sanicargs](https://github.com/trustpilot/python-sanicargs)：使用类型注释和修饰符在Sanic中解析查询args。
- [Sanic Brogz](https://github.com/michaelchisari/sanic_brogz)：使您可以轻松gzip Sanic响应。Flask-Compress的端口。
- [Sanic Gzip](https://github.com/koug44/sanic-gzip)：使用装饰器向Sanic端点添加压缩
- [Sanic-Limiter](https://github.com/bohea/sanic-limiter)：sanic的速率限制。
- [Sanic-UserAgent](https://github.com/lixxu/sanic-useragent)：添加user_agent到请求
- [Sanic-SSLify](https://github.com/dzqdzq/sanic_sslify)：在Sanic应用程序上强制使用SSL。Flask-SSLify的端口。

## Caching
- [Sanic-redis-extension](https://github.com/Relrin/sanic-redis-extension)：Redis（通过aioredis）对Sanic框架的支持

## Queues
- [Sanic-amqp-extension](https://github.com/Relrin/sanic-amqp-extension)：AMICP对Sanic框架的支持

## 脚手架
- [Cookiecutter-Sanic](https://github.com/harshanarayana/cookiecutter-sanic)：在定义良好的项目结构中，只需几秒钟即可启动并运行sanic应用程序。包括用于部署，单元测试，自动发布管理和更改日志生成的电池。

## Session
- [Sanic Sessions](https://github.com/xen/sanic_session)：对人类的会话支持。与不同的后端Redis，Mongodb，memcache或内存存储一起使用。

## 工具
- [Python-Paginate](https://github.com/lixxu/python-paginate)：简单的分页支持。
- [Sanic-Dispatch](https://github.com/ashleysommer/sanic-dispatcher)：受DispatcherMiddlewarewerkzeug 启发的调度员。可以充当Sanic-to-WSGI适配器。
- [Sanic-EnvConfig](https://github.com/jamesstidard/sanic-envconfig)：将环境变量放入您的sanic配置中。
## 资源
---------

## 例子
- [SanicCRUD-vue](https://github.com/boylegu/SanicCRUD-vue)：具有vueJS + webpack的Sanic示例示例库
- [Sanic-Nginx-Docker-Example](https://github.com/itielshwartz/sanic-nginx-docker-example)：使用docker-compose在nginx之后的Sanic的简单易用示例。
- [Websocket PubSub Feed](https://gist.github.com/ahopkins/9816b39aedb2d409ef8d1b85f62e8bec)：使用Redis构建基于Websocket的pubsub feed的起点
- [Open Matchmaking Auth/Auth microservice](https://github.com/OpenMatchmaking/microservice-auth)：用于开放式对接平台的认证/授权微服务
- [Open Matchmaking Game servers pool microservice](https://github.com/OpenMatchmaking/microservice-game-servers-pool)：用于处理游戏服务器池的微服务
- [Open Matchmaking Player statistics microservice](https://github.com/OpenMatchmaking/microservice-player-statistics)：用于存储球员统计信息
- [Sanic + Motor](https://github.com/humbss/sanic-motor-example)：构建与Motor Mongo DB集成的Sanic应用程序的起点

## 视频
- [Dougal Matthews - -具有Sanic的异步Web应用程序](https://www.youtube.com/watch?v=wb0lk4e9DEg&t=1s)-EuroPython 2017
- [Chris Hawkes - Python Sanic教程](https://www.youtube.com/watch?v=WiGsWfwh0yY&t=3s)
- [TalkPython - Episode #188：使用Sanic进行Pythonic网络的异步](https://talkpython.fm/episodes/show/188/async-for-the-pythonic-web-with-sanic)
