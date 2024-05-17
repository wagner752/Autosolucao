// Chamado do arquivo mailSender.php para envio do e-mail para o suporte
// Este script serve apenas para a abertura do arquivo mailSender.php após o usuário
// clicar nos botões referentes à solução final (Falar com o suporte ou PDV Operacional)

// Verifica se o documento está pronto
document.addEventListener('DOMContentLoaded', function() {
    // Obtém o elemento do botão
    var btnSuporte = document.getElementById('btnSuporte');
    
    // Verifica se o botão foi encontrado
    if (btnSuporte) {
        // Adiciona um ouvinte de evento de clique ao botão
        btnSuporte.addEventListener('click', function() { 
            // Obtém o caminho atual da página
            var paginaAtual = window.location.pathname;
            
            // Verifica o caminho atual da página
            if (paginaAtual === '/solucao01-02.html') {
                // Realiza a requisição fetch para o mailSender.php
                fetch('../mailSender.php?pagina=solucao01-02')
                    .then(response => {
                        // Verifica se a resposta é bem-sucedida
                        if (!response.ok) {
                            // Mostra um alerta em caso de falha
                            alert("Erro ao acessar mailSender.php");
                            throw new Error('Não foi possível acessar mailSender.php');
                        }
                    })
                    .catch(error => {
                        // Mostra um alerta em caso de erro na requisição
                        console.error('Erro:', error);
                        alert("Erro ao enviar e-mail: " + error.message);
                    });
            } else {
                // Mostra um alerta se o caminho atual não corresponder ao esperado
                alert("Caminho da página incorreto");
            }
        });
    } else {
        // Mostra um alerta se o botão não for encontrado
        alert("Botão não encontrado");
    }
});
