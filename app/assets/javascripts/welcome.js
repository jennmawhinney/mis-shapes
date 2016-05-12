$(document).ready(function() {

  $( window ).load(function() {
$('.modal_container1').show();
});

$('#superdisco').on('click', function(){
    $('.modal_container1').remove();
    $('.modal_container2').show();
});

    $('#play').on('click', function(){
      $('.modal_container2').fadeOut(1000,function(){
        $('.modal_container2').remove();
      });
    });

  // $('.modal__container2').show();
  // // $('.modal-goal').text($(this).attr('goal'));
  // // $('.modal-initiator').text($(this).attr('initiator'));
  //
  //
  // $('#play').on('click', function(){
  //   $('.modal__container2').fadeOut(1000,function(){
  //     $('.modal__container2').remove();
  //   });
  // });
}); //closes doc.ready
