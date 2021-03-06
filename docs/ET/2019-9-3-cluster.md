---
title: 数据分析之聚类分析
# display: home
image: https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20190903-bg.jpg
date: 2019-09-03
sidebar: auto
sidebarDepth: 2
tags: 
  - ET
  - 聚类分析
categories:
  - ET
---

## 前言

聚类分析是我们在进行数据分析中经常需要用到的一种分析方法，常见的方法主要有系统聚类法(hclust)和快速聚类法(kmeans)两种。聚类算法本质上是将我们所取到的数据分群，主要用于研究样本的分类问题，用于找寻数据后面群体的共同特征以挖掘出更大的价值。

![聚类分析样本](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20190903-1.jpg)

<!-- more -->

## 聚类分析的概念介绍

聚类分析又称群分析，其主要假设是数据间存在相似性，并以相似性为基础，同一个聚类中的模式（向量或多维空间的一个点）之间比不在一个聚类中的模式具有更多的相似性。聚类分析在数据挖掘领域是一种无监督学习，是在缺乏标签前提下的一种分类模型。通过对数据聚类后的簇进行分析，分析出更细致结果的过程。

::: tip
聚类分析在数据挖掘及统计分析方面有非常广泛的应用
:::

在进行聚类分析之前，首先我们要搞清楚的一件事情就是我们进行这一项聚类分析的时候想要达到什么样的目的，带着目的性进行分析会得到最大的收益。

## 聚类算法的选择

我们这里不以具体算法作为讨论，只讨论系统聚类与非系统聚类（K均值聚类）两种情况。

![算法选择](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20190903-4.jpg)

### 结果比较

首先是两种方法聚类出来的结果不甚相同，表现为：

- 系统聚类会对不同的类数产生一系列的聚类结果。得到的结果为树状。

- 非系统聚类只会产生指定类数的聚类结果。但相对于系统聚类更高效准确，适合用于数据量大的分析场景。

### 做法比较

- 系统聚类开始时将每个样本作为一类，先把最靠近的类聚成小类，再按已聚合的类间距离合并，不断继续发展直至一切子类都聚合到大类之中。

- 非系统聚类随机选取 K 个对象作为初始的聚类中心，然后计算每个对象与各个种子聚类中心的距离，然后将它分配至距离其最近的聚类中心。

## 聚类算法的选点研究

### 目标问题 :flags:

选点也即选择用来分析的维度数据，在选择数据模型之前我们先要考虑清楚我们想要解决的问题。我们先来看这么个案例，我们想要得到学校里学习的分类数据，那么对于我们的目的而言，是**学习的行为**更重要还是我们用于分析学习的**学生本身的信息**更重要呢？这是一个值得我们好好进行思考的问题。

如果我们只是研究学习行为本身，那么应该完全排除学生信息这一甚至可以称为干扰因素的数据，这样才能得到最纯粹的，完全由学习行为数据驱动的分析结果。

::: tip
结合分析有时会得到预想之外的结果
:::

### 变量选择 :flags:

首先我们要有那么个前提，变量的选择完全是一个主观的命题。完全依赖于研究者对应命题的理解，但是我们可以做到的一件事就是对于高相关性的变量的过滤。因为变量间的相关性过高容易产生相当数量的边缘变量，不好区分的特性自然就让我们分析的结果大打折扣了。

随机采样的样本大小很重要，也不能过小。需要足够有代表性，即小样本依然可以代表总体的数据分布。如果最终需要划分很多个簇，那么要非常小心，因为小样本可能无法体现体量很小的簇。

### 评估标准 :flags:

预先设定一些评估标准，比如簇内的紧凑度和簇间的疏离度，或者定义好的函数如Silhouette Coefficient。一般来说设定一个好的评估标准并不容易，所以不能死板的单纯依赖评估函数。

在融合过程中要关注样本上的聚类结果是否稳定，随机性是否过大。要特别注意不同样本上的簇标号是否统一，如何证明不同样本上的簇结果是一致的。

应该牢记的是我们的分析始终服务于我们的决策用途，视具体情况而定。

![分析例子](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/20190903-3.jpg)

## 聚类分析的实现

### 系统聚类方法 :flags:

### 非系统聚类方法 :flags:

[聚类分析方法实现](https://blog-img-1252360401.cos.ap-guangzhou.myqcloud.com/)

[聚类分析的SPSS实现](https://jingyan.baidu.com/article/2c8c281d9de97f0009252a61.html)

## 结语

本文只是简要对聚类分析的概念进行基本的介绍。对于聚类分析的研究完全可以拓展成为一门单独的学科，在统计分析以及机器学习应用的数据挖掘方面发挥着重要的作用。

聚类分析的结果常常可以作为其他分析方法的前提，用聚类分析的思想对我们的数据元帮助我们更好的理解我们的数据。


## 参考资料
- https://blog.csdn.net/wsp_1138886114/article/details/80475981#1-%E8%81%9A%E7%B1%BB%E5%88%86%E6%9E%90
- https://blog.csdn.net/mengjizhiyou/article/details/83216747
- http://www.sohu.com/a/281972579_165070
- https://baike.baidu.com/item/%E8%81%9A%E7%B1%BB%E7%AE%97%E6%B3%95/1252197?fr=aladdin