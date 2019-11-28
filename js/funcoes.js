$(document).ready(function($) {
  jQuery.noConflict();

  // ROLAGEM AUTOMATICA AO CLICAR NOS ELEMENTOS DO MENU
  $( ".menu-mover" ).click(function(event) {
      var mover = $(this).attr('href');
      event.preventDefault();
      $( "html, body" ).animate({
      scrollTop: $(mover).offset().top + 70
      }, 1000);
        return false;
    });

  // abrir e fechar em duvidas
  $('.duvidas-list .duvidas-item').on('click', function(){
    $(this).toggleClass('active');
    $(this).find('.duvidas-item .content').slideToggle('fast');
  });

  // FLOATER mobile 
  if( $(window).width() < 767 ) {

    var lastScrollTop = 0;
     $(window).on('scroll', function() {
        var st = $(this).scrollTop();
       if(st < lastScrollTop) {
         $(".box-floater").removeClass("ativo");
         $(".box-floater").addClass("ativo-fixo");
       }
       else {
         $(".box-floater").addClass("ativo");
         $(".box-floater").removeClass("inicial");
       }
       lastScrollTop = st;
     });
  };

  // video youtube
  //$('.box-video .video a').on('click',function(){   
    //var url = $(this).data('video');    
    //$('.box-video .video').append('<iframe width="560" height="315" src="'+url+'?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'); 
  //});


  // video proprio
  $('.box-video .video a').on('click',function(){
  var url = $(this).data('video');    
  $('.box-video .video').append('<video width="560" height="315" controls autoplay class="btn-play" ><source src="'+url+'" type="video/mp4">Seu navegador nÃ£o suporta este vÃ­deo</video>');
  });


  //tempo de block tempo
  var segundos = 899;
  startCountdown(segundos);


  // wow
  new WOW().init();  
}); 

//ALTERA TAB--- ABAS
function alteraAba(objeto, numero) {
  $('.lista-abas .atual').hide().removeClass("atual");
  $('.lista-abas .item'+numero).show().addClass("atual");

  $('.titulo-abas').removeClass('active');
  $(objeto).addClass('active'); // O objeto que foi clicado adiciona a classe "selecionado"


}

// contagem regressiva
function startCountdown(tempo){ 
  if(tempo >= 0){
  var min = parseInt(tempo / 60); 
  var seg = tempo%60;
  var hora;
  min > 15 ? hora = parseInt(min / 15) : hora = 0;
  var dia = parseInt(hora/24); 
  hora = hora%24; 
  min = min%60; 
  
  hora =  hora;
  minutos =  min;
  segundos =  seg;
  // $(".hora").html(hora);
  $(".minutos").html(minutos);
  $(".segundos").html(segundos);
  tempo--; 
  setTimeout("startCountdown("+tempo+")", 1000); 
  } 
}

//function retorna dia mes ano
// setInterval(function() {
//   var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
//   var d = new Date();
//   $('.data').text(d.format("dd/mm/yyyy "));
//   document.getElementById("dia-semana").innerHTML = semana[d.getDay()];
// }, 1000);
