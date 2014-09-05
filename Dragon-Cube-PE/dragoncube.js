ModPE.setItem(500,"blaze_powder",0,"Senzubean");
ModPE.setItem(501,"blaze_rod",0,"Space Pod");
ModPE.setItem(502,"slimeball",0,"Dragon Ball Set");
ModPE.setItem(503,"emerald",0,"Hyperbolic Time Chamber");

var raceNamek = 0;
var raceSaiyan = 0;
var raceMajin = 0;	
var chosenRace = 0;

var namekX = 0;
var namekY = 0;
var namekZ = 0;

var chamberX = 0;
var chamberY = 0;
var chamberZ = 0;

var kaiX = 0;
var kaiY = 0;
var kaiZ = 0;

var heavenX = 0;
var heavenY = 0;
var heavenZ = 0; 

//buttons
var kiButton = null;


//transformations
var superSaiyan = 0;
var superSaiyanGod = 0;

var jump = 0;
var jumpTimer = 0;

var superMajin = 0;
var kidMajin = 0;

var fusedNamekian = 0;
var superNamekian = 0;

var transformTimerOne = 0;
var transformTimerTwo = 0;
var transformed = 0;

var level = 1;
var expMax = 3;
var exp = 0;

var maxKi = 10;
var ki = 10;
var hp = null;
var charging = 0;

var storyProgress = 0;

var spacePodX = 0;
var spacePodY = 0;
var spacePodZ = 0;

var structureGen = 0;

var travel = 0;
var travelHyperBolic = 0;
var travelKingKai = 0;

//story mobs
var mob = null;
var Raditz = null; //20 done
var Nappa = null; //30 done
var Vegeta = null; //40 done
var Frieza = null; //50  done
var Android = null; //60 human
var DrGero = null; //70 human
var Cell = null; //80 done
var Broly = null; //90 done
var Dabura = null; //100 done
var Buu = null; //110 done
var Bills = null; //120 done

//mobs
var Saibaman = null; //10 hp done
var alienSoldier = null; // 15 hp done
var Saiyan = null; //20 hp done
var Namekian = null; // 15 hp done

var killedStory = 1;

//npcs
var Yemma = null; //done
var kingKai = null; //done

//ki attacks
var velX;
var velY;
var velZ;

function story(){
if(storyProgress == 0)
{
genStruc();
structure();
print("Story Started - Structures Generated");
clientMessage("You play the role of Earths Hero, click to continue.");
storyProgress = 1;
spacePodX = playerGetX();
spacePodY = playerGetY();
spacePodZ = playerGetZ();
}
if(storyProgress == 1)
{
print("Raditz Spawned!");
clientMessage("<Console> Protect Earth from Raditz!");
} 
if(storyProgress == 2)
{
print("Nappa Spawned!");
clientMessage("<Console> Fight the Saiyan Brute Nappa!");
}
if(storyProgress == 3)
{
print("Vegeta Spawned!");
clientMessage("<Vegeta> Your Power Level... It's over 9000!");
}
if(storyProgress == 4 && travel == 1)
{
print("Defeat Frieza");
if(raceSaiyan==1)
{
clientMessage("<Frieza> Hah. Ive already killed millions of Monkeys, time to add another to the list.");
}
if(raceMajin == 1)
{
clientMessage("<Frieza> I havent seen you before but. I will find your Planet and Kill the rest of your kind.");
}
if(raceNamek == 1)
{
clientMessage("<Frieza> Do you worst, Namekian.");
}
}
if(storyProgress == 4 && travel == 0)
{
print("Travel to Namek");
clientMessage("<Console> To continue the story, travel to Namek using the Space Pod Item.");
}

if(storyProgress == 5)
{
print("Defeat the Android!");
if(raceSaiyan==1)
{
clientMessage("<Android> Hah. Ive got enough Data on you, I know every one of your moves, Saiyan.");
}
if(raceMajin == 1)
{
clientMessage("<Android> I havent seen you before... I need to collect some Data! This'll be interesting");
}
if(raceNamek == 1)
{
clientMessage("<Android> Oh I saw you fight in the Data Videos.");
}
}

if(storyProgress == 6)
{
print("Fight the Doctor!");
clientMessage("<Dr Gero> ... Your too weak for me fool!");
}
if(storyProgress == 7)
{

}
}

function useItem(x, y, z,itemId, blockId, side){
if(itemId == 500)
{
ki = maxKi;
player.setHealth(20);
addItemInventory(500, -1);
}

if(itemId == 501)
{
spacePod();
}

if(itemId == 502)
{
wishSystem();
addItemInventory(502, -1);
}
if(itemId == 503)
{
hyperBolicTimeChamber();
}
}

