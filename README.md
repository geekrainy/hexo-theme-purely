# Purely

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/geekrainy/hexo-theme-purely)  [![Scrutinizer Build](https://img.shields.io/scrutinizer/build/g/filp/whoops.svg?style=flat-square)](https://travis-ci.org/geekrainy/hexo-theme-purely)  

Purely 是一款极简的主题，前身为 Simple，重新启动开发，更名为 Purely. 这里是 [Hexo](https://hexo.io/) 的版本，此版本仍在开发中，我将尽快完成它。包括完善基本配置、加入新的配色、优化目录架构和编码规范。

> 你可以在这里获得 Purely 的 Typecho 版本，[typecho-theme-simple](https://github.com/geekrainy/typecho-theme-simple)，距离上次维护过去很久，发现 BUG 可以进行反馈，我会抽时间修复它。

## 安装

在 `Hexo` 根目录下执行。

```shell
git clone https://github.com/geekrainy/hexo-theme-purely.git themes/purely
```

在站点配置文件中修改 `_config.yml` 文件，修改字段。

```yml
## Themes: http://hexo.io/themes/
theme: purely
```

主题配置文件：
```yml
# Header
menu:
  home: /
  archives: /archives
rss: /atom.xml

# Schema
color: blue

# Content
excerpt_link: Read More
fancybox: true

# Miscellaneous
#favicon: /favicon.png

# Comments
## Disqus
disqus_shortname:
## Gitment
gitment:
  enable: false
  github_user:
  github_repo:
  client_id:
  client_secret:


# Site analytics
google_analytics:
cnzz_analytics:
tencent_analytics:

```

## TODO

- [x] 代码高亮主题
- [ ] 评论插件支持
  - [x] Disqus
  - [x] Gitment
- [ ] 移动端适配
- [x] 数据统计支持
- [ ] 搜索支持
- [x] 多语言支持
