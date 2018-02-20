var controladorDeAtb=(function() {
  'use strict'


  function adicionaAtb(data){

    /*  var menuDropApp = $("#dropdown_app");
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
*/
   var menuTabAnos =  $("#tabAnos");
   var primeiro = true;
  $.each(data.anos, function(index, value){
        if (primeiro) {
          menuTabAnos.append($('<li>').addClass("tab").append($('<a>').addClass("active").attr('href', "#ano" + value.ano).text("ATB "+ value.ano)) );
        }else {
          menuTabAnos.append($('<li>').addClass("tab").append($('<a>').attr('href', "#ano" + value.ano).text("ATB "+ value.ano)) );
        }
  })
    menuTabAnos.append($('<li>').addClass("tab").append($('<a>').attr('href', "#anoAnteriores").text("Anteriores")) );



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
  adicionaAtb:adicionaAtb,

}
})()
