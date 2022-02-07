$(function(){

  heroInit();

$('#settingsBtn').click(function(){
	$('.home').addClass('hide');
  $('.support').addClass('hide');
  $('.settings').removeClass('hide');
  $('.hero').addClass('hide');
});

$('#homeBtn').click(function(){
	$('.settings').addClass('hide');
  $('.support').addClass('hide');
  $('.home').removeClass('hide');
  $('.hero').addClass('hide');
});

$('#supportBtn').click(function(){
	$('.settings').addClass('hide');
  $('.home').addClass('hide');
  $('.support').removeClass('hide');
  $('.hero').addClass('hide');
});

$('#heroBtn').click(function(){
	$('.settings').addClass('hide');
  $('.home').addClass('hide');
  $('.support').addClass('hide');
  $('.hero').removeClass('hide');
});

$(document).on('click','#addStr',function(){
  strength=strength+1;
  levelPoints = levelPoints - 1;
  updateLabelStats();
});

$(document).on('click','#addCons',function(){
  constitution=constitution+1;
  levelPoints = levelPoints - 1;
  updateLabelStats();
});

$(document).on('click','#addDex',function(){
  dexterity=dexterity+1;
  levelPoints = levelPoints - 1;
  updateLabelStats();
});

})
