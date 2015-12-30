function Encounter(title){
	var self = this;

	this.title = name;
	this.round = 0;
	this.charList = [];

	this.addChar = function(name, initiative){
		var newChar = new Char(name, initiative);
		this.charList.push(newChar);
	};

	this.logChars = function(){
		for(var i = 0; i < self.charList.length; i++){
			console.log(self.charList[i]);
		}
	};

	this.sortChars = function(){
		this.charList.sort(function(a,b){
			return a.initiative - b.initiative;
		});
		console.log(self.charList);
	};

}

function Char(name, initiative){
	this.name = name;
	this.initiative = initiative;
	this.turns = [];
}

// function Turn(){
// 	this.movementComplete = false;
// 	this.actionComplete = false;
// 	this.bonusActionComplete = false;
// }

var battle = new Encounter("battle");

battle.addChar("Dmitri", 10);
battle.addChar("Mariah", 12);
battle.addChar("Alfadore", 1);
battle.addChar("Jethro", 13);
battle.addChar("Van Richten",20);

battle.logChars();
battle.sortChars();
battle.logChars();





