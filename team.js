document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.querySelector(".team-container");
    const teams = Array.from(teamContainer.children);

    teams.sort((a, b) => {
        const pointsA = parseInt(a.getAttribute("data-points"));
        const pointsB = parseInt(b.getAttribute("data-points"));
        const winsA = parseInt(a.getAttribute("data-wins"));
        const winsB = parseInt(b.getAttribute("data-wins"));
        const goalsA = parseInt(a.getAttribute("data-goals"));
        const goalsB = parseInt(b.getAttribute("data-goals"));

        // ترتيب الفرق حسب النقاط، ثم الفوز، ثم الأهداف
        if (pointsA !== pointsB) return pointsB - pointsA;
        if (winsA !== winsB) return winsB - winsA;
        return goalsB - goalsA;
    });

    // إعادة ترتيب البطاقات في DOM وتحديث الترتيب الرقمي
    teams.forEach((team, index) => {
        team.querySelector(".rank").textContent = index + 1; // تحديث الترتيب
        teamContainer.appendChild(team);
    });
});


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

