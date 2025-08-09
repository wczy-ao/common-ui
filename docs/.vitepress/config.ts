const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "导航",
      link: "/components/nav/",
    },
    {
      text: "反馈",
      link: "/components/message/",
    },
    {
      text: "数据录入",
      link: "/components/form/",
    },
    {
      text: "数据展示",
      link: "/components/table/",
    },
    {
      text: "布局",
      link: "/components/layout/",
    },
  ],
};
module.exports = {
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
};
