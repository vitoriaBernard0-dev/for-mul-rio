var nomeUsuario = "Astolfo";
var senha = "2023";
// função
function verify() {
    var tentativa1 = document.getElementById("usuario").value;
    var tentativa2 = document.getElementById("password").value;

    if (nomeUsuario == tentativa1 && senha == tentativa2) {
        alert("Senha correta, entrando no sistema...");
        window.location.href = "https://www.sp.senai.br/"
    } else {
        alert("Senha incorreta,tente novamente");
        window.location.href = "index.html"
    }
}