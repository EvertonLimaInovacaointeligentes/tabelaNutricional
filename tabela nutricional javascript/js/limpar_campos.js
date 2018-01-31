
function mouseOverPeso()
{


var messagem_peso=document.querySelector("#mensagem-peso");	

messagem_peso.addEventListener("click",function(){
messagem_peso.value="";

messagem_peso.textContent="";	
	
});


}

//function mouseOverAltura()
//{

	var messagem_altura=document.querySelector("#mensagem-altura");	
	messagem_altura.addEventListener("click",function(){
		alert("entrou na altura");	
		messagem_altura.value="";
		messagem_altura.textContent="";	
		
	});
	
//}
function mouseOverGordura()
{
	var messagem_gordura=document.querySelector("#mensagem-gordura");	
	messagem_gordura.addEventListener("click",function(){
	  messagem_gordura.value="";
	  messagem_gordura.textContent="";	
		
	});
	
		
}