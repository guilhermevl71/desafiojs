class Carousel {
    constructor(images, interval = 2000) {
        this.images = images;
        this.index = 0; //utilizado para o botão
        this.intervalTime = interval;
        this.timer = null;

        // Elementos
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

        // Inicia
        this.updateCarousel();
        this.startAutoSlide();
    }

    updateCarousel() {
        const currentItem = this.images[this.index];

        // Atualiza imagem, título e link
        this.imageElement.src = currentItem.image;
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
        this.resetTimer(this.timer, () => this.startAutoSlide());
    }

    back() {
        this.index = (this.index - 1 + this.images.length) % this.images.length;
        this.updateCarousel();
        this.resetTimer(this.timer, () => this.startAutoSlide());
    }

    startAutoSlide() {
        this.timer = setInterval(() => this.next(), this.intervalTime); //inicia o carrossel automaticamente
    }

    static resetTimer(timerInstance, startFunction) {
        clearInterval(timerInstance);
        startFunction();
    }
}


// Dados do carrossel
const images = [
    {
        image: "img/imagem_1.jpg",
        title: "Nova Ford Ranger Black",
        paragraph: "Raça Forte Também No Asfalto",
        url: "lancamento.html"
    },
    {
        image: "img/imagem_2.jpg",
        title2: "Ford a Nossa História",
        url: "lancamento.html"
    },
    {
        image: "img/imagem_3.jpg",
        paragraph: "O ícone da aventura, agora no Brasil.",
        title: "Novo Ford Bronco Sport",
        url: "lancamento.html"
    }
];

// Inicializa o carrossel quando a página carregar
document.addEventListener("DOMContentLoaded", () => {
    new Carousel(images);
});
