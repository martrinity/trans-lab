$(document).ready(function($) {
  $(".button-collapse").sideNav();

  consultaSaldo();
});

 // Show sideNav
  $('.button-collapse').sideNav('show');
  // Hide sideNav
  $('.button-collapse').sideNav('hide');
  // Destroy sideNav
  $('.button-collapse').sideNav('destroy');
  
   $('.button-collapse').sideNav({
      menuWidth: 300, 
      edge: 'left', 
      closeOnClick: true, 
      draggable: true, 

    }


  );

   $('#saldo').click(function(){
  consultaSaldo();
   });

   function consultaSaldo(){
    var bipCode = $('#nro-tarjeta').val();

    $.ajax({
      url: `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipCode}`,
      type: 'GET',
      dataType: 'json'
    })
    .done(function(resp) {
      $('#mostrar-saldo').append('<div class="alerta-saldo"><p>SALDO TOTAL</p><h5>' + resp.saldoTarjeta + '</h5></div>');
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    
   }
   /*Se que pronto ajax y yo seremos felices y comeremos chocolate bajo un arbol lalalala*/