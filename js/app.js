function comprar() {
    console.clear();
    // Obter tipo selecionado
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    console.log(`Tipo selecionado: ${tipoIngresso}.`);

    // Obter estoque
    let eleEstoque = document.getElementById(`qtd-${tipoIngresso}`); //obtem o elemento que contém o estoque, vou precisar dele depois pra reescrever
    let qtdEstoque = parseInt(eleEstoque.textContent); //extrai apenas o número, assim consigo fazer conta
    console.log(`Estoque disponível: ${qtdEstoque}.`);

    // Obter quantidade inserida
    let qtdIngresso = parseInt(document.getElementById("qtd").value);
    if (!validarQuantidade(qtdIngresso)) {
        //console.log(`Resultado da validação: ${validarQuantidade(qtdIngresso)}.`);
        //Se entrar é porque a quantidade inserida é inválida. Não foi inserido nenhum alerta porque a própria função de validação faz os alertas.
        return;
    }
    console.log(`Quantidade solicitada: ${qtdIngresso}.`);

    // Verificar estoque
    if (qtdEstoque < qtdIngresso) {
        alert(`A quantidade solicitada não está disponível. Restam apenas ${qtdEstoque}.`);
        return;
    }

    //Se continuar é porque não entrou no if, portanto, há disponibilidade de ingressos.
    eleEstoque.textContent = qtdEstoque - qtdIngresso;
    alert("Compra realizada com sucesso!");
}

function validarQuantidade(qtdIngresso) {
    if (typeof qtdIngresso === "string" || qtdIngresso <= 0 || isNaN(qtdIngresso)) {
        alert(`O valor inserido em quantidade é inválido. (${qtdIngresso}).`);
        return false;
    } else {
        console.log(`Validação aprovada. (${qtdIngresso})`);
        return true;
    }
}