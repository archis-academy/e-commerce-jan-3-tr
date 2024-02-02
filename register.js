const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", (e) => {
  const fullName = document.getElementById("name-register").value;
  const email = document.getElementById("email-register").value;
  const password = document.getElementById("password-register").value;

  // Mevcut kullanıcı listesini al veya yok ise oluştur.
  const userList = JSON.parse(localStorage.getItem("userList")) || [];

  if (userList.some((user) => user.email === email)) {
    alert("Bu e-posta adresiyle daha önce kayıt yapılmış.");
    return;
  } else {
    if (!isValidEmail(email)) {
      alert("Geçerli bir e-posta adresi giriniz.");
      return;
    }
    function isValidEmail(email) {
      // Basit bir e-posta doğrulama regex'i kullanabilirsiniz
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Yeni kullanıcıyı listeye ekle
    const newUser = { fullName, email, password };
    userList.push(newUser);

    // Listeyi Local'a kaydet.
    localStorage.setItem("userList", JSON.stringify(userList));
    alert("Kayıt Oluşturuldu.");
    window.location.href = "login.html";
  }

  e.preventDefault();
});
