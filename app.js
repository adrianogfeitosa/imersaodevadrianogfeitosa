function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor digitado no campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // se campoPesquisa dor uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>🤖 Você precisa digitar algo... Vamos lá, você consegue!</>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // :( Sou iniciante, ainda não consegui resolver o problema do espaço e caracteres (não vazio) que, digitados, retornam todo o banco de conhecimento disponível

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Verifica se o título do dado contém a palavra-chave pesquisada
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
          <div class="item-resultado">
            <h2>${dado.titulo}</a></h2>
            <h2>${dado.status_vigor}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link_informacoes} target="_blank">🔔📚 Mais informações;</a>
            <a href=${dado.link_comissao} target="_blank">👩🧓👨👵 Composição da Comissão;</a>
            <a href=${dado.link_contato} target="_blank">📧☎📱 Entre em contato!</a>
          </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "🤖 Não encontrei nada... Mas você pode enviar sugestões de como aprimorar minha base de conhecimentos ao meu assistente humano: 🤓 adriano.g.feitosa@gmail.com"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}