// تهيئة Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA6j7EJGxC1PIvvBZWI4iGUL6bUlsExIAE",
    authDomain: "srlor-64eed.firebaseapp.com",
    databaseURL: "https://srlor-64eed-default-rtdb.firebaseio.com",
    projectId: "srlor-64eed",
    storageBucket: "srlor-64eed.appspot.com",
    messagingSenderId: "349533508082",
    appId: "1:349533508082:web:84d4db517f0769aaf81b6b"
  };
  
  // تهيئة التطبيق وقاعدة البيانات
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const votesRef = database.ref('votes');
  
  // القيم الافتراضية
  let votes = { player1: 0, player2: 0, player3: 0 };
  
  // متابعة تغييرات قاعدة البيانات وتحديث النسب
  votesRef.on('value', (snapshot) => {
    votes = snapshot.val() || votes;
    updatePercentages();
  });
  
  // وظيفة التصويت
  function vote(playerId) {
    if (localStorage.getItem('hasVoted')) {
      alert('لقد قمت بالتصويت بالفعل!');
      return;
    }
  
    // تحديث عدد الأصوات
    votes[playerId] = (votes[playerId] || 0) + 1;
    votesRef.set(votes);
    localStorage.setItem('hasVoted', 'true');
  }
  
  // تحديث نسب الأصوات
  function updatePercentages() {
    const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);
  
    for (const playerId in votes) {
      const percentage = totalVotes > 0 ? ((votes[playerId] / totalVotes) * 100).toFixed(1) : 0;
      document.getElementById(`percentage-${playerId}`).textContent = `${percentage}%`;
      document.getElementById(`progress-${playerId}`).style.width = `${percentage}%`;
    }
  }
  
  // فلترة اللاعبين حسب الصف والشعبة
  document.getElementById('grade-filter').addEventListener('change', filterPlayers);
  document.getElementById('class-filter').addEventListener('change', filterPlayers);
  
  function filterPlayers() {
    const grade = document.getElementById('grade-filter').value;
    const playerClass = document.getElementById('class-filter').value;
  
    document.querySelectorAll('.player').forEach(player => {
      const matchesGrade = grade === 'all' || player.dataset.grade === grade;
      const matchesClass = playerClass === 'all' || player.dataset.class === playerClass;
      player.style.display = matchesGrade && matchesClass ? 'block' : 'none';
    });
  }
  