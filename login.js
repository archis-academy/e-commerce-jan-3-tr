const form = document.getElementById("login-form");

form.addEventListener("submit", (e)=>{
    let isLogin = false;
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
   
    //Mevcut kullanıcı listesini al eğer yoksa oluştur.
    const userList = JSON.parse(localStorage.getItem('userList')) || [];
    
    //E-posta ve şifreleri kontrol et!
    const foundEmail = userList.find(user => user.email == email);
    const foundPassword = userList.find(user => user.password == password);
    
    if(foundEmail.email == email && foundPassword.password == password){
        isLogin = true;
        localStorage.setItem("isLogin",isLogin);
        alert('Giriş Başarılı!');
        window.location.href = "index.html";
    }
    e.preventDefault();
});
