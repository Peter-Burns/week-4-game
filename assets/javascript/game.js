var crystalValues = {
	diamond: 5,
	ruby: 0,
	sapphire: 0,
	emerald:0
};
var targetScore=19+Math.floor(100*Math.random());
var runningTotal=0;
var wins=0;
var losses=0;
$('.crystalPic').on('click',function(){
runningTotal+=crystalValues[this.value];
console.log(runningTotal);
console.log(targetScore);
});
function updateRunningTotal(){
	$('#runningTotal').text(runningTotal);
}
function updateTargetScore(){
	$('#targetScore').text(targetScore);
}
function updateWinLoss(result){
	$('#result').text('You '+result+'!');
	$('wins').text('Wins: '+wins);
	$('losses').text('Losses: '+losses);
}
updateRunningTotal();
updateTargetScore();