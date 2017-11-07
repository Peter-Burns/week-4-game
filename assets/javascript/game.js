var crystalValues = {
	diamond: 0,
	ruby: 0,
	sapphire: 0,
	emerald:0
};
var targetScore;
var runningTotal;
var wins=0;
var losses=0;
function updateRunningTotal(){
	$('#runningTotal').text(runningTotal);
}
function updateTargetScore(){
	$('#targetScore').text(targetScore);
}
function updateWinLoss(result){
	$('#result').text('You '+result+'!');
	$('#wins').text('Wins: '+wins);
	$('#losses').text('Losses: '+losses);
	resetGame();
}
function resetGame(){
	runningTotal=0;
	targetScore=19+Math.floor(102*Math.random());
	updateRunningTotal();
	updateTargetScore();
	for(i in crystalValues){
	crystalValues[i]=Math.ceil(12*Math.random());
	}
}
resetGame();
$('.crystalPic').on('click',function(){
	runningTotal+=crystalValues[this.value];
	if(runningTotal===targetScore){
		wins++;
		updateWinLoss('win');
	}
	if(runningTotal>targetScore){
		losses++;
		updateWinLoss('lose');
	}
	updateRunningTotal();
});