import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Icons({
      scale: 2, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: '', // Class names apply to icons
      compiler: 'vue3', // 'vue2', 'vue3', 'jsx'
      jsx: 'react', // 'react' or 'preact'
      autoInstall: true,
    }),
    Components({
      dirs: ['src/components'],
      deep: true,
      resolvers: [
        // 处理 icons
        IconsResolver(),
      ],
      extensions: ['vue'],
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/, /\.vue\?vue/,
      ],
      imports: [
        'vue',
        'vue-router',
      ],
    }),
    vue({
      reactivityTransform: true,
    }),
  ],
})
