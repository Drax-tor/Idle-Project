$(function(){

$('#settingsBtn').click(function(){
	$('.home').addClass('hide');
  $('.support').addClass('hide');
  $('.settings').removeClass('hide');
});

$('#homeBtn').click(function(){
	$('.settings').addClass('hide');
  $('.support').addClass('hide');
  $('.home').removeClass('hide');
});

$('#supportBtn').click(function(){
	$('.settings').addClass('hide');
  $('.home').addClass('hide');
  $('.support').removeClass('hide');
});

})
