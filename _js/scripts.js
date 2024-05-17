document.addEventListener("DOMContentLoaded", function() {
    var botoesPrincipais = document.querySelectorAll('.btn-principal');

    

    botoesPrincipais.forEach(function(botao) {
        botao.addEventListener('click', function() {
            var idBotao = botao.getAttribute('id');
           
            var divProblema = document.getElementById(idBotao + "Arvore"); // Adicionando "Arvore" ao ID para encontrar a div correspondente
            
            if (divProblema) {
                divProblema.style.display = 'block';

                // Esconder outras divs de problemas
                var divsProblemas = document.querySelectorAll('.tab-pane.fade');
                divsProblemas.forEach(function(div) {
                    if (div.id !== (idBotao + "Arvore")) {
                        div.style.display = 'none';
                        
                    }
                });
            }
        });
    });
});
