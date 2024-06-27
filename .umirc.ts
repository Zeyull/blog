import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/locale', '@umijs/plugins/dist/antd'],
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'pnpm',
  locale: {
    default: 'zh-CN',
    baseSeparator: '-',
  },
  antd: {},
});
