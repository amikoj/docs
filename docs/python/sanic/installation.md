---
id: installation
title: 安装Sanic
sidebar_label: 安装
---

## 环境

在开始之前，请确保同时拥有pip和Python 3.6版。Sanic使用新的async / await 语法，因此早期版本的python将无法使用。
> 如果您使用的是Fedora 28或更高版本的全新安装，请确保已redhat-rpm-config安装软件包，以防万一您想sanic与ujson依赖项一起使用。


```shell
pip3 install sanic
```

## 依赖控制

若是你不想在安装 **sanic** 的时候安装uvloop或者ujson,可以通过设置一个或多个环境变量,类似 **SANIC_NO_X(X = UVLOOP / UJSON)** 设置其为true来控制功能模块是否需要，操作命令如下:
```shell
SANIC_NO_UVLOOP=true SANIC_NO_UJSON=true pip3 install sanic

```

你也可以从conda-forge 安装Sanic:

```shell
conda config --add channels conda-forge
conda install sanic

```

