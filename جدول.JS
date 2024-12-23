// التحقق من تفضيل المستخدم المخزن عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
        document.body.classList.add("dark-mode");
    }
});

// دالة لتبديل الوضع الليلي وتخزين التفضيل في التخزين المحلي
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    // تحديث التفضيل في التخزين المحلي بناءً على الوضع الحالي
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}


