function gerarTabuada() {
    const tabuadaDiv = document.getElementById("tabuada");

    for (let i = 1; i <= 10; i++) {
        const flipCard = document.createElement("div");
        flipCard.classList.add("flip-card");

        const flipCardInner = document.createElement("div");
        flipCardInner.classList.add("flip-card-inner");

        // Lado da frente
        const flipCardFront = document.createElement("div");
        flipCardFront.classList.add("flip-card-front");
        flipCardFront.innerText = `Tabuada do ${i}`;

        // Lado de trás com a tabuada
        const flipCardBack = document.createElement("div");
        flipCardBack.classList.add("flip-card-back");

        const titulo = document.createElement("h3");
      
        flipCardBack.appendChild(titulo);

        for (let j = 1; j <= 10; j++) {
            const linha = document.createElement("p");
            linha.classList.add("linha");
            linha.innerText = `${i} x ${j} = ${i * j}`;
            flipCardBack.appendChild(linha);
        }

        flipCardInner.appendChild(flipCardFront);
        flipCardInner.appendChild(flipCardBack);
        flipCard.appendChild(flipCardInner);
        tabuadaDiv.appendChild(flipCard);
    }
}
document.addEventListener("DOMContentLoaded", gerarTabuada);