function levelSystem()
{
if(level < 10)
{
exp+=1;
}

if(exp == expMax)
{
level+=1;
exp = 0;
expMax += 1;
print("Level Up!");
}


if(level == 4)
{
if(raceMajin == 1)
{
clientMessage("<Console> You can now use a Ki Attack - Flame Breath");
}
if(raceSaiyan == 1)
{
clientMessage("<Console> You can now use a Ki Attack - Kamehameha");
}
if(raceNamek == 1)
{
clientMessage("<Console> You can now use a Ki Attack - Special Beam Cannon");
}
}

if(level == 6)
{
if(raceMajin==1)
{
clientMessage("<Console> You can now Transform into a Super Majin");
}
if(raceSaiyan==1)
{
clientMessage("<Console> You can now Transform into a Super Saiyan");
}
if(raceNamek==1)
{
clientMessage("<Console> You can now Transform into a Fused Namekian, growing stronger temporarily.");
}
}

if(level == 8)
{
clientMessage("<Console> Have some free Senzu Beans for your effort!");
addItemInventory(500, 3);
}

if(level == 10)
{
clientMessage("<Console> Have a set of Dragonballs for your effort!");
addItemInventory(502, 1);
}

}

var buttonWishOne = null;
var buttonWishTwo = null;  
var buttonWishThree = null;  

function wishSystem()
{
	wishOne();
	wishTwo();
	wishThree();
}

function wishOne(){
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			buttonWishOne = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("Diamonds");
			//button.setWidth(100);
			//button.setHeight(100);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
				addItemInventory(264, 10);
				clientMessage("<Shenron> Your wish has been granted.");
				buttonWishOne.dismiss();	
				buttonWishTwo.dismiss();
				buttonWishThree.dismiss();	
				}
			}));
			layout.addView(button);
			
			buttonWishOne.setContentView(layout);
			buttonWishOne.setWidth(100);
			buttonWishOne.setHeight(100);
			buttonWishOne.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
			buttonWishOne.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 250);
		}catch(err){
			print("Error: "+err);
		}
	} }));

}

function wishTwo(){
	  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			buttonWishTwo = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("Senzubeans");
			//button.setWidth(100);
			//button.setHeight(100);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
				addItemInventory(500, 10);
					clientMessage("<Shenron> Your wish has been granted.");
				buttonWishOne.dismiss();
				buttonWishTwo.dismiss();
				buttonWishThree.dismiss();
				}
			}));
			layout.addView(button);
			
			buttonWishTwo.setContentView(layout);
			buttonWishTwo.setWidth(100);
			buttonWishTwo.setHeight(100);
			buttonWishTwo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
			buttonWishTwo.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 100, 250);
		}catch(err){
			print("Error: "+err);
		}
	} }));
	
}

function wishThree(){
 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			buttonWishThree = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("Wolf");
			//button.setWidth(100);
			//button.setHeight(100);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
				addItemInventory(352, 10);
				print("Use bones on Wolf");
				clientMessage("<Shenron> Your wish has been granted.");
				buttonWishOne.dismiss();
				buttonWishTwo.dismiss();
				buttonWishThree.dismiss();
				}
			}));
			layout.addView(button);
			
			buttonWishThree.setContentView(layout);
			buttonWishThree.setWidth(100);
			buttonWishThree.setHeight(100);
			buttonWishThree.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
			buttonWishThree.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 200, 250);
		}catch(err){
			print("Error: "+err);
		}
	} }));
}


