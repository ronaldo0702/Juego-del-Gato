   componentes();
   juego();
function juego(){
   var turno = "jugador1";
   var cont=0;
   $(".clic").one("click",function() {
      

      if (turno=="jugador1")
      {
         var dato1="o";
         turno = "jugador2"
         this.setAttribute("data-value", "o");
         console.log($(this).text());
         $(this).append('<img id="imagen" src="img/circulo.png" alt="" width="50" height="50">');
         var dato2="jugador1";
         gandador(dato1,dato2);
      }
      else
      { 
         
         var dato1="x";
         turno = "jugador1"
         console.log($(this).text());
         this.setAttribute("data-value", "x");
         $(this).append('<img id="imagen" src="img/equis.png" alt="" width="50" height="50">');
         var dato2="jugador2";
         gandador(dato1,dato2);
      
      }
   });
function gandador(dato,jugador){
    if ($("#2").attr('data-value') == dato && ($("#5").attr('data-value') == dato) && $("#8").attr('data-value') == dato) {
        alert("Ganaste "+jugador);
        contadorJuego(jugador);
        componentes();
     }
     else if ($("#1").attr('data-value') == dato && ($("#4").attr('data-value') == dato) && $("#7").attr('data-value') == dato) {
        alert("Ganaste "+jugador);
        contadorJuego(jugador);
        componentes();
     }
     else if ($("#3").attr('data-value') == dato && ($("#6").attr('data-value') == dato) && $("#9").attr('data-value') == dato) {
        alert("Ganaste "+jugador);
        contadorJuego(jugador);
        componentes();
     }
     else if ($("#1").attr('data-value') == dato && ($("#2").attr('data-value') == dato) && $("#3").attr('data-value') == dato) {
        alert("Ganaste "+jugador);
        contadorJuego(jugador);
        componentes();
     }
     else if ($("#4").attr('data-value') == dato && ($("#5").attr('data-value') == dato) && $("#6").attr('data-value') == dato) {
        alert("Ganaste "+jugador);
        contadorJuego(jugador);
        componentes();
     }
     else if ($("#7").attr('data-value') == dato && ($("#8").attr('data-value') == dato) && $("#9").attr('data-value') == dato) {
        alert("Ganaste "+jugador);
        contadorJuego(jugador);
        componentes();
     }
     else if ($("#1").attr('data-value') == dato && ($("#5").attr('data-value') == dato) && $("#9").attr('data-value') == dato) {
        alert("Ganaste "+jugador);
        contadorJuego(jugador);
        componentes();
     }
     else if ($("#3").attr('data-value') == dato && ($("#5").attr('data-value') == dato) && $("#7").attr('data-value') == dato) {
        alert("Ganaste "+jugador);
        contadorJuego(jugador);
        componentes();
     }
     else{
        cont+=1;
      if (cont==9) {
         contadorJuego("empate");
         componentes();
      }
     }
   }
}
function componentes(){
   $('.row').remove();
   $('.container').append('<div class="row"></div>');
   for (let contador= 1;contador <=9;contador++) {
      $('.row').append('<div class="col-4 col-sm-4 col-md-4 heigh clic" data-value="0" id="'+index+'"></div>');
   }
   juego();
}
   var conJugador1=0;
   var conJugador2=0;
   var conEmpate=0;

function contadorJuego(jugadorParametro){
   if (jugadorParametro=="jugador1") {
      conJugador1+=1;
      $("#"+jugadorParametro).val(conJugador1);
   }
   else if(jugadorParametro=="jugador2"){
      conJugador2+=1;
      $("#"+jugadorParametro).val(conJugador2);
   }
   else{
      conEmpate+=1;
      $("#"+jugadorParametro).val(conEmpate);
   }
}
