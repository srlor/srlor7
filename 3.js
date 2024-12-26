// تشغيل الإعلان المنبثق
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
  
    // تأخير عرض الإعلان المنبثق بعد تحميل الصفحة بـ 1 ثانية
    setTimeout(() => {
      popup.style.display = "flex";
    }, 1000);
  
    closePopup.addEventListener("click", () => {
      popup.style.display = "none";
    });
  });
  