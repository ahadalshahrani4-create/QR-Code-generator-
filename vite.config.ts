// vite.config.ts - النسخة النظيفة والنهائية

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // تحميل متغيرات البيئة (نحتفظ بها احتياطياً)
    const env = loadEnv(mode, '.', '');

    return {
        // المسار الأساسي (ضروري إذا كنت تنشر على مسار فرعي مثل GitHub Pages)
        base: '/QR-Code-generator/', 
        
        // إعدادات السيرفر غير مطلوبة في الإنتاج، لذا نحذفها.
        // plugins:
        plugins: [react()],
        
        // متغيرات البيئة (نحتفظ بها لتجنب أخطاء المتغيرات غير المعرفة)
        define: {
            'process.env.API_KEY': JSON.stringify(env.API_KEY),
            'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
        },
        // resolve: محذوف
    };
});
