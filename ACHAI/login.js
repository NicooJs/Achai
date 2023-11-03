document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obter dados de login
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        // Verificar se os dados do login são válidos
        if (validarLogin(email, senha)) {
            // Dados de login válidos, redirecione para a página de home.html
            window.location.href = "home.html";
        } else {
            // Dados de login inválidos, você pode exibir uma mensagem de erro
            alert("Email ou senha incorretos. Por favor, tente novamente.");
        }
    });

    function validarLogin(email, senha) {
        // Aqui você pode adicionar sua lógica para verificar o login.
        // Você pode fazer uma solicitação ao servidor para verificar os dados do usuário
        // ou usar alguma lógica de verificação local, dependendo do seu aplicativo.

        // Neste exemplo, vamos verificar apenas se o campo de email e senha não está vazio.
        return email.trim() !== "" && senha.trim() !== "";
    }
});