var nomeUsuario = "Astolfo";
var senha = "2023";

function verify() {
    if (nomeUsuario == "Astolfo" && senha == "2023") {
        alert("Senha correta, entrando no sistema...");
        window.location.href = "https://www.sp.senai.br/"
    } else {
        alert("Senha incorreta,tente novamente");
        window.location.href = "index.html"
    }
}