document.addEventListener('DOMContentLoaded', () => {
    const dropbtns = document.querySelectorAll('.dropbtn');
    const dropdownContents = document.querySelectorAll('.dropdown-content');

    dropbtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            dropdownContents[index].classList.toggle('show');
            dropdownContents.forEach((content, contentIndex) => {
                if (contentIndex !== index) {
                    content.classList.remove('show');
                }
            });
        });
    });
});

/* الوضع الليلي */
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// تحقق من الوضع المخزن في التخزين المحلي عند تحميل الصفحة
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.querySelector('i').classList.add('fa-sun');
} else {
    themeToggleBtn.querySelector('i').classList.add('fa-moon');
}

// تبديل الوضع عند النقر على زر التبديل وتخزين الإعداد الجديد
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeToggleBtn.querySelector('i');
    
    // تبديل أيقونة الوضع
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    // تحديث الوضع المخزن في التخزين المحلي بناءً على الوضع الحالي
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});



// تحديد العناصر
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const video = document.getElementById('popup-video');

// إغلاق الإعلان عند انتهاء الفيديو
video.addEventListener('ended', () => {
    popup.style.display = 'none';
});

// إغلاق الإعلان عند الضغط على زر الإغلاق
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

  
