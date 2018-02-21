var controladorDeMenu=(function() {
  'use strict'


  function adicionaMenu(data){

    var menuDropApp = $("#dropdown_app");
    var menuDropGestao = $("#dropdown_gestao");
    $.each(data.menu, function(index, value) {

      switch (value.tipo) {
        case "aplicativos":
          menuDropApp.append($('<li>').append($('<a>').attr('href', value.link).text(value.nome)) );
        break;
        case "gestao":
          menuDropGestao.append($('<li>').append($('<a>').attr('href', value.link).text(value.nome)) );
        break;

      }

  });

  }

 

/*  function adicionaCidades(nome, cidade_id){
    contadorCidades ++
    var sala = $('<div>').attr('id','pills'+cidade_id).attr('aria-labelledby','tab_'+cidade_id).addClass('anchor')

    var conteudo = $('<div>').addClass('salas pb-5 mb-5').attr('id','salas'+cidade_id)
    sala.append(conteudo).prependTo('#pills-tabContent')

    var cidade = $('<li>').addClass('nav-item')

    var titulo = $('<a>').append(nome).addClass('nav-link').attr('id','pills-home-tab'+cidade_id).attr('href','#pills'+cidade_id)
    if (cidade_id == 1 ) {
      titulo.addClass('')
    }
    cidade.append(titulo).prependTo('#navbarNav')
  }*/


  return {
    adicionaMenu:adicionaMenu,

  }
})()
