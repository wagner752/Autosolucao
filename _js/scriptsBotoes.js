$(document).ready(function() {
  $(".main-btn").click(function() {
      var target = $(this).data('target');
      $(".btn-container").fadeOut(400, function() {
          $(this).empty().fadeIn(); // Limpa e exibe a área de botões com fade
          // Adiciona botões de segundo nível baseado no botão principal clicado
          switch(target) {
              case "pdv-mobshop":
                  addSubButtons(["Falha ao Integrar Vendas.", "PDV não liga.", "PDV Offline.", "Mais Opções"], "pdv-mobshop");
                  break;
              case "internet":
                  addSubButtons(["Sem Internet", "Internet Lenta"], "internet");
                  break;
              case "cupom-printer":
                  addSubButtons(["Impressora Quebrada", "Impressora não liga", "Não imprime"], "cupom-printer");
                  break;
              case "a4-printer":
                  addSubButtons(["Solicitação de Tonner", "Não Imprime", "Não Liga"], "a4-printer");
                  break;
          }
      });
  });

  // Função para adicionar botões de segundo nível
  function addSubButtons(buttonNames, parentTarget) {
      var btnGroup = $("<div class='btn-group'></div>");
      buttonNames.forEach(function(name) {
          var btn = $("<button type='button' class='btn btn-secondary sub-btn' data-target='" + parentTarget + "-" + name.toLowerCase().replace(/\s+/g, '-') + "'></button>").text(name);
          btnGroup.append(btn);
      });
      $(".btn-container").append(btnGroup);
  }

  // Evento de clique para os botões de segundo nível
  $(document).on('click', '.sub-btn', function() {
      var target = $(this).data('target');

      // Limpa os botões de segundo nível anteriores com fade
      $(".btn-container").fadeOut(400, function() {
          $(this).empty().fadeIn(); // Limpa e exibe a área de botões com fade

          // Converter o target para letras minúsculas para garantir correspondência
          target = target.toLowerCase();

          // Adiciona botões de terceiro nível baseado no botão de segundo nível clicado
          switch(target) {
              case "pdv-mobshop-falha-ao-integrar-vendas.":
                  addSubButtons(["Subopção A", "Subopção B", "Subopção C", "Subopção D"], "pdv-mobshop-opção-1");
                  target = "pdv-mobshop-opção-1";
                  
                  break;
              case "pdv-mobshop-pdv-não-liga.":
                  addSubButtons(["Teste 1", "Teste 2", "Teste 3", "Teste 4"], "pdv-mobshop-opção-2");
                  break;
              case "pdv-mobshop-mais-opções":
                  addSubButtons(["Mobshop sem pareamento.", "Mobshop sem conexão."], "pdv-mobshop-mais-opcoes");
                  break;
              // Adicione mais casos conforme necessário para os outros botões de segundo nível
              case "internet-internet-lenta":
                  addSubButtons(["Mobshop sem pareamento.", "Mobshop sem conexão."], "pdv-mobshop-mais-opcoes");
                  break;
          }

          // Redirecionar para a nova página HTML quando "PDV Não Liga" for clicado
          if (target === "pdv-mobshop-pdv-não-liga.") {
              window.location.href = "solucao01-02.html";
          }

          if (target === "pdv-mobshop-opção-1") {
            console.log("Batata");
          }

      });
  });
});