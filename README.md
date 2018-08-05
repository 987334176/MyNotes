## 说明
我的笔记
前端：webpack + Vue + VueRouter + VueX，使用vue-cli构建项目
后端：Django

## 运行环境

| Project | Status | Description |
|---------|--------|-------------|
| python          | 3.5.4 | 在这个版本以及以上都可以 |
| django                | 1.11 | 老版本 |
| django-cors-headers                | 2.4.0 | pip安装最新版即可 |
| node                | 10.7.0 | 暂无 |
| npm                | 6.1.0 | 暂无 |
| webpack                | 4.16.2 | 暂无 |

## 功能

| 路径 | 功能 | 技术说明 |
|---------|--------|-------------|
| /          | 首页 | 无 |
| /note/          | 我的笔记 | 查询+增加+删除 |

## 功能说明
主要我的笔记功能区域

左侧列表：使用axios发送GET请求到后端,获取笔记列表

中间textarea区域,输入的内容要求是Markdown格式的

右侧div区域，展示Markdown的效果。

它是实时展示的，只要左侧的textarea区域有变动，右侧div会更新

使用highlight.js，来展示代码区域。主题为monokai.css

输入标题和内容，点击添加，会使用axios发送POST请求到后端，增加一条记录

返回成功后，前端会自动增加列表。整个过程不会刷新页面！

## 运行方式
请确保已经安装了node和webpack

前端：
进入目录 前端Vue\my-project

运行命令:`
```dos
npm install
```
根据package.json会自动安装依赖包

使用命令运行Vue项目
```dos
npm run dev
```

后端：请确保版本是Django 1.11，否则运行报错

使用Pycharm直接运行即可，
或者使用命令
```python
python manage.py runserver
```

## 效果
我的笔记页面：

![Image text](https://github.com/987334176/MyNotes/blob/master/%E6%95%88%E6%9E%9C%E5%9B%BE.gif)


Copyright (c) 2018-present, xiao You