import path from "node:path";
import fs from "node:fs";

/**
 * 自动生成 VitePress 侧边栏
 *
 * 规则：
 * 1. 扫描指定目录下的 .md 文件
 * 2. index.md 不再过滤，而是显示为 Overview
 * 3. 其他 .md 文件自动加入侧边栏
 * 4. 文件名会自动去掉 .md 后缀
 * 5. 文件名中的 - 会转换为空格，提升可读性
 * 6. 子文件夹会生成可折叠菜单
 */

// 项目根目录
const ROOT_PATH = path.resolve();

/**
 * 排除列表
 * 这些文件或文件夹不会进入侧边栏
 */
const EXCLUDE_LIST = [
  ".vitepress",
  "node_modules",
  ".idea",
  "assets",
  "public",
  "utils",
  ".github",
];

/**
 * 判断是否是文件夹
 */
const isDirectory = (filePath) => fs.lstatSync(filePath).isDirectory();

/**
 * 判断是否是 Markdown 文件
 */
const isMarkdown = (fileName) => path.extname(fileName) === ".md";

/**
 * 格式化侧边栏显示名称
 */
const formatText = (fileName) => {
  const name = fileName.replace(/\.md$/, "");

  // 分类首页统一显示为 Overview
  if (name === "index") {
    return "Overview";
  }

  // 文件名转可读标题
  return name
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

/**
 * 格式化链接
 */
const formatLink = (pathname, fileName) => {
  const name = fileName.replace(/\.md$/, "");

  // index.md 对应目录根路径
  if (name === "index") {
    return `/${pathname}/`;
  }

  return `/${pathname}/${name}`;
};

/**
 * 获取目录下可用于侧边栏的文件和文件夹
 */
const getValidFiles = (dirPath) => {
  return fs
    .readdirSync(dirPath)
    .filter((fileName) => !EXCLUDE_LIST.includes(fileName))
    .filter((fileName) => {
      const fullPath = path.join(dirPath, fileName);
      return isDirectory(fullPath) || isMarkdown(fileName);
    })
    .sort((a, b) => {
      // index.md 永远排在第一
      if (a === "index.md") return -1;
      if (b === "index.md") return 1;
      return a.localeCompare(b);
    });
};

/**
 * 递归生成侧边栏
 */
function getList(files, dirPath, pathname) {
  const res = [];

  for (const fileName of files) {
    const fullPath = path.join(dirPath, fileName);

    if (isDirectory(fullPath)) {
      const childFiles = getValidFiles(fullPath);

      res.push({
        text: formatText(fileName),
        collapsed: false,
        items: getList(childFiles, fullPath, `${pathname}/${fileName}`),
      });

      continue;
    }

    if (!isMarkdown(fileName)) {
      continue;
    }

    res.push({
      text: formatText(fileName),
      link: formatLink(pathname, fileName),
    });
  }

  return res;
}

/**
 * 对外导出：在 config.mjs 中使用
 *
 * 示例：
 * sidebar: {
 *   "/docs/ai/": set_sidebar("docs/ai"),
 * }
 */
export const set_sidebar = (pathname) => {
  const dirPath = path.join(ROOT_PATH, pathname);

  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const files = getValidFiles(dirPath);

  return getList(files, dirPath, pathname);
};
