//Ejemplo de solicitud sincrona con eventos mas utilizados
//load, error, progress

//1. Se crea objeto de solicitud XMLHttpRequest
let xhr = new XMLHttpRequest();

//2. Se configura: solicitud-GET para URL 
xhr.open('GET', 'http://localhost:3000/AJAX/archivo.txt');

//3. Se envia solicitud
xhr.send();

//4. Los siguientes seran invocacos despues de que la respuesta sea recibida
xhr.onload  = function(){
	if (xhr.status != 200) {//Analiza status de la respuesta HTTP
		alert(`Error ${xhr.status}: ${xhr.statusText}`);
    }else{//muestra resultado
    	alert(`Listo, se recibieron ${xhr.response.length} bytes`);
    }
};
xhr.onprogress = function(event){
	if (event.lengthComputable) {
		alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
	}else{
		alert(`Recibidos ${event.loaded} bytes`);
	}
};

xhr.onerror = function(){
	alert("Fallo solicitud");
};