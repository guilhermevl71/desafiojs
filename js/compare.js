
//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function desabilitarcheckbox() {
    const checkboxes = document.querySelectorAll(".checkbox");

    if (carArr.length >= 2) {  
        checkboxes.forEach(cb => {
            if (!cb.checked) {
                cb.disabled = true;
                cb.parentElement.style.opacity = "0.5";
            }
        });
    } else {  
        checkboxes.forEach(cb => {
            cb.disabled = false;
            cb.parentElement.style.opacity = "1";
        });
    }
}

function SetCarToCompare(el, carClass) {
   
    if(carClass instanceof Car){
        let index = GetCarArrPosition(carArr, carClass);      
        if(el.checked === true && index === -1 && carArr.length < 2){
            carArr.push(carClass);
        } else {
            carArr.splice(index, 1);
        } 
        desabilitarcheckbox();
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    //atualiza image
    document.getElementById("compare_image_0").src = 
    document.getElementById("compare_image_1").innerText
    //atualiza preco
    document.getElementById("compare_preco_0").innerText = (`R$ ${carArr[0].preco}`);
    document.getElementById("compare_preco_1").innerText = (`R$ ${carArr[1].preco}`);
    //atualiza alturaCacamba
    document.getElementById("compare_alturacacamba_0").innerText = carArr[0].alturaCacamba;
    document.getElementById("compare_alturacacamba_1").innerText = carArr[1].alturaCacamba;
    //atualiza alturaVeiculo
    document.getElementById("compare_alturaveiculo_0").innerText = carArr[0].alturaVeiculo;
    document.getElementById("compare_alturaveiculo_1").innerText = carArr[1].alturaVeiculo;
    //atualiza alturaSolo
    document.getElementById("compare_alturasolo_0").innerText = carArr[0].alturaSolo;
    document.getElementById("compare_alturasolo_1").innerText = carArr[1].alturaSolo;
    //atualiza capacidadeCarga
    document.getElementById("compare_capacidadecarga_0").innerText = carArr[0].capacidadeCarga;
    document.getElementById("compare_capacidadecarga_1").innerText = carArr[1].capacidadeCarga;
    //atualiza motor
    document.getElementById("compare_motor_0").innerText = carArr[0].motor;
    document.getElementById("compare_motor_1").innerText = carArr[1].motor;
    //atualiza potencia
    document.getElementById("compare_potencia_0").innerText = carArr[0].potencia;
    document.getElementById("compare_potencia_1").innerText = carArr[1].potencia;
    //atualiza volumeCacamba
    document.getElementById("compare_volumecacamba_0").innerText = carArr[0].volumeCacamba;
    document.getElementById("compare_volumecacamba_1").innerText = carArr[1].volumeCacamba;
    //atualiza roda
    document.getElementById("compare_roda_0").innerText = carArr[0].roda;
    document.getElementById("compare_roda_1").innerText = carArr[1].roda;
    //atualiza nome
    document.getElementById("compare_modelo_0").innerText = carArr[0].nome;
    document.getElementById("compare_modelo_1").innerText = carArr[1].nome; 
1
    
}
