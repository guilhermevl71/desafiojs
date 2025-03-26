

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        
    }
};

/* // Classe que representa o Carrossel
class Carousel {

    // O construtor da classe para inicializar um carrossel com uma imagem, descrição e link
    constructor(imagem, descricao, link) {
        this.imagem = imagem;
        this.descricao = descricao;
        this.link = link;
    }

    // Método estático para iniciar o carrossel
    static Start(arr) {
        if (arr && arr.length > 0) {
            // Inicializa a sequência
            Carousel._sequence = 0;
            Carousel._size = arr.length;

            // Chama a função Next para iniciar o carrossel
            Carousel.Next(arr);

            // Intervalo de 5 segundos para trocar de imagem
            Carousel._interval = setInterval(() => {
                Carousel.Next(arr);
            }, 5000);
        } else {
            throw "Método Start precisa de uma variável Array.";
        }
    }

    // Método estático para exibir a próxima imagem
    static Next(arr) {
        // Limpa a exibição anterior
        document.querySelector("#carousel").innerHTML = '';
        document.querySelector("#carousel-title").innerHTML = '';

        // Pega a imagem e o título com base no índice da sequência
        const itemAtual = arr[Carousel._sequence];

        // Adiciona a imagem no carrossel
        const img = document.createElement('img');
        img.src = itemAtual.imagem;
        img.alt = itemAtual.descricao;
        document.querySelector("#carousel").appendChild(img);

        // Adiciona o título do carrossel
        const title = document.createElement('h2');
        title.textContent = itemAtual.descricao;
        document.querySelector("#carousel-title").appendChild(title);

        // Atualiza a sequência para a próxima imagem
        Carousel._sequence++;

        // Se chegou na última imagem, volta para a primeira
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
}

