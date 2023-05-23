const textArea1 = document.querySelector(".textarea1");
const textArea2 = document.querySelector(".textarea2");

function botaoCriptografar() {
	const div = document.querySelector(".imagem3");
   	div.style.display = "none";
	const textoCriptografado = criptografar(textArea1.value);
	textArea2.value = textoCriptografado;
	textArea1.value = ""
}


function criptografar(stringCriptografar) {
	let codigo = [["a" , "ai"] , ["e" , "enter"] , ["i" , "imes"] , ["o" , "ober"], ["u" , "ufat"]];	
	stringCriptografar = stringCriptografar.toLowerCase();

	for(let i = 0; i < codigo.length; i++) {
		if(stringCriptografar.includes(codigo[i][0])){
			stringCriptografar = stringCriptografar.replaceAll(codigo[i][0], codigo[i][1]);
		}
	}

	return stringCriptografar;
}

function botaoDescriptografar() {
	const textoDescriptografado = descriptografar(textArea1.value);
	textArea2.value = textoDescriptografado;
	textArea1.value = ""
}


function descriptografar(stringDescriptografar) {
	let codigo = [["a" , "ai"] , ["e" , "enter"] , ["i" , "imes"] , ["o" , "ober"], ["u" , "ufat"]];	
	stringDescriptografar = stringDescriptografar.toLowerCase();

	for(let i = 0; i < codigo.length; i++) {
		if(stringDescriptografar.includes(codigo[i][1])){
			stringDescriptografar = stringDescriptografar.replaceAll(codigo[i][1], codigo[i][0]);
		}
	}

	return stringDescriptografar;
}

function copiar() {
	navigator.clipboard.writeText(textArea2.value).then(() => {
		alert("Texto copiado.")
	}) 
}