function deathHook(murderer,victim)
{
if(victim == mob)
{
levelSystem();
}

if(victim==Raditz && killedStory == 1)
{
storyProgress = 2;
killedStory = 2;
print("Earth saved!");
clientMessage("<Raditz> This isn't over yet... Two more Saiyans will avenge me!");
addItemInventory(500, 1);
}
if(victim==Nappa && killedStory == 2)
{
storyProgress = 3;
killedStory = 3;
print("You defeated the brute!");
clientMessage("<Nappa> Veget...!");
addItemInventory(500, 1);
}
if(victim==Vegeta && killedStory == 3)
{
storyProgress = 4;
killedStory = 4;
print("Vegeta fled");
clientMessage("<Vegeta> I won't forget this!");
addItemInventory(501, 1);
}
if(victim == Frieza && killedStory == 4)
{
storyProgress = 5;
killedStory = 5;
print("Namek is saved!");
if(raceMajin==1)
{
clientMessage("<Frieza> You look like... Buu? Buuhoo you loser!");
}
if(raceSaiyan==1)
{
clientMessage("<Frieza> I never... Never thought I'd be defeated by a monkey!");
}
if(raceNamek==1)
{
clientMessage("<Frieza> I thought I killed every last one of you Namekian slugs.");
}
}
if(victim == Android && killedStory == 5)
{
storyProgress = 6;
killedStory = 6;
Level.explode(Player.getX()+5, Player.getY(), Player.getZ(), 3.0);
print("You killed the Android!");
clientMessage("<Android> You... Dr Gero didn't have data on this!");
}
if(victim == DrGero && killedStory == 6)
{
storyProgress = 7;
killedStory = 7;
print("Dr Gero is gone.");
addItemInventory(500, 1);
Level.explode(Player.getX()+5, Player.getY(), Player.getZ(), 3.0);
if(raceMajin==1)
{
clientMessage("<Dr Gero> To think... Defeated by some walking goo.");
}
if(raceSaiyan==1)
{
clientMessage("<Dr Gero> I didn't have data on that... Super Saiyan...");
}
if(raceNamek==1)
{
clientMessage("<Dr Gero> To think... My downfall a Namekian.");
}
}
if(victim == Cell && killedStory == 7)
{
storyProgress = 8;
killedStory = 8;
print("World saved from Cell");
addItemInventory(502, 1);
if(raceMajin==1)
{
clientMessage("<Cell> If only I had your DNA...");
}
if(raceSaiyan==1)
{
clientMessage("<Cell> How... How could this happen?");
}
if(raceNamek==1)
{
clientMessage("<Cell> ...");
}
}
if(victim == Broly && killedStory == 8)
{
storyProgress = 9;
killedStory = 9;
print("Planet Vegeta Saved.");
clientMessage("<Broly> Kakkarot!");
}
if(victim == Dabura && killedStory == 9)
{
storyProgress = 10;
killedStory = 10;
print("The Demon King is Defeated!");
addItemInventory(500, 1);
if(raceMajin==1)
{
clientMessage("<Dabura> Just... Just what are you?!");
}
if(raceSaiyan==1)
{
clientMessage("<Dabura> Just as formidable as Gohan...");
}
if(raceNamek==1)
{
clientMessage("<Dabura> Hah, just as powerful as Picollo. Thank you, Namekian.");
}
}
if(victim == Buu && killedStory == 10)
{
storyProgress = 11;
killedStory = 11;
print("Defeated Kid Buu!");
clientMessage("<Kid Buu> Nyaah-hahha-ahhh!");
addItemInventory(500, 1);
if(raceMajin == 1)
{
clientMessage("<Console> Unlocked Super Majin Transformation.");
}
if(raceSaiyan == 1)
{
clientMessage("<Console> Unlocked Super Saiyan God Transformation!");
}
if(raceNamek == 1)
{
clientMessage("<Console> Unlocked Super Namekian Transformation!");
}
}
if(victim == Bills && killedStory == 11)
{
storyProgress = 12;
killedStory = 12;
print("Bills left Earth!");
addItemInventory(502, 1);
if(raceMajin==1)
{
clientMessage("<Bills> Kid Majin... Your a decent opponent, I'll leave Earth for another 3 years.");
}
if(raceSaiyan==1)
{
clientMessage("<Bills> Super Saiyan God was a challenge. You nearly won, I'll leave for now.");
}
if(raceNamek==1)
{
clientMessage("<Bills> Super Namekian, you were an interesting opponent. I'll be back soon, train up!");
}
}
}

var statButton = null;
var storyButton = null;  //A window we haven't yet made
var raceChooseOne = null;
var raceChooseThree = null;
var raceChooseTwo = null;

function  newLevel() {  //As soon as the world loads	
if(chosenRace==0)
{
	 raceOne();
	 raceTwo();
	 raceThree();
	 chosenRace = 1;
	 }
}

function raceOne()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			raceChooseOne = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("Saiyan");
			//button.setWidth(100);
			//button.setHeight(100);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
				raceSaiyan = 1;
				raceChooseOne.dismiss();
				raceChooseTwo.dismiss();
				raceChooseThree.dismiss();
				}
			}));
			layout.addView(button);
			
			raceChooseOne.setContentView(layout);
			raceChooseOne.setWidth(150);
			raceChooseOne.setHeight(100);
			raceChooseOne.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
			raceChooseOne.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 250);
		}catch(err){
			print("Error: "+err);
		}
	} }));
}

