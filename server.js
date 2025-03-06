const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// خدمة الملفات الثابتة (HTML, CSS, JS) من مجلد "public"
app.use(express.static(path.join(__dirname, 'public')));

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
