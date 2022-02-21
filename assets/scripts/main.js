$(function(){

  heroInit();
  dungeonInit();

$('#settingsBtn').click(function(){
	$('.home').addClass('hide');
  $('.support').addClass('hide');
  $('.settings').removeClass('hide');
  $('.hero').addClass('hide');
  $('.dungeon').addClass('hide');
});

$('#homeBtn').click(function(){
	$('.settings').addClass('hide');
  $('.support').addClass('hide');
  $('.home').removeClass('hide');
  $('.hero').addClass('hide');
  $('.dungeon').addClass('hide');
});

$('#supportBtn').click(function(){
	$('.settings').addClass('hide');
  $('.home').addClass('hide');
  $('.support').removeClass('hide');
  $('.hero').addClass('hide');
  $('.dungeon').addClass('hide');
});

$('#heroBtn').click(function(){
	$('.settings').addClass('hide');
  $('.home').addClass('hide');
  $('.support').addClass('hide');
  $('.dungeon').addClass('hide');
  $('.hero').removeClass('hide');
});

$('#dungeonBtn').click(function(){
  $('.dungeon').removeClass('hide');
	$('.settings').addClass('hide');
  $('.home').addClass('hide');
  $('.support').addClass('hide');
  $('.hero').addClass('hide');
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

function updateLabelStats(){
  $('#lblTowerLevel').text(dungeonlevel);
  $('#floorLevelInfo').text('Dungeon level: ' + dungeonlevel);
  if(dungeonlevel > 0){
    $('#floorUp').removeClass('hide');
    $('#lblFloorUp').removeClass('hide');
  }
  else{
    $('#floorUp').addClass('hide');
    $('#lblFloorUp').addClass('hide');
  }
  $('#badgeLevelPointsHero').text(levelPoints);
  $('#lblPointToSPend').text(levelPoints + ' points to spend')
  $('#lblLevel').text('Level: ' + level);
  $('#lblExp').text('Experience: ' + exp);
  $('#lblGold').text('Gold: ' + gold);
  $('#lblHunterP').text('Hunter Points: ' + hunterPoint);
  if(levelPoints > 0){
    $('#lblStr').text('Strength: ' + strength).append(appendAddStr);
    $('#lblCons').text('Constitution: ' + constitution).append(appendAddCons);
    $('#lblDex').text('Dexterity: ' + dexterity).append(appendAddDex);
  }else{
    $('#badgeLevelPointsHero').addClass('hide');
    $('#lblPointToSPend').addClass('hide');
    $('#lblStr').text('Strength: ' + strength);
    $('#lblCons').text('Constitution: ' + constitution);
    $('#lblDex').text('Dexterity: ' + dexterity);
  }
  $('#lblHp').text('HP: ' + hp);
}
