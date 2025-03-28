class Carousel {
    constructor(images, interval = 500000000) {
        this.images = images;
        this.index = 0;//será utilizado para o botão
        this.intervalTime = interval;
        this.timer = null;

        // Elementos do carrossel
        this.imageElement = document.getElementById("carouselImage");//seleciona um elemento pelo se ID
        this.titleElement = document.getElementById("carouselTitle");
        this.titleElement2 = document.getElementById("carouselTitle2");
        this.linkElement = document.getElementById("carouselLink");
        this.paragraphElement = document.getElementById("carouselparagraph");

        // Botões
        this.prevBtn = document.getElementById("prevBtn");
        this.nextBtn = document.getElementById("nextBtn");

        // Eventos
        this.prevBtn.addEventListener("click", () => this.back());
        this.nextBtn.addEventListener("click", () => this.next());

        // Inicia o carrossel
        this.updateCarousel();
        this.startAutoSlide();
    }

    updateCarousel() {
        const currentItem = this.images[this.index];

        // Atualiza imagem, título e link
        this.imageElement.src = currentItem.image;//representar a imagem atual que o carrossel está exibindo
        this.imageElement.alt = currentItem.title;
        this.titleElement.textContent = currentItem.title;
        this.titleElement2.textContent = currentItem.title2;
        this.paragraphElement.textContent = currentItem.paragraph;
        this.linkElement.href = currentItem.url;
        document.getElementById("cont").textContent = this.index + 1;
    }

    next() {
        this.index = (this.index + 1) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
    }

    back() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.updateCarousel();
        this.resetTimer();
    }

    startAutoSlide() {
        this.timer = setInterval(() => this.next(), this.intervalTime); //inicia o carrossel automaticamente
    }

    resetTimer() {
        clearInterval(this.timer);
        this.startAutoSlide();
    }
}


// Dados do carrossel
const images = [
    {
        image: "img/imagem_1.jpg",
        title: "Nova Ford Ranger Black",
        paragraph: "Raça Forte Também No Asfalto",
        url: "https://www.ford.com.br/picapes/ranger/"
    },
    {
        image: "img/imagem_2.jpg",
        title2: "Ford a Nossa História",
        url: "https://www.ford.com.br/"
    },
    {
        image: "img/imagem_3.jpg",
        paragraph: "O ícone da aventura, agora no Brasil.",
        title: "Novo Ford Bronco Sport",
        url: "https://www.ford.com.br/suvs-e-crossovers/bronco-sport/"
    }
];

// Inicializa o carrossel quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    new Carousel(images);
});
