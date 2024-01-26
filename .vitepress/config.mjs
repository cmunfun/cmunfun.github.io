import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";

export default defineConfig({
  base:'/',
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "UNFUN Project",
  description: "A Awesome Pages",
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    // 配置logo位置，public目录
    logo: "logo.svg",
    // 顶部导航栏配置
    nav: [
      {
        text: "Python",
        items: [
          { text: "Basic Grammar", link: "/docs/python/base" },
          { text: "Spider", link: "/docs/python/spider" },
        ],
      }
    ],
    // 侧边栏配置，自动生成侧边栏
    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },
    navbar: true, //开启导航栏
    sidebar: true, // 关闭侧边栏
    lastUpdated: true, // 显示上次修改时间
    // aside: "left", // 设置右侧侧边栏在左侧显示
    // 社交链接,国内需要svg设置
    socialLinks: [
      { icon: "github", link: "https://github.com/cmunfun" }
    ],
    // 底部配置
    footer: {
      copyright: "Copyright@ 2024 UNFUN",
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search",
            buttonAriaLabel: "Search",
          },
          modal: {
            noResultsText: "No results could be found",
            resetButtonTitle: "Clear the search criteria",
            footer: {
              selectText: "Choice",
              navigateText: "Switch",
            },
          },
        },
      },
    },
  },
  // 配置markdown扩展
  markdown: {
    lineNumbers: true, // 开启代码块行号
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    // anchor: {
    //   permalink: markdownItAnchor.permalink.headerLink(),
    // },
    // toc: { level: [2, 3] },
    // config: (md) => {
    //   md.use(tocPlugin);
    // },
  },
});
