// Função para verificar o cadastro e redirecionar para a página de login
function cadastrar() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if (nome.trim() !== "" && email.trim() !== "" && senha.trim() !== "") {
        // Todos os campos estão preenchidos, então o cadastro é bem-sucedido
        alert("Cadastro bem-sucedido! Redirecionando para a página de login.");
        
        // Redirecione para a página de login (substitua 'pagina-de-login.html' pelo caminho correto)
        window.location.href = "login.html";
    } else {
        // Caso algum campo não esteja preenchido, exiba uma mensagem de erro ou trate o erro de outra forma
        alert("Por favor, preencha todos os campos antes de cadastrar.");
    }
}

// Adicione um ouvinte de evento ao formulário para chamar a função cadastrar
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    cadastrar(); // Chame a função de cadastro personalizada
});