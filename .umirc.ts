import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/locale', '@umijs/plugins/dist/antd'],
  routes: [
    { path: '/home', component: '@/pages/home/index.tsx' },
    {
      path: '/blog-detail',
      component: '@/pages/blog/blog-detail/index.tsx',
    },
    { path: '/', redirect: '/home' },
  ],
  npmClient: 'pnpm',
  locale: {
    default: 'zh-CN',
    baseSeparator: '-',
  },
  antd: {},
});
