function getRank() {
    let resultado = document.querySelector("#resultado")
    let vitorias = parseFloat(document.querySelector("#vitorias").value)
    let derrotas = parseFloat(document.querySelector("#derrotas").value)
    let winrate = vitorias / (vitorias + derrotas)
    let pontosRank = getPontosRank(vitorias, winrate, winrate < 0.50 ? 15 : 0)

    if (pontosRank < 25) {
        resultado.textContent = "Infelizmente, você está SEM RANK"
    } else if (pontosRank < 100) {
        resultado.textContent = "Seu rank é BRONZE"
    } else if (pontosRank < 500) {
        resultado.textContent = "Seu rank é PRATA"
    } else if (pontosRank < 1500) {
        resultado.textContent = "Seu rank é OURO"
    } else if (pontosRank < 3000) {
        resultado.textContent = "Seu rank é SAFIRA"
    } else if (pontosRank >= 3000) {
        resultado.textContent = "Seu rank é DIAMANTE"
    }
}

function getPontosRank(vitorias, winrate, acrescimoPorcentagem) {
    if (acrescimoPorcentagem > 0) {
        return Math.round((vitorias * winrate) * (1 + acrescimoPorcentagem/100))
    } else {
        return Math.round((vitorias * winrate))
    }
}