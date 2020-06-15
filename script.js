$(document).ready(function() {

  var coseDaFare = [
    "Fare la spesa",
    "Lavarmi i capelli",
    "Fare la passeggiata dopo lavoro"
  ];

  for (var i = 0; i < coseDaFare.length; i++) {
    aggiungiAlista(coseDaFare[i]);
  }

  $(document).on('click', '.todo .elimina', function() {
    $(this).parent().remove();
  });

  $('#btn-aggiungi').click(function() {
    var valoreInput = $('#elemento-da-aggiungere').val();
    aggiungiAlista(valoreInput);
  });

  $('#elemento-da-aggiungere').keypress(function(event) {
    if(event.which === 13 || event.keyCode === 13) {
      var valoreInput = $('#elemento-da-aggiungere').val();
      aggiungiAlista(valoreInput);
    }
  });

  function aggiungiAlista(testoDaAggiungere) {
    var cloneLiTemplate = $('.template li').clone();
    cloneLiTemplate.prepend(testoDaAggiungere);
    $('.todo ul').append(cloneLiTemplate);
    $('#elemento-da-aggiungere').val('');
  }

});
