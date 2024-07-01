import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { babel } from '@rollup/plugin-babel';

export default defineConfig(async ({ mode }) => {
  const { PORT = 3000 } = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), babel({ babelHelpers: 'runtime', exclude: 'node_modules/**' })],
    resolve: {
      alias: {},
    },
    optimizeDeps: {
      exclude: ['@babel/runtime/helpers/createSuper']
    },
    server: {
      port: Number(PORT) || 3000,
      strictPort: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ['node_modules', 'src/assets'],
        },
      },
    },
    build: {
      minify: true,
    },
  };
});
