import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        Components({
            dirs: ['src/components'],
            deep: true,
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
        vue(),
    ],
})
