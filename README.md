# kpm
a package manager for knowledge

## 组件化的知识管理系统

越来越多的跨界知识需要学习，但是在面对陌生领域时我们往往一筹莫展，四处询问有没有学习路线图可以看。我们为什么不借鉴“组件化”的思想，只学习需求相关的知识组块呢，使用“依赖管理”的方法，我们就可以追溯到需要学习的知识。

而一旦建立了组件化的知识系统，那么随之而来的就是“栅格化”带来的极大的组合效应。

## 安装

实验阶段，还没有发布到npm
	
	git clone git@github.com:onthedesk/kpm.git
	
	cd kpm 
	
	npm link
	
## 使用

### 新建知识组件

	kpm init
	
根据步骤输入相关属性就可以了，接下来就是添加知识相关的资源了，书籍、音频、视频、笔记等等都可以，暂时没有对组件的形式做限定，但是“知识容量”要尽量要小，比如一个算法，一个概念，重点是管理**依赖**，是的，**依赖**。


### 使用知识组件	
	
	kpm install linear-regression
    
安装了一个名为“线性回归”的知识包，会自动安装"统计推断"等，而且会根据用户对“依赖树”中知识的掌握状态，自动标注需要学习的新知识。

## 拓展阅读

* [学会如何学习-组块](https://www.coursera.org/learn/learning-how-to-learn/home/week/1)
* [思维运筹学导论（实践篇 · 组块化 · 上）](https://zhuanlan.zhihu.com/p/19879632)
* [思维运筹学导论（实践篇 · 组块化 · 下）](https://zhuanlan.zhihu.com/p/19882157)
* [思维运筹学导论（实践篇 · 栅格化 · 上）](https://zhuanlan.zhihu.com/p/19893647?refer=intelligence)
* [思维运筹学导论（实践篇 · 栅格化 · 下）
](https://zhuanlan.zhihu.com/p/20423041?refer=intelligence)

## License

Licensed under the MIT License
