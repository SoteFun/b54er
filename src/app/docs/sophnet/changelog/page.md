---
title: 变更日志
---

## 2.3.0 Beta

- 增加当流式输出联网时, 解析参考资料并输出的功能. 
  - 非流下, 似乎存在问题, 因此不建议在非流情况下使用搜索模型. 

## 2.2.1 Beta

- 修复无法处理 reasoning_content 的问题

## 2.2.0 Beta

增加 -Full-Context 模型后缀, 会将长上下文合并, 以让模型保留对上下文的记忆.
这个更改是因为疑似 SophNet 会隐式截断多于10条的上下文.

## 2.1.0 Beta

> 大佬，能否推出-search的模型(webSearchEnable=true)？比如需要联网就直接选-search的？

应佬友要求增加, 但为了契合 SophNet 模型命名风格, 改为了 -Search 后缀
