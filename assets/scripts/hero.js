var level;
var levelPoints = 0;
var LEVELPOINTSPERLEVEL = 3;
var exp;
var gold;
var hunterPoint;

//STATS
var strength;
var constitution;
var dexterity;
var hp;


//DYNAMIC APPEND
var appendAddStr='    <span id ="addStr" class="clickableAwesomeFont"><i class="fa fa-plus-circle"></span>';
var appendAddCons='    <span id ="addCons" class="clickableAwesomeFont"><i class="fa fa-plus-circle"></span>';
var appendAddDex='    <span id ="addDex" class="clickableAwesomeFont"><i class="fa fa-plus-circle"></span>';

function heroInit(){
  level = 1;
  exp = 0;
  gold = 0;
  hunterPoint = 0;

  strength = 1;
  constitution = 1;
  dexterity = 1;
  hp = 100;
  updateLabelStats();
}

function levelUp(){
  level = level + 1;
  levelPoints = levelPoints + LEVELPOINTSPERLEVEL;
  $('#lblPointToSPend').removeClass('hide');
  $('#badgeLevelPointsHero').removeClass('hide');
  updateLabelStats()
}
