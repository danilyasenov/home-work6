function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let isValid = true;

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Поле Имя не может быть пустым.";
        isValid = false;
    }

    
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Введите корректный email.";
        isValid = false;
    }

    // Password validation
    if (password.length < 8) {
        document.getElementById("passwordError").innerText = "Пароль должен содержать минимум 8 символов.";
        isValid = false;
    }

    if (isValid) {
        alert("Форма успешно отправлена!");
    }
}