function raceTwo()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			raceChooseTwo = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("Namek");
			//button.setWidth(100);
			//button.setHeight(100);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
				raceNamek = 1;
				raceChooseOne.dismiss();
				raceChooseTwo.dismiss();
				raceChooseThree.dismiss();
				}
			}));
			layout.addView(button);
			
			raceChooseTwo.setContentView(layout);
			raceChooseTwo.setWidth(150);
			raceChooseTwo.setHeight(100);
			raceChooseTwo.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
			raceChooseTwo.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 150, 250);
		}catch(err){
			print("Error: "+err);
		}
	} }));
}

function raceThree()
{
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			raceChooseThree = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("Majin");
			//button.setWidth(100);
			//button.setHeight(100);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
				raceMajin = 1;
				raceChooseOne.dismiss();
				raceChooseTwo.dismiss();
				raceChooseThree.dismiss();
				}
			}));
			layout.addView(button);
			
			raceChooseThree.setContentView(layout);
			raceChooseThree.setWidth(150);
			raceChooseThree.setHeight(100);
			raceChooseThree.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
			raceChooseThree.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 300, 250);
		}catch(err){
			print("Error: "+err);
		}
	} }));
}

function loadButtons() {
 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			storyButton = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("Story");
			//button.setWidth(100);
			//button.setHeight(100);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
				story();
				if(storyProgress == 0)
				{
				button.setText("Raditz");
				}
				if(storyProgress == 2)
				{
				button.setText("Nappa");
				}
				if(storyProgress == 3)
				{
				button.setText("Vegeta");
				}
				if(storyProgress == 4)
				{
				button.setText("Frieza");
				}
				if(storyProgress == 5)
				{
				button.setText("Android");
				}
				if(storyProgress == 6)
				{
				button.setText("Dr Gero");
				}
				if(storyProgress == 7)
				{
				button.setText("Cell");
				}
				if(storyProgress == 8)
				{
				button.setText("Broly");
				}
				if(storyProgress == 9)
				{
				button.setText("Dabura");
				}
				if(storyProgress == 10)
				{
				button.setText("Buu");
				}
				if(storyProgress == 11)
				{
				button.setText("Bills");
				}
				if(storyProgress == 12)
				{
				button.setText("Complete");
				}
				}
			}));
			layout.addView(button);
			
			storyButton.setContentView(layout);
			storyButton.setWidth(200);
			storyButton.setHeight(100);
			storyButton.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
			storyButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 300);
		}catch(err){
			print("Error: "+err);
		}
	} }));
}

function leaveGame() {    //Get rid of it when we leave the world
  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
        if(storyButton != null) { //If our window still exists
          storyButton.dismiss(); //Remove it from the screen
          storyButton = null;     //Reset it
		  statButton = null;
		  statButton.dismiss();
        }
  }}));
}


function attackHook(attacker, victim)
{
if(victim == kingKai)
{
kingKaisPlanet();
}
if(victim == Yemma)
{
respawn();
}
}

function spacePod(){
if(travel==0)
{
travel = 1;
setPosition(getPlayerEnt(), namekX, namekY, namekZ); //x y z
print("To Namek");
clientMessage("<Spacepod> You have arrived at Namek.");
}
else if(travel == 1)
{
travel = 0;
setPosition(getPlayerEnt(), spacePodX, spacePodY, spacePodZ);
print("To Earth");
clientMessage("<Spacepod> You have arrived back at Earth.");
}
}

function kingKaisPlanet(){
if(travelKingKai==0)
{
travelKingKai = 1;
setPosition(getPlayerEnt(), kaiX, kaiY, kaiZ); //x y z
print("To King Kais Planet");
clientMessage("<King Kai> Welcome to my planet..");
}
else if(travelKingKai == 1)
{
travelKingKai = 0;
setPosition(getPlayerEnt(), heavenX, heavenY, heavenZ);
print("To Heaven");
clientMessage("<King Kai> You have arrived back at Heaven.");
}
}


function genStruc(){

}

function respawn(){
if(travel == 0)
{
setPosition(getPlayerEnt(), spacePodX, spacePodY, spacePodZ);
}
if(travel == 1)
{
setPosition(getPlayerEnt(), namekX, namekY, namekZ);
}
}

