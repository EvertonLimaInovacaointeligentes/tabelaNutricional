//botao mostrar fomulario quando forclicado
var botaoMostrar=document.querySelector("#btAdicionar");
botaoMostrar.addEventListener("click",function(){
 var x = document.getElementById("geral");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

//limpar campos

var peso=document.querySelector("#peso");
var altura=document.querySelector("#altura");
var gordura=document.querySelector("#gordura");


peso.addEventListener("click",function(){
//	alert("entrou no peso");
var messagem_peso=document.querySelector("#mensagem-peso").value="";	
});

altura.addEventListener("click",function(){
var messagem_altura=document.querySelector("#mensagem-altura").value="";	
});
gordura.addEventListener("click",function(){
var messagem_gordura=document.querySelector("#mensagem-gordura").value="";	
});

//fim do limpar campos
//assim que abrir a pagina fomulario fica oculto
var formulario=document.querySelector("#geral");
	formulario.style.display = "none";
	
//esse botao  vai inserir na tabela os dados
var botaoSalvar=document.querySelector("#adicionar-paciente");

botaoSalvar.addEventListener("click",function(){
	
	//pegando formulario
	var form=document.querySelector("#form-adiciona");
	//pegando os valores dos inputs do formulario
	
	
	 var nome=document.querySelector("#nome").value;
	 var peso=document.querySelector("#peso").value;
	 var altura=document.querySelector("#altura").value;
	 var gordura=document.querySelector("#gordura").value;
	 var imc="";
	 var opcaoPeso=validar(peso);
	 var opcaoAltura=validar(altura);
	 var opcaoGordura=validar(gordura);
	 //validando peso
	 alert("Altura: "+altura+" gordura: "+gordura);
	 if((!opcaoPeso)||(!opcaoAltura)||(!opcaoGordura))
	 {
		 alert("entrou no if opcao");
		 if(!opcaoPeso)
		 {
			 
			 var mensagem=document.querySelector("#mensagem-peso");
			 
			 mensagem.style.color="red";
			 mensagem.style.fontWeight="bold";		 			 
			 mensagem.textContent="Peso invalido";
			 
		 }
		 if(!opcaoAltura)
		 {
			 var mensagem=document.querySelector("#mensagem-altura");
			 
			 mensagem.style.color="red";
			 mensagem.style.fontWeight="bold";		 			 
			 mensagem.textContent="altura invalido";
		 }
		 if(!opcaoGordura)
		 {
			 var mensagem=document.querySelector("#mensagem-gordura");
			 
			 mensagem.style.color="red";
			 mensagem.style.fontWeight="bold";		 			 
			 mensagem.textContent="gordura invalido";
		 }
	 }
	 else
	 {
	//calculando imc para adicionar na td
	var calculo = peso / (altura * altura);
    
	//criando tr
	var pacienteTR=document.createElement("tr");
	
	//criando as tds dentro do tr
	var nometd=document.createElement("td");
	var pesotd=document.createElement("td");
	var alturatd=document.createElement("td");
	var gorduratd=document.createElement("td");
	var imctd=document.createElement("td");
	//colocando valores dentro dos tds
	nometd.textContent=nome;
	pesotd.textContent=peso;
	alturatd.textContent=altura;
	gorduratd.textContent=gordura;
	imctd.textContent=calculo.toFixed(2);
	//adicionar os tds como filhos no dentro dos pacinetes tr
	pacienteTR.appendChild(nometd);
	pacienteTR.appendChild(pesotd);
	pacienteTR.appendChild(alturatd);
	pacienteTR.appendChild(gorduratd);
	pacienteTR.appendChild(imctd);
	//criando a tabela e referenciando
	var tabela=document.querySelector("#tabela-pacientes");
	//adicionando as trs dentro da tabela que é exibida na tela
	tabela.appendChild(pacienteTR);
	console.log(pacienteTR);
	alert("Paciente Salvo com sucesso!!!");
	var resultado=ocultarFormulario();
   }
	
});

function ocultarFormulario(){
	//ocultando formlario
	formulario.style.display = "none";
	 var nome=document.querySelector("#nome").value="";
	 var peso=document.querySelector("#peso").value="";
	 var altura=document.querySelector("#altura").value="";
	 var gordura=document.querySelector("#gordura").value="";	 
}
function validar(variavel){
	//mensagem-peso
	if((variavel<0)||(variavel==""))
	{
		return false;
	}
	else
	{
		return true;
	}
}
function ocultarMensagem()
{
	
}