import { defineConfig } from "vitepress";

/**
 * VitePress 站点配置文件
 * 主要控制：
 * 1. 网站基础信息
 * 2. 顶部导航
 * 3. 侧边栏
 * 4. 搜索框
 * 5. 页脚版权
 * 6. Markdown 显示规则
 */
export default defineConfig({
  /**
   * 网站部署路径
   * 如果部署在根域名，例如 https://unfun.fun/，这里写 "/"
   */
  base: "/",

  /**
   * 页面 head 配置
   * 这里用于设置浏览器标签页左侧的小图标 favicon
   * 图标文件需要放在 public/logo.svg
   */
  head: [["link", { rel: "icon", href: "/logo.svg" }]],

  /**
   * 网站标题
   * 控制浏览器标题、左上角站点名称等
   */
  title: "UNFUN AI+",

  /**
   * 网站描述
   * 主要用于页面元信息、SEO、搜索引擎摘要
   */
  description: "AI+, Strategy, Digital Transformation, IPD and Integrated Supply Chain",

  /**
   * 主题配置
   * 控制 VitePress 页面外观、导航、侧边栏、搜索、页脚等
   */
  themeConfig: {
    /**
     * 左上角 Logo
     * 读取 public/logo.svg
     */
    logo: "logo.svg",

    /**
     * 文章页右侧/左侧目录标题
     * 只影响具体文章页面，不影响首页
     */
    outlineTitle: "文章目录",

    /**
     * 控制文章目录显示哪些级别的标题
     * [2, 6] 表示显示 h2 到 h6
     */
    outline: [2, 6],

    /**
     * 控制文章目录位置
     * "left" 表示目录显示在左侧
     * 默认一般是右侧
     */
    aside: "left",

    /**
     * 顶部导航栏
     * 控制页面右上方的导航菜单
     *
     * 注意：
     * link 对应的是网站访问路径
     * 例如 /docs/ai/ 通常对应仓库里的 docs/docs/ai/index.md
     */
    nav: [
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
     * 侧边栏配置
     * 控制进入不同文档目录后，左侧显示哪些菜单
     *
     * 例如访问 /docs/ai/ 时，会显示 AI+ 这一组菜单
     */
    sidebar: {
      /**
       * AI+ 文档侧边栏
       */
      "/docs/ai/": [
        {
          text: "AI+",
          items: [
            {
              text: "AI+ Base",
              link: "/docs/ai/",
            },
          ],
        },
      ],

      /**
       * Strategy 文档侧边栏
       */
      "/docs/strategy/": [
        {
          text: "Strategy",
          items: [
            {
              text: "Strategy Base",
              link: "/docs/strategy/",
            },
          ],
        },
      ],

      /**
       * Supply Chain 文档侧边栏
       */
      "/docs/supply-chain/": [
        {
          text: "Supply Chain",
          items: [
            {
              text: "Supply Chain Base",
              link: "/docs/supply-chain/",
            },
          ],
        },
      ],
    },

    /**
     * 是否显示文章最后更新时间
     * true 表示显示
     */
    lastUpdated: true,

    /**
     * 右上角社交链接
     * 当前配置为 GitHub 图标
     */
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/cmunfun",
      },
    ],

    /**
     * 底部版权信息
     * new Date().getFullYear() 会在构建时自动读取当前年份
     */
    footer: {
      copyright: `© ${new Date().getFullYear()} UNFUN AI+. All rights reserved.`,
    },

    /**
     * 搜索框配置
     * provider: "local" 表示使用 VitePress 本地搜索
     */
    search: {
      provider: "local",
      options: {
        translations: {
          /**
           * 搜索按钮文案
           */
          button: {
            buttonText: "Search",
            buttonAriaLabel: "Search",
          },

          /**
           * 搜索弹窗文案
           */
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
   * Markdown 配置
   * 控制 Markdown 文档的渲染规则
   */
  markdown: {
    /**
     * 代码块是否显示行号
     * true 表示显示行号
     */
    lineNumbers: true,
  },
});