function hyperBolicTimeChamber()
{
if(travelHyperBolic==0)
{
travelHyperBolic = 1;
setPosition(getPlayerEnt(), kaiX, kaiY, kaiZ); //x y z
print("Hyper Bolic Time Chamber");
clientMessage("<Console> Welcome to the Hyper Bolic Time Chamber.");
}
else if(travelHyperBolic == 1)
{
travelHyperBolic = 0;
if(travel == 0)
{
setPosition(getPlayerEnt(), spacePodX, spacePodY, spacePodZ);
}
if(travel == 1)
{
setPosition(getPlayerEnt(), namekX, namekY, namekZ);
}
print("Exiting");
clientMessage("<Console> You have exited the Hyperbolic Time Chamber.");
}
}

//Skills
function superJump(){
if(level>0.1)
{
ki -= 5;
jump = 1;
}
}

function charge()
{
if(charging == 0)
{
charging = 1;
print("Cannot move whilst Charging");
}
else if(charging == 1)
{
charging = 0;
}
}

function sprint(){
if(level>0.1)
{
ki -= 5;
}
}

function kiAttack(){
if(level>3)
{
ki-=20;
if(raceMajin == 1)
{

}

}
}

function transformOne(){
if(level > 5)
{
if(transformed == 0)
{
ki -= 40;
if(raceMajin == 1)
{
print("Super Majin Activated");
clientMessage("<Console> You transformed into a Super Majin!");
}
if(raceNamek == 1)
{
print("Fused Namekian Activated");
clientMessage("<Console> You transformed into a Fused Namekian");

}
if(raceSaiyan == 1)
{
print("Super Saiyan Activated");
clientMessage("<Console> You transformed into a Super Saiyan!");
}
}
else if(transformed == 1)
{
transform = 0;
clientMessage("<Console> You descended to your normal form!");
}
}
}

function transformTwo(){
if(transformed == 0)
{
ki -= 80;
if(raceMajin == 1)
{
print("Kid Majin Activated");
clientMessage("<Console> You transformed into a Kid Majin!");
}
if(raceNamek == 1)
{
print("Super Namekian Activated");
clientMessage("<Console> You transformed into a Super Namekian");

}
if(raceSaiyan == 1)
{
print("Super Saiyan God Activated");
clientMessage("<Console> You transformed into a Super Saiyan God!");
}
}
else if(transformed == 1)
{
transform = 0;
clientMessage("<Console> You descended to your normal form!");
}
}

var chargeTimer = 0;
var timerHyper = 0;
var timerPlanet = 0;

function modTick(){
if(travelHyperBolic == 1)
{
timerHyper += 1;
if(timerHyper == 4)
{
timerHyper = 0;
ki += 0.25
}
}
if(travelKingKai == 1)
{
timerPlanet += 1;
if(timerPlanet == 5)
{
timePlanet = 0;
ki += 0.2
}
}
if(charging == 1)
{
setPosition(getPlayerEnt(), getPlayerX(), getPlayerY(), getPlayerZ); //x y z
chargeTimer += 1;
if(chargeTimer == 4)
{
chargeTimer = 0;
if(ki < maxKi + 1)
{
ki += 1;
}
}
}

if(transformed == 1)
{
if(raceMajin==1)
{

}
if(raceNamek==1)
{

} 
if(raceSaiyan==1)
{

} 
}

if(jump == 1)
{
setPosition(getPlayerEnt(), getPlayerX(), getPlayerY()+1 , getPlayerZ());
jumpTimer+=1;
if(jumpTimer == 5)
{
jump = 0;
jumpTimer = 0;
}
}

if(resetButton>0.1){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
	ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
		try{
			statButton = new android.widget.PopupWindow();
			var layout = new android.widget.RelativeLayout(ctx);
			var button = new android.widget.Button(ctx);
			button.setText("Level: " + level + " EXP: " + exp + "/" + expMax + " Ki: " + ki + "/" + maxKi);
			//button.setWidth(100);
			//button.setHeight(100);
			button.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg) {
				statButton.dismiss();
				levelButton();
				}
			}));
			layout.addView(button);
			
			statButton.setContentView(layout);
			statButton.setWidth(200);
			statButton.setHeight(100);
			statButton.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
			statButton.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 0, 200);
		}catch(err){
			print("Error: "+err);
		}
	} }));
	resetButton += 1;
	if(resetButton == 2)
	{
	resetButton = 1;
	  var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  ctx.runOnUiThread(new java.lang.Runnable({ run: function() {
        if(statButton != null) { //If our window still exists
		  statButton.dismiss();
		  statButton = null;
        }
  }}));
	}
}
}

var resetButton = 1;

