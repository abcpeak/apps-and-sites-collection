
# JS 脚本

[!NOTE]

1、网址打开编码Encode为UTF-8的js是页面，而打开编码为GBK的js是下载当前js文件
如果js里有： 非 UTF-8 编码、BOM 头、奇怪的不可见字符、混入二进制内容，GitHub 会把它当成 binary file， 就会强制下载

2、文件夹最好用全部小写

3、地址转换
https://github.com/用户名/仓库名/blob/分支/路径
⬇
https://raw.githubusercontent.com/用户名/仓库名/分支/路径

[!TIP]

## JS Scripts

https://raw.githubusercontent.com/abcpeak/apps-and-sites-collection/main/scripts/ippure.js

iOS Shortcuts：IPPure

## Shadowrocket(小火箭) 安装JS、模块module

> 小火箭去广告原理：通过重写将可莉插件中心的Loon插件借用Script-Hub无缝转换为Shadowrocket支持的模块。

1、Shadowrocket 安装 Script-Hub 模块

2、安装Shadowrocket转换器：[PluginHub2Shadowrocket.srmodule](https://raw.githubusercontent.com/abcpeak/apps-and-sites-collection/main/modules/PluginHub2Shadowrocket.srmodule)

3、访问[可莉插件中心](https://pluginhub.kelee.one)，直接点击安装即可。

### 📺 YouTube 去广告

功能：去除视频广告及界面推广，移除 Shorts 短视频

备注：小火箭安装后点击模块编辑参数进行配置

Shadowrocket 模块：YouTubeNoAd.sgmodule

### 🚖 滴滴出行去广告

功能：精简底部标签栏，去除开屏与应用内广告

Shadowrocket 模块：DiDiClean.sgmodule

### 🌍 国际版哔哩净化

功能：移除热搜、搜索发现，精简 “我的” 页面布局

Shadowrocket 模块：BiliIntlClean.sgmodule

### 📕 小红书去广告及水印

功能：移除首页瀑布流和搜索框广告，移除图片/视频保存水印 (不包含评论区图片水印)

备注：优选在 HTTP 代理模式下使用以获得最佳效果

Shadowrocket 模块：RedBook.sgmodule
