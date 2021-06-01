function alertar() {
	alert('Você me clicou!');
}

function mensagem(){
	var p = document.getElementsByTagName('p');

	p[0].innerHTML = "Não esqueça de avaliar o curso. De preferência com 5 estrelas!";
}

function limpar(){
	var p = document.getElementsByTagName('p');

	p[0].innerHTML = "";
}