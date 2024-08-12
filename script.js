let numero = 0

function aumentar() {
    numero = numero + 1
    atualizaTela()
}

function diminuir() {
    numero = numero - 1
    atualizaTela()
}

function atualizaTela() {
    const p = document.querySelector("p")
    p.innerText = numero
}

atualizaTela()