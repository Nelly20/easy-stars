function myFunction() {
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function validateForm () {
    // проверяем пароли
    // выбираем элементы
    var password1 = document.getElementById('newpassword');
    var password2 = document.getElementById('newpassword2');
    // сравниваем написанное, если не равно, то:
    if (password1.value !== password2.value) {
        // сообщаем пользователю, можно сделать как угодно
        alert('Проверьте пароли!');
        // сообщаем браузеру, что не надо обрабатывать нажатие кнопки
        // как обычно, т. е. не надо отправлять форму
        return false;
    }
}
