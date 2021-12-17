function iniName() {
    const name = localStorage.getItem('user')
    const el = document.getElementById('name')
    el.innerHTML = `${name}`
  }
  iniName()
 
function nextGame() {
    window.location.href = 'halaman3.html'
}

function goHome() {
    window.location.href = 'index.html'
}

function getScore() {
    const endingScore = localStorage.getItem('score')
    const el = document.getElementById('totalScore')
    el.innerHTML = `${endingScore}`
    if (endingScore < 50) {
      let title = document.getElementsByClassName('selamat')
      title.innerHTML = `Kamu mainnya kurang jauh`
    }
}
getScore()