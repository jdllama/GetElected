var calcBonus = function() {	//This...this is such a simple thing, but I didn't think of it. Thanks, Siveran!
	var cap = 1;	//cap = 1 = 100%; the most is a 100% boost right now. The higher the cap, the more it's possible for players to boost. Later, I might raise this.
	return (totalRestart / (100 + totalRestart)) * cap;
}

var Update = function() {
	var tempEff = Math.round((eps / fps) * 10000000) / 10000000;
	var tempPap = Math.round((pps / fps) * 10000000) / 10000000;
	var tempYes = Math.round((yps / fps) * 10000000) / 10000000;
	
	tempEff += (tempEff * calcBonus());
	tempPap += (tempPap * calcBonus());
	tempYes += (tempYes * calcBonus());
	incrementEffort(tempEff);
	incrementPaperwork(tempPap);
	incrementYessir(tempYes);
	
	var goal = goals[currentGoalIndex];
	autogoal = $('#autogoal').prop('checked');
	if(autogoal === true) {
		if(efforttally >= goal.reqObj.effort &&
			paperworktally >= goal.reqObj.paperwork &&
			yessirtally >= goal.reqObj.yessir) {
				goal.unlocks();
				currentGoalIndex++;
				efforttally -= goal.reqObj.effort;
				paperworktally -= goal.reqObj.paperwork;
				yessirtally -= goal.reqObj.yessir;
				addPastGoal(goal);
				updateCurrentGoals();
		}
	}
}