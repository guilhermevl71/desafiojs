
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

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    
    let dadosform = localStorage.getItem("formulario"); // ao usa o setitem ele salva os dados no ls, e ao usa o get ele puxa esses dados.
    alert(dadosform);
}