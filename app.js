  
var username = document.getElementById("name");
var password = document.getElementById("password");
var message = document.getElementById("message");

function login() {
  var ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      message.innerHTML = this.responseText;
    }
  };

  ajax.open("GET", "message.txt", true);
  ajax.send();

  var crpyt = {
    secret: "THESECRET",
    encrypt: function (password) {
      var encrypted = CryptoJS.AES.encrypt(password, crypt.secret);
      encrypted = encrypted.toString();
      return encrypted;
    },
    decrpyt: function (encrypted) {
      var decrypted = CryptoJS.AES.decrpyt(encrypted, crypt.secret);
      decrypted = decrypted.toString(CryptoJS.enc.Utf8);
      return decrypted;
    },
  };

  var encrypted = crypt.encrypt(password.value);
  console.log(encrypted);
  var decrypted = crypt.decrpyt(encrypted);
  console.log(decrypted);
}