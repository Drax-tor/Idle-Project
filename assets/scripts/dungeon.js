var dungeonlevel;
var dungeonDesc;
var dungeonLevelDesc;

function dungeonInit(){
  dungeonlevel = 0;
  
  $.getJSON("./assets/json/dungeon.json", function(json) {
    console.log(json); // this will show the info it in firebug console
  });
  updateLabelStats();
}

$('#floorDown').click(function(){
	dungeonlevel = dungeonlevel + 1;
  updateLabelStats();
});

$('#floorUp').click(function(){
	dungeonlevel = dungeonlevel - 1;
  updateLabelStats();
});

function updateDungeonLevelDesc(){

}
