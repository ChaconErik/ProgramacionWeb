let leermas = document.getElementById('lm');
let leermenos = document.getElementById('lme');
let containeruno = document.getElementById('contuno'); 
let containerdos = document.getElementById('contdos');
let principal = document.getElementById('inicial');
let refe = document.getElementById('referencias');
let containercuatro  = document.getElementById('contcuatro');

function inicio(){
	containeruno.style.display = 'block';
	containerdos.style.display = 'block';
	containercuatro.style.display = 'none';
	leermas.style.display = 'none';
	leermenos.style.display = 'block';
}
leermas.addEventListener('click',inicio);

function menos(){
	containeruno.style.display = 'block';
	containerdos.style.display =  'none';
	containercuatro.style.display = 'none';
	leermas.style.display = 'block';
	leermenos.style.display = 'none';
}
leermenos.addEventListener('click',menos);
principal.addEventListener('click',menos);

function referenciasinvestigacion(){
	containeruno.style.display = 'none';
	containerdos.style.display =  'none';
	leermas.style.display = 'none';
	leermenos.style.display = 'none';
	containercuatro.style.display = 'block';
}
refe.addEventListener('click',referenciasinvestigacion);


