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
   var menuTabAnos =  $("#tabAnos")
   var primeiro = true;
  $.each(data.anos, function(index, value){

          menuTabAnos.append($('<li>').addClass("tab").append($('<a>').attr('href', "#ano" + value.ano).text("ATB "+ value.ano)) );
       
  })
    menuTabAnos.append($('<li>').addClass("tab").append($('<a>').attr('href', "#anoAnteriores").text("Anteriores")) );

      atbContentTabs(data)

}
function atbContentTabs(data){

  //  var main = $('main')
  let $primeiro  = true
      data.anos.forEach(function(value){
  //  $.each(data.anos, function(index, value){

        //adicionaAtbContentTabs(data)
        //<div id="test1" class="container"  >

          var contentTab = $('<div>').attr('id' , 'ano'+value.ano);
          //  <h2 class="header center blue-text text-darken-bb">ATB 2018</h2>

          var titulo = $('<h2>').addClass('header center blue-text text-darken-bb').text('ATB '+value.ano);
          let $semestreCard = $('<div>').addClass('row').attr('id' , 'ano'+value.ano);


        //  $each(data.atb, )
        //  console.log((value.ano).indexOf(data.atb.semestre));
            data.semestres.forEach(function(semestres){
                if (value.ano==semestres.ano) {
                    let $col = $("<div>")
                              .addClass("col s12 m12 l12 xl6")
                    let $card = $("<div>")
                              .addClass("card")
                    let $cardContent = $("<div>")
                              .addClass("card-content")
                    let $cardContentTitle = $("<span>")
                              .addClass("card-title").text(semestres.semestre + "º Semestre" )


                    $semestreCard
                        .append($col.append($card.append($cardContent.append($cardContentTitle))))

                }
            })

                contentTab.append(titulo).append($semestreCard).prependTo('main')

    })




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
