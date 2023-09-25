function adicionarContato() {
    
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome !== "" && telefone !== "") {
        var tabela = document.querySelector("table");
        var novaLinha = tabela.insertRow(-1);
        var colunaNome = novaLinha.insertCell(0);
        var colunaTelefone = novaLinha.insertCell(1);
        colunaNome.innerHTML = nome;
        colunaTelefone.innerHTML = telefone;
        document.getElementById("formularioContato").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// ABAIXO MASCARA DE TELEFONE RETIRADA DO SITE CODEPEN:

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('telefone').onkeyup = function(){
		mascara( this, mtel );
	}
}