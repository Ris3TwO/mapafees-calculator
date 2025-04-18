import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import compression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: '/mfc/',
    plugins: [
      vue(),
      compression({
        algorithm: 'brotliCompress',
        ext: '.br',
        deleteOriginFile: false,
      }),
    ],
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: `@import "@/styles/variables.scss";`,
    //     },
    //   },
    // },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      __DEV__: mode === 'development',
      __PROD__: isProd,
    },
    build: {
      sourcemap: !isProd,
      cssCodeSplit: true,
      minify: isProd ? 'terser' : false,
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },
  };
});
