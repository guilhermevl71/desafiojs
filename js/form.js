
//class contato

class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function desabilitarbutton() {
    const checkbox = document.getElementById("checkboxid");
    const button = document.getElementById("buttonid");

    if (!checkbox.checked) {
        button.disabled = true;
        button.style.opacity = "0.5";
    } else {
        button.disabled = false;
        button.style.opacity = "1";
    }
}

function Post(form) {

  let data = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

        let dados = JSON.stringify(data); // let dados é igual aos dados do formulario em json
        localStorage.setItem("formulario", dados); // o set item salva os dados no localstorage do navegador, formulario é o nome da "variavel" onde está saldo, e dados oq sera salvo
        
}


function Enviar() {

    const nome = document.getElementById("nomeid").value;
    const email = document.getElementById("emailid").value;
    const cpf = document.getElementById("cpfid").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (!emailRegex.test(email)){
        alert("Escreva em email válido!");
        return;
    }

    if (cpf.length != 11){
        alert("Cpf Inválido")
        return;
    }

    if (nome != "") {
        alert('Obrigado sr(a) ' + nome + ' os seus dados foram encaminhados com sucesso');
    }
    
    let dadosform = localStorage.getItem("formulario"); // ao usa o setitem ele salva os dados no ls, e ao usa o get ele puxa esses dados.
    alert(dadosform);

    form.reset();
}

window.onload = desabilitarbutton;