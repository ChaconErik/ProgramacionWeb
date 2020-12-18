
let numbtn = ['1','2','3','4','5'];
let numdiv = ['t1','t2','t3','t4','t5']
var declarabtn = [];
var declaradiv = [];
var presenta = document.getElementById('principal');

for (var i = 0; i <= 4; i++) {
	declarabtn[i] = document.getElementById(numbtn[i]);
	declaradiv[i] = document.getElementById(numdiv[i]);
}
declarabtn[0].addEventListener('click',function(){
	presenta.style.display = 'none';
	declaradiv[0].style.display = 'block';
});
declarabtn[1].addEventListener('click',function(){
	presenta.style.display = 'none';
	declaradiv[1].style.display = 'block';
});
declarabtn[2].addEventListener('click',function(){
	presenta.style.display = 'none';
	declaradiv[2].style.display = 'block';
});
declarabtn[3].addEventListener('click',function(){
	presenta.style.display = 'none';
	declaradiv[3].style.display = 'block';
});
declarabtn[4].addEventListener('click',function(){
	presenta.style.display = 'none';
	declaradiv[4].style.display = 'block';
});

//------------------------------------------- Eventos por estado ------------------------------------------------------------
let lista = ['a1','a2','a3','a4','a5'];
let div = ['e1','e2','e3','e4','e5'];
var clista = [];
var cdiv = [];
for (var j = 0; j <= 4; j++) {
	clista[j] = document.getElementById(lista[j]);
	cdiv[j] = document.getElementById(div[j]);
}
clista[0].addEventListener('click',function(){
	comprado.style.display = 'none';
	apartado.style.display = 'none';
	cancelado.style.display = 'none';
	presenta.style.display = 'none';
	formulario.style.display = 'none';	
	preguntasid.style.display = 'none';
	somosid.style.display = 'none';
	limpiar();	
	divqt[0].style.display = 'none';
	divqt[1].style.display = 'none';
	divqt[2].style.display = 'none';
	divqt[3].style.display = 'none';
	divqt[4].style.display = 'none';
	divqr[0].style.display = 'none';
	divqr[1].style.display = 'none';
	divqr[2].style.display = 'none';
	divqr[3].style.display = 'none';
	divqr[4].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
	cdiv[0].style.display = 'block';
	declaradiv[0].style.display = 'none';
	declaradiv[1].style.display = 'none';
	declaradiv[2].style.display = 'none';
	declaradiv[3].style.display = 'none';
	declaradiv[4].style.display = 'none';
	chihdiv[0].style.display = 'none';
	chihdiv[1].style.display = 'none';
	chihdiv[2].style.display = 'none';
	chihdiv[3].style.display = 'none';
	chihdiv[4].style.display = 'none';
	chihdiv[5].style.display = 'none';
	chihdiv[6].style.display = 'none';
	dj.style.display = 'none';
	divcdmx[0].style.display = 'none';
	divcdmx[1].style.display = 'none';
	divcdmx[2].style.display = 'none';
	divcdmx[3].style.display = 'none';
	divcdmx[4].style.display = 'none';
	divcdmx[5].style.display = 'none';
});
clista[1].addEventListener('click',function(){
	comprado.style.display = 'none';
	apartado.style.display = 'none';
	cancelado.style.display = 'none';
	presenta.style.display = 'none';
	formulario.style.display = 'none';	
	preguntasid.style.display = 'none';
	somosid.style.display = 'none';		
	limpiar();	
	divqr[0].style.display = 'none';
	divqr[1].style.display = 'none';
	divqr[2].style.display = 'none';
	divqr[3].style.display = 'none';
	divqr[4].style.display = 'none';
	divqt[0].style.display ='none';
	divqt[1].style.display ='none';
	divqt[2].style.display ='none';
	divqt[3].style.display ='none';
	divqt[4].style.display ='none';
	cdiv[0].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
	cdiv[1].style.display = 'block';
	declaradiv[0].style.display = 'none';
	declaradiv[1].style.display = 'none';
	declaradiv[2].style.display = 'none';
	declaradiv[3].style.display = 'none';
	declaradiv[4].style.display = 'none';
	chihdiv[0].style.display = 'none';
	chihdiv[1].style.display = 'none';
	chihdiv[2].style.display = 'none';
	chihdiv[3].style.display = 'none';
	chihdiv[4].style.display = 'none';
	chihdiv[5].style.display = 'none';
	chihdiv[6].style.display = 'none';
	dj.style.display = 'none';
	divcdmx[0].style.display = 'none';
	divcdmx[1].style.display = 'none';
	divcdmx[2].style.display = 'none';
	divcdmx[3].style.display = 'none';
	divcdmx[4].style.display = 'none';
	divcdmx[5].style.display = 'none';
});
clista[2].addEventListener('click',function(){
	comprado.style.display = 'none';
	apartado.style.display = 'none';
	cancelado.style.display = 'none';
	presenta.style.display = 'none';
	formulario.style.display = 'none';	
	preguntasid.style.display = 'none';
	somosid.style.display = 'none';
	limpiar();	
	divqr[0].style.display = 'none';
	divqr[1].style.display = 'none';
	divqr[2].style.display = 'none';
	divqr[3].style.display = 'none';
	divqr[4].style.display = 'none';
	divqt[0].style.display ='none';
	divqt[1].style.display ='none';
	divqt[2].style.display ='none';
	divqt[3].style.display ='none';
	divqt[4].style.display ='none';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
	cdiv[2].style.display = 'block';
	declaradiv[0].style.display = 'none';
	declaradiv[1].style.display = 'none';
	declaradiv[2].style.display = 'none';
	declaradiv[3].style.display = 'none';
	declaradiv[4].style.display = 'none';
	chihdiv[0].style.display = 'none';
	chihdiv[1].style.display = 'none';
	chihdiv[2].style.display = 'none';
	chihdiv[3].style.display = 'none';
	chihdiv[4].style.display = 'none';
	chihdiv[5].style.display = 'none';
	chihdiv[6].style.display = 'none';
	dj.style.display = 'none';
	divcdmx[0].style.display = 'none';
	divcdmx[1].style.display = 'none';
	divcdmx[2].style.display = 'none';
	divcdmx[3].style.display = 'none';
	divcdmx[4].style.display = 'none';
	divcdmx[5].style.display = 'none';
});
clista[3].addEventListener('click',function(){
	comprado.style.display = 'none';
	apartado.style.display = 'none';
	cancelado.style.display = 'none';
	presenta.style.display = 'none';
	formulario.style.display = 'none';
	preguntasid.style.display = 'none';
	somosid.style.display = 'none';
	limpiar();
	divqr[0].style.display = 'none';
	divqr[1].style.display = 'none';
	divqr[2].style.display = 'none';
	divqr[3].style.display = 'none';
	divqr[4].style.display = 'none';
	divqt[0].style.display ='none';
	divqt[1].style.display ='none';
	divqt[2].style.display ='none';
	divqt[3].style.display ='none';
	divqt[4].style.display ='none';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[4].style.display = 'none';
	cdiv[3].style.display = 'block';
	declaradiv[0].style.display = 'none';
	declaradiv[1].style.display = 'none';
	declaradiv[2].style.display = 'none';
	declaradiv[3].style.display = 'none';
	declaradiv[4].style.display = 'none';
	chihdiv[0].style.display = 'none';
	chihdiv[1].style.display = 'none';
	chihdiv[2].style.display = 'none';
	chihdiv[3].style.display = 'none';
	chihdiv[4].style.display = 'none';
	chihdiv[5].style.display = 'none';
	chihdiv[6].style.display = 'none';
	dj.style.display = 'none';
	divcdmx[0].style.display = 'none';
	divcdmx[1].style.display = 'none';
	divcdmx[2].style.display = 'none';
	divcdmx[3].style.display = 'none';
	divcdmx[4].style.display = 'none';
	divcdmx[5].style.display = 'none';
});
clista[4].addEventListener('click',function(){
	comprado.style.display = 'none';
	apartado.style.display = 'none';
	cancelado.style.display = 'none';
	presenta.style.display = 'none';
	formulario.style.display = 'none';
	preguntasid.style.display = 'none';
	limpiar();
	somosid.style.display = 'none';
	divqr[0].style.display = 'none';
	divqr[1].style.display = 'none';
	divqr[2].style.display = 'none';
	divqr[3].style.display = 'none';
	divqr[4].style.display = 'none';
	divqt[0].style.display ='none';
	divqt[1].style.display ='none';
	divqt[2].style.display ='none';
	divqt[3].style.display ='none';
	divqt[4].style.display ='none';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'block';
	declaradiv[0].style.display = 'none';
	declaradiv[1].style.display = 'none';
	declaradiv[2].style.display = 'none';
	declaradiv[3].style.display = 'none';
	declaradiv[4].style.display = 'none';
	chihdiv[0].style.display = 'none';
	chihdiv[1].style.display = 'none';
	chihdiv[2].style.display = 'none';
	chihdiv[3].style.display = 'none';
	chihdiv[4].style.display = 'none';
	chihdiv[5].style.display = 'none';
	chihdiv[6].style.display = 'none';
	dj.style.display = 'none';
	divcdmx[0].style.display = 'none';
	divcdmx[1].style.display = 'none';
	divcdmx[2].style.display = 'none';
	divcdmx[3].style.display = 'none';
	divcdmx[4].style.display = 'none';
	divcdmx[5].style.display = 'none';
});
//------------------------------------------------------------Chihuahua--------------------------------------------------

