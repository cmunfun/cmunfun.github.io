import { defineConfig } from "vitepress";

/**
 * VitePress 站点配置
 * 当前站点结构：
 *
 * index.md                                      -> 首页 /
 * docs/ai/index.md                             -> /docs/ai/
 * docs/strategy/index.md                       -> /docs/strategy/
 * docs/supply-chain/index.md                   -> /docs/supply-chain/
 * docs/pages-introduction/pages-introduction.md -> /docs/pages-introduction/pages-introduction
 */
export default defineConfig({
  /**
   * 网站部署路径
   * 站点部署在根域名 https://unfun.fun/
   * 保持 "/"
   */
  base: "/",

  /**
   * 浏览器标签页图标
   * 文件来源：public/logo.svg
   */
  head: [["link", { rel: "icon", href: "/logo.svg" }]],

  /**
   * 网站标题
   * 控制左上角站点名称、浏览器标题等
   */
  title: "UNFUN AI+",

  /**
   * 网站描述
   * 主要用于 SEO 和页面元信息
   */
  description: "AI+, Strategy, Digital Transformation, IPD and Integrated Supply Chain",

  /**
   * 主题配置
   * 控制导航栏、侧边栏、搜索、页脚等
   */
  themeConfig: {
    /**
     * 左上角 Logo
     * 文件来源：public/logo.svg
     */
    logo: "logo.svg",

    /**
     * 顶部导航栏
     * 控制页面右上角的主导航
     */
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Introduction",
        link: "/docs/pages-introduction/pages-introduction",
      },
      {
        text: "AI+",
        link: "/docs/ai/",
      },
      {
        text: "Strategy",
        link: "/docs/strategy/",
      },
      {
        text: "Supply Chain",
        link: "/docs/supply-chain/",
      },
    ],

    /**
     * 侧边栏
     * 进入不同目录时，显示对应的左侧菜单
     */
    sidebar: {
      /**
       * 页面介绍
       */
      "/docs/pages-introduction/": [
        {
          text: "Introduction",
          items: [
            {
              text: "Page Introduction",
              link: "/docs/pages-introduction/pages-introduction",
            },
          ],
        },
      ],

      /**
       * AI+ 目录
       */
      "/docs/ai/": [
        {
          text: "AI+",
          items: [
            {
              text: "AI+ Overview",
              link: "/docs/ai/",
            },
          ],
        },
      ],

      /**
       * Strategy 目录
       */
      "/docs/strategy/": [
        {
          text: "Strategy",
          items: [
            {
              text: "Strategy Overview",
              link: "/docs/strategy/",
            },
          ],
        },
      ],

      /**
       * Supply Chain 目录
       */
      "/docs/supply-chain/": [
        {
          text: "Supply Chain",
          items: [
            {
              text: "Supply Chain Overview",
              link: "/docs/supply-chain/",
            },
          ],
        },
      ],
    },

    /**
     * 文章页目录配置
     * 只影响普通 Markdown 文章页，不影响首页 hero 区域
     */
    outlineTitle: "文章目录",
    outline: [2, 6],
    aside: "left",

    /**
     * 显示文章最后更新时间
     */
    lastUpdated: true,

    /**
     * 右上角 GitHub 图标
     */
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cmunfun",
      },
    ],

    /**
     * 页脚版权
     * 年份会在每次构建时自动更新
     */
    footer: {
      copyright: `© ${new Date().getFullYear()} UNFUN AI+. All rights reserved.`,
    },

    /**
     * 本地搜索配置
     */
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

  /**
   * Markdown 渲染配置
   */
  markdown: {
    /**
     * 代码块显示行号
     */
    lineNumbers: true,
  },
});
