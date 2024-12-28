document.addEventListener("DOMContentLoaded", () => {
  // كود العداد
  const counters = document.querySelectorAll('.count');
  if (counters.length > 0) {
    counters.forEach(counter => {
      const animate = () => {
        const target = +counter.getAttribute('data-target') || 0;
        const count = +counter.innerText || 0;
        const inc = Math.max(target / 100, 1);
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(animate, 30);
        } else {
          counter.innerText = target;
        }
      };
      animate();
    });
  }

  // كود ترتيب اللاعبين
  const playersContainer = document.querySelector('.players');
  if (playersContainer) {
    const playerCards = Array.from(document.querySelectorAll('.player-card'));
    if (playerCards.length > 0) {
      playerCards.sort((a, b) => +b.getAttribute('data-goals') - +a.getAttribute('data-goals'));
      playerCards.forEach((card, index) => {
        const playerRank = index + 1;
        const rankElement = card.querySelector('.player-rank');
        if (rankElement) {
          rankElement.setAttribute('data-rank', playerRank);
        }
        playersContainer.appendChild(card);
      });
    }
  }

  // التحقق من تفضيل المستخدم المخزن عند تحميل الصفحة
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

const snowflakeCount = 100; // عدد الثلوج
const snowflakeCharacters = ['❄', '❅', '❆']; // أشكال الثلوج
const snowContainer = document.getElementById('snow-container');

// إنشاء الثلوج
for (let i = 0; i < snowflakeCount; i++) {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = snowflakeCharacters[Math.floor(Math.random() * snowflakeCharacters.length)];

  // إعداد الموقع العشوائي وحجم الثلج
  snowflake.style.left = Math.random() * 100 + 'vw';
  snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'rem';
  snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // مدة سقوط الثلوج
  snowflake.style.animationDelay = Math.random() * 5 + 's'; // تأخير البداية

  snowContainer.appendChild(snowflake);
}