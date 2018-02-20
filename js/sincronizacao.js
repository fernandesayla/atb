(function() {
  'use strict'

  //var cookie = getCookie()


  $.ajax({
  dataType: "json",
  url: 'https://dicre2.intranet.bb.com.br/api/menu',

  success:   function(resposta){
    $(".se-pre-con").hide();

    controladorDeMenu.adicionaMenu(resposta)

  }

  });

  $.ajax({
  dataType: "json",
  url: 'https://dicre2.intranet.bb.com.br/api/atbs',

  success:   function(resposta){
    $(".se-pre-con").hide();

    controladorDeAtb.adicionaAtb(resposta)

  }

  });

/*

  $.ajax({
  dataType: "json",
  url: 'https://dicre2.intranet.bb.com.br/reservas/'+getCookie(),

  success:   function(resposta){
    $(".se-pre-con").hide();
    resposta.cidades.forEach(function(cidade){
    controladorDeSalas.adicionaCidades(cidade.cidade, cidade.cidade_id)
  })

    resposta.salas.forEach(function(sala){
      var evento = {}
      var events = [];

      resposta.reservas.forEach(function(reservas){
        if (reservas.sala_id == sala.sala_id){
           events.push(reservas);
        }

      })
      controladorDeSalas.adicionaSala(sala.sala_id , sala.sala, sala.cidade,  sala.cidade_id , events, resposta.usuario)
      //  controladorDeCartao.adicionaCartao(cartaoAtual.sala, cartaoAtual.id)
    })

  },
  beforeSend: function(){
     $(".se-pre-con").show();
  },
  error:function(resposta) {
         console.log(resposta);
         if (resposta.status == 403) {
           window.location = 'https://login.intranet.bb.com.br/distAuth/UI/Login?goto=http%3A%2F%2Fdicre2.intranet.bb.com.br%2Freservasala';

         }else if (resposta.status == 401) {
           $(".se-pre-con").hide();
           var conteudo = $('<div>').addClass('p-3 mb-2 bg-warning text-white').append( 'Acesso não autorizado, contatar Ayla Fernandes F1522457 ')
           conteudo.prependTo('#principal')

         } else {
           $(".se-pre-con").hide();
           var conteudo = $('<div>').addClass('p-3 mb-2 bg-warning text-white').append( 'Servidor fora do ar, por favor, contatar Ayla Fernandes F1522457 ')
           conteudo.prependTo('#principal')
         }

     }
});

*/
/*  $(document).on('update', function(event,  param1){
  // console.log(JSON.stringify(param1));
   var mural={reservas: param1,
      usuario:'fernandes.ayla@gmail.com'}

      $.ajax({
        data:mural,
        url:'https://dicre2.intranet.bb.com.br/reservas/reserva/'+param1.id,
        method:'PUT',
        success:function(resposta){
          console.log('Rolou update!', resposta);
          let calendar = '#calendar_' + resposta.sala_id;

          $(calendar).fullCalendar( 'removeEvents' , resposta.id )
          if (resposta.excluido == 0) {
            $(calendar).fullCalendar('renderEvent', resposta, true);
          }


        }
        ,error:function(){

          console.log('Deu ruim update');

        }
      })

    })*/
    /* $("#syncS").click(function(){
      $(document).trigger('update')

    })*/

/*  $(document).on('sincroniza', function(event,  param1){
    var reserva={reservas: param1}

      $.ajax({
        data:reserva,
        url:'https://dicre2.intranet.bb.com.br/reservas/salvar',
        method:'POST',
        success: function(data) {
          //console.log(data);
            $('#calendar_'+data.sala_id).fullCalendar('renderEvent', data, true);

            }
         ,error:function(){
           console.log('Deu ruim');
        }
      })

    })
*/



  /*  $("#sync").click(function(){
      $(document).trigger('sincroniza')

    })*/



/*    function getCookie() {
    //var name =   cname + "=";
    var name = "BBSSOToken="

    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
      return "";
  }*/





  })()
