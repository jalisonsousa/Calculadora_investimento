function calcularInvestimento() {
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const precoMedioAtual = parseFloat(document.getElementById('precoMedioAtual').value);
    const valorAcaoAtual = parseFloat(document.getElementById('valorAcaoAtual').value);

    if (isNaN(quantidade) || isNaN(precoMedioAtual) || isNaN(valorAcaoAtual)) {
        alert('Por favor, preencha todos os campos com valores válidos.');
        return;
    }

    // Cálculo da quantidade necessária
    let quantidadeNecessaria = (quantidade * (precoMedioAtual - valorAcaoAtual)) / valorAcaoAtual;

    // Arredondar para cima
    quantidadeNecessaria = Math.ceil(quantidadeNecessaria);

    // Exibir o resultado
    document.getElementById('resultado').innerText = `Você precisa comprar aproximadamente ${quantidadeNecessaria} cotas para que seu preço médio atinja o valor da ação atual.`;
}
