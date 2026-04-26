import { defineConfig } from "vitepress";
import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";

/**
 * VitePress 站点配置
 *
 * 设计原则：
 * 1. 顶部导航只放一级入口
 * 2. Articles 使用下拉菜单展示分类
 * 3. About 常驻右上角，不放入下拉
 * 4. 各分类下的文章侧边栏由 utils/auto-gen-sidebar.mjs 自动生成
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
     */
    logo: "logo.svg",

    /**
     * 顶部导航栏
     *
     * Articles：文章分类下拉菜单，只维护一级分类
     * About：常驻独立导航项
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
     * 自动侧边栏
     *
     * 规则：
     * - docs/ai 下面新增 md，会自动进入 AI+ 侧边栏
     * - docs/strategy 下面新增 md，会自动进入 Strategy 侧边栏
     * - docs/supply-chain 下面新增 md，会自动进入 Supply Chain 侧边栏
     * - docs/about 下面新增 md，会自动进入 About 侧边栏
     *
     * 注意：
     * - 自动生成规则取决于 utils/auto-gen-sidebar.mjs 的具体实现
     * - 如果新增文章没有出现，需要检查该脚本的排序和过滤规则
     */
    sidebar: {
      "/docs/about/": set_sidebar("docs/about"),
      "/docs/ai/": set_sidebar("docs/ai"),
      "/docs/strategy/": set_sidebar("docs/strategy"),
      "/docs/supply-chain/": set_sidebar("docs/supply-chain"),
    },

    /**
     * 文章目录设置
     */
    outlineTitle: "Contents",
    outline: [2, 6],
    aside: "right",

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
    lineNumbers: true,
  },
});
