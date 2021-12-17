// index js di sini
function getName (){
    let nama = document.getElementById("user").value;
  
    if(!nama){
        return alert('Tolong masukan nama anda')
    }
    localStorage.setItem('user', nama)
    window.location.href = './halaman3.html'
}
