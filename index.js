function generatePassword() {

    let length = document.getElementById("length").value;

    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789" +
        "!@#$%^&*";

    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    document.getElementById("password").value = password;
}


function copyPassword() {

    let password = document.getElementById("password");

    password.select();

    navigator.clipboard.writeText(password.value);

    alert("Password copied!");
}