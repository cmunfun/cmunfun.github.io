import { defineConfig } from "vitepress";

/**
 * VitePress 站点配置
 *
 * 当前目标：
 * 1. 顶部导航保留 Articles 下拉菜单
 * 2. About 作为常驻独立导航项
 * 3. AI+ / Strategy / Supply Chain 作为文章分类入口
 */
export default defineConfig({
  /**
   * 网站部署路径
   * 当前部署在根域名 https://unfun.fun/
   */
  base: "/",

  /**
   * 浏览器标签页图标
   * 对应 public/logo.svg
   */
  head: [["link", { rel: "icon", href: "/logo.svg" }]],

  /**
   * 网站标题
   * 控制左上角站点名称、浏览器标题
   */
  title: "UNFUN AI+",

  /**
   * 网站描述
   * 用于 SEO 和页面元信息
   */
  description: "AI+, Strategy, Digital Transformation, IPD and Integrated Supply Chain",

  themeConfig: {
    /**
     * 左上角 Logo
     * 对应 public/logo.svg
     */
    logo: "logo.svg",

    /**
     * 顶部导航栏
     *
     * Articles：文章分类下拉菜单
     * About：常驻单独按钮，不放进下拉
     */
    nav: [
      {
        text: "Articles",
        items: [
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
      },
      {
        text: "About",
        link: "/docs/about/",
      },
    ],

    /**
     * 侧边栏配置
     * 进入不同文章目录时，显示对应的左侧目录
     */
    sidebar: {
      /**
       * About 页面侧边栏
       */
      "/docs/about/": [
        {
          text: "About",
          items: [
            {
              text: "UNFUN AI+",
              link: "/docs/about/",
            },
          ],
        },
      ],

      /**
       * AI+ 分类
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
       * Strategy 分类
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
       * Supply Chain 分类
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
     * 文章页目录设置
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
     * 底部版权
     * 年份在每次构建时自动更新
     */
    footer: {
      copyright: `© ${new Date().getFullYear()} UNFUN AI+. All rights reserved.`,
    },

    /**
     * 搜索框配置
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
    lineNumbers: true,
  },
});
