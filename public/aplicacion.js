var TiempoTotal = 600;

var timer = {};

var win_timer;

var sonido_ojo = document.createElement("audio");

var sonido_balanza = document.createElement("audio");

var sonido_esfinge = document.createElement("audio");



var acetijo;

var vidas= 5;

var win = 0;

var app={


	Intro: function(){
		document.getElementById('video1').play();
        $('#balanza').hide();
		$('#Contenedor1').hide();
        $('#game1').hide();
        $('#processing-contenedor').hide();
        $('#CierraVideo').animate({
    width: "40%",
    height:"40%"
    
  }, 1500 );
		$('#CierraVideo').click(app.Inicio);





	},	



	Inicio: function(){
		document.getElementById('video1').pause();
		$('#video-contenedor').hide();   
		$('#game1').show();
		$('#ojo').click(app.ojo);
		
		
		},
		
		
	ojo: function(){
				
	

		$('#game1').hide();
		
		$('#geogebra-contenedor').fadeIn(2000);
		
		acertijo1.setJNLPBaseDir('http://tube.geogebra.org/webstart/');

   		acertijo1.setPreviewImage('http://tube.geogebra.org/files/00/00/39/57/material-395719.png', 'http://tube.geogebra.org/images/GeoGebra_loading.png?v=1.31');

  		acertijo1.setGiacJSURL('http://tube.geogebra.org/webstart/4.4/giac.js'); 		

		acertijo1.inject('geogebra-contenedor', 'preferHTML5');
		

		var juego1 = setTimeout(function (){
					var juego1_1 = setInterval(function(){ 
					
					win = acertijo1.getValue("win");
					
					if (win==1) {	
							win=0;
							app.fase2();
							clearInterval(juego1_1);

							}
					 },1000);
					},2000);

		},
	
	
	
	fase2: function(){
		$('#geogebra-contenedor').hide();
		$('#game1').show();

		},
	balanza: function(){
				
		$('#Contenedor1').hide();		

		$('#geogebra-contenedor').fadeIn(2000);
		
		acertijo2.setJNLPBaseDir('http://tube.geogebra.org/webstart/');

   		acertijo2.setPreviewImage('http://tube.geogebra.org/files/00/00/39/57/material-395719.png', 'http://tube.geogebra.org/images/GeoGebra_loading.png?v=1.31');

  		acertijo2.setGiacJSURL('http://tube.geogebra.org/webstart/4.4/giac.js'); 		

		acertijo2.inject('geogebra-contenedor', 'preferHTML5');
		

		var juego2 = setTimeout(function (){
					var juego2_1 = setInterval(function(){ 
					
					win = acertijo2.getValue("win");
					
					if (win==1) {	
							
							app.fase3();
							clearInterval(juego2_1);

							}
					 },1000);
					},2000);

		},
	fase3: function(){
		$('#geogebra-contenedor').hide();
		
		$('#comentario').html('<p>Muy bien!! <br> Tu balanza está equilibrada. Ahora hay que comprobar tus acciones en vida....¿Recuerdas como ayudaste al camello a encontrar su oasis?...¡Pincha en la pirámide!<p>');		
        

		$('#Contenedor1').fadeIn(2000);

		
		$('#piramide').click(app.camello);

		},
    camello: function(){
        
        $('#Contenedor1').hide();
        
        $('#processing-contenedor').show();
    
    
    
    
    
    },

};
$(document).ready(function(){
	$('#geogebra-contenedor').hide();
	$('#ayuda-contenedor').hide();
	
	app.Intro();

	

});



function playclip1(){

sonido_ojo.src = "./audio/ojo.ogg";
sonido_ojo.play();



};
function playclip2(){

sonido_balanza.src = "./audio/balanza.ogg";
sonido_balanza.play();



};
function playclip3(){

sonido_esfinge.src = "./audio/esfinge.ogg";
sonido_esfinge.play();



};
function muestra_ayuda(){

$('#Contenedor1').hide();	

$('#ayuda-contenedor').show();


};
function cierra_ayuda(){

$('#ayuda-contenedor').hide();

$('#Contenedor1').show();

};