let btnchih = ['ch1','ch2','ch3','ch4','ch5','ch6','ch7'];
let divchih = ['dch1','dch2','dch3','dch4','dch5','dch6','dch7'];
var btnlista = [];
var chihdiv = [];

for (var c = 0; c <= 6; c++) {
	btnlista[c] = document.getElementById(btnchih[c]);
	chihdiv[c] = document.getElementById(divchih[c]);
}
btnlista[0].addEventListener('click',function(){
	chihdiv[0].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlista[1].addEventListener('click',function(){
	chihdiv[1].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlista[2].addEventListener('click',function(){
	chihdiv[2].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlista[3].addEventListener('click',function(){
	chihdiv[3].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlista[4].addEventListener('click',function(){
	chihdiv[4].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlista[5].addEventListener('click',function(){
	chihdiv[5].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlista[6].addEventListener('click',function(){
	chihdiv[6].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
//-----------------------------------------------Jalisco--------------------------------------------------------------

let btnjal = document.getElementById('j1');
let divjal = document.getElementById('dj');

btnjal.addEventListener('click', function(){
	dj.style.display = 'block';
	cdiv[1].style.display = 'none';
});
//------------------------------------------------Cdmx----------------------------------------------------------------
let btncdmx = ['cd1','cd2','cd3','cd4','cd5','cd6'];
let divcdm = ['dcd1','dcd2','dcd3','dcd4','dcd5','dcd6'];
var btnlistacdmx = [];
var divcdmx = [];

for (var m = 0; m <= 5; m++) {
	btnlistacdmx[m] = document.getElementById(btncdmx[m]);
	divcdmx[m] = document.getElementById(divcdm[m]);
}
btnlistacdmx[0].addEventListener('click',function(){
	divcdmx[0].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistacdmx[1].addEventListener('click',function(){
	divcdmx[1].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistacdmx[2].addEventListener('click',function(){
	divcdmx[2].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistacdmx[3].addEventListener('click',function(){
	divcdmx[3].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistacdmx[4].addEventListener('click',function(){
	divcdmx[4].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistacdmx[5].addEventListener('click',function(){
	divcdmx[5].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
//---------------------------------------------Quintana Roo-----------------------------------------------------------
let btnqr = ['qr1','qr2','qr3','qr4','qr5'];
let divquinta = ['dqr1','dqr2','dqr3','dqr4','dqr5'];
var btnlistaqr = [];
var divqr = [];

for (var q = 0; q <= 4; q++) {
	btnlistaqr[q] = document.getElementById(btnqr[q]);
	divqr[q] = document.getElementById(divquinta[q]);
}
btnlistaqr[0].addEventListener('click',function(){
	divqr[0].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistaqr[1].addEventListener('click',function(){
	divqr[1].style.display = 'block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistaqr[2].addEventListener('click',function(){
	divqr[2].style.display = 'block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistaqr[3].addEventListener('click',function(){
	divqr[3].style.display = 'block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistaqr[4].addEventListener('click',function(){
	divqr[4].style.display = 'block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
//----------------------------------------------Queretaro-------------------------------------------------------------
let btnqt = ['qt1','qt2','qt3','qt4','qt5'];
let divquere = ['dqt1','dqt2','dqt3','dqt4','dqt5'];
var btnlistaqt = [];
var divqt = [];

for (var t = 0; t <= 4; t++) {
	btnlistaqt[t] = document.getElementById(btnqt[t]);
	divqt[t] = document.getElementById(divquere[t]);
}
btnlistaqt[0].addEventListener('click',function(){
	divqt[0].style.display = 'block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistaqt[1].addEventListener('click',function(){
	divqt[1].style.display = 'block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistaqt[2].addEventListener('click',function(){
	divqt[2].style.display = 'block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistaqt[3].addEventListener('click',function(){
	divqt[3].style.display ='block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
btnlistaqt[4].addEventListener('click',function(){
	divqt[4].style.display = 'block';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
});
//------------------------------------------ Preguntas Frecuentes ----------------------------------------------------
let preguntasid = document.getElementById('preguntas');
let preguntalink = document.getElementById('p1');

function pregunta(){
	comprado.style.display = 'none';
	apartado.style.display = 'none';
	cancelado.style.display = 'none';
	presenta.style.display = 'none';
	formulario.style.display = 'none';
	preguntasid.style.display = 'block';
	limpiar();
	divqr[0].style.display ='none';
	divqr[1].style.display ='none';
	divqr[2].style.display ='none';
	divqr[3].style.display ='none';
	divqr[4].style.display ='none';
	divqt[0].style.display ='none';
	divqt[1].style.display ='none';
	divqt[2].style.display ='none';
	divqt[3].style.display ='none';
	divqt[4].style.display ='none';
	somosid.style.display = 'none';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
	declaradiv[0].style.display = 'none';
	declaradiv[1].style.display = 'none';
	declaradiv[2].style.display = 'none';
	declaradiv[3].style.display = 'none';
	declaradiv[4].style.display = 'none';
	chihdiv[0].style.display ='none';
	chihdiv[1].style.display ='none';
	chihdiv[2].style.display ='none';
	chihdiv[3].style.display ='none';
	chihdiv[4].style.display ='none';
	chihdiv[5].style.display ='none';
	chihdiv[6].style.display ='none';	
	dj.style.display = 'none';
	divcdmx[0].style.display ='none';
	divcdmx[1].style.display ='none';
	divcdmx[2].style.display ='none';
	divcdmx[3].style.display ='none';
	divcdmx[4].style.display ='none';
	divcdmx[5].style.display ='none';
	divcdmx[6].style.display ='none';
	
}
preguntalink.addEventListener('click', pregunta);
//----------------------------------------- Quienes somos -------------------------------------------------------------
let somosid = document.getElementById('somos');
let somoslink = document.getElementById('qs');

function somos(){
	somosid.style.display = 'block';
	comprado.style.display = 'none';
	apartado.style.display = 'none';
	cancelado.style.display = 'none';
	presenta.style.display = 'none';
	formulario.style.display = 'none';
	preguntasid.style.display = 'none';
	limpiar();
	divqr[0].style.display ='none';
	divqr[1].style.display ='none';
	divqr[2].style.display ='none';
	divqr[3].style.display ='none';
	divqr[4].style.display ='none';
	divqt[0].style.display ='none';
	divqt[1].style.display ='none';
	divqt[2].style.display ='none';
	divqt[3].style.display ='none';
	divqt[4].style.display ='none';
	cdiv[0].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
	declaradiv[0].style.display = 'none';
	declaradiv[1].style.display = 'none';
	declaradiv[2].style.display = 'none';
	declaradiv[3].style.display = 'none';
	declaradiv[4].style.display = 'none';
	chihdiv[0].style.display ='none';
	chihdiv[1].style.display ='none';
	chihdiv[2].style.display ='none';
	chihdiv[3].style.display ='none';
	chihdiv[4].style.display ='none';
	chihdiv[5].style.display ='none';
	chihdiv[6].style.display ='none';	
	dj.style.display = 'none';
	divcdmx[0].style.display ='none';
	divcdmx[1].style.display ='none';
	divcdmx[2].style.display ='none';
	divcdmx[3].style.display ='none';
	divcdmx[4].style.display ='none';
	divcdmx[5].style.display ='none';
	divcdmx[6].style.display ='none';

}
somoslink.addEventListener('click', somos);
//------------------------------------------ Botones compra ------------------------------------------------------------

let btncmp = ['btn1','btn2','btn3','btn4','btn5','btn6','btn7','btn8','btn9','btn10','btn11','btn12','btn13','btn14','btn15','btn16','btn17','btn18','btn19','btn20','btn21','btn22','btn23','btn24','btn25','btn26','btn27','btn28','btn29'];
var divbtn = [];
var formulario = document.getElementById('pago');
for (var x = 0; x <= 28; x++) {
	divbtn[x] = document.getElementById(btncmp[x]);
	divbtn[x].addEventListener('click', form);
	}


function form(){
	formulario.style.display = 'block'
	divqt[0].style.display = 'none';
	divqt[1].style.display = 'none';
	divqt[2].style.display = 'none';
	divqt[3].style.display = 'none';
	divqt[4].style.display = 'none';
	divqr[0].style.display = 'none';
	divqr[1].style.display = 'none';
	divqr[2].style.display = 'none';
	divqr[3].style.display = 'none';
	divqr[4].style.display = 'none';
	cdiv[1].style.display = 'none';
	cdiv[2].style.display = 'none';
	cdiv[3].style.display = 'none';
	cdiv[4].style.display = 'none';
	cdiv[0].style.display = 'none';
	declaradiv[0].style.display = 'none';
	declaradiv[1].style.display = 'none';
	declaradiv[2].style.display = 'none';
	declaradiv[3].style.display = 'none';
	declaradiv[4].style.display = 'none';
	chihdiv[0].style.display = 'none';
	chihdiv[1].style.display = 'none';
	chihdiv[2].style.display = 'none';
	chihdiv[3].style.display = 'none';
	chihdiv[4].style.display = 'none';
	chihdiv[5].style.display = 'none';
	chihdiv[6].style.display = 'none';
	dj.style.display = 'none';
	divcdmx[0].style.display = 'none';
	divcdmx[1].style.display = 'none';
	divcdmx[2].style.display = 'none';
	divcdmx[3].style.display = 'none';
	divcdmx[4].style.display = 'none';
	divcdmx[5].style.display = 'none';
}

	let nombre = document.getElementById('nombre');
	let apellidos = document.getElementById('apellidos');
	let numBoletos = document.getElementById('numBoletos');
	let CodigoP = document.getElementById('CP');
	let NumTarjeta = document.getElementById('NumTarjeta');
	let fValidez = document.getElementById('fValidez');
	let codigo = document.getElementById('codigo');
	let Email = document.getElementById('Email');

	let comprar = document.getElementById('comprar');
	let comprado = document.getElementById('comprado');

	function cAlert(){
		formulario.style.display = 'none';
		comprado.style.display = 'block';
		limpiar();
		


	}
	comprar.addEventListener('click', cAlert);

	let apartar = document.getElementById('apartar');
	let apartado = document.getElementById('apartado');


	function aAlert(){
		formulario.style.display = 'none';
		apartado.style.display = 'block';
		limpiar();

	}
	apartar.addEventListener('click', aAlert);

	let cancelar = document.getElementById('cancelar');
	let cancelado = document.getElementById('cancelado');

	function caAlert(){
		formulario.style.display = 'none';
		cancelado.style.display = 'block';
		limpiar();
	}
	cancelar.addEventListener('click',caAlert);

	let ok1 = document.getElementById('ok1');
	let ok2 = document.getElementById('ok2');
	let ok3 = document.getElementById('ok3');

	function oks(){
		comprado.style.display = 'none';
		apartado.style.display = 'none';
		cancelado.style.display = 'none';
		presenta.style.display = 'block';
	}


	ok1.addEventListener('click', oks);
	ok2.addEventListener('click', oks);
	ok3.addEventListener('click', oks);

	function limpiar(){
		nombre.value = '';
		apellidos.value = '';
		numBoletos.value = '';
		CodigoP.value = '';
		NumTarjeta.value = '';
		fValidez.value = '';
		codigo.value = '';
		Email.value = '';
	}
