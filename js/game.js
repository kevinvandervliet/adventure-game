var sharingan = false;

function Level1() {
	console.log("Level1()");

	var opt2 = document.getElementById('option1');
	opt2.innerHTML = 'Hotsprings';
	opt2.setAttribute("onClick", "javascript:hotsprings();");

	document.getElementById('level_title').innerHTML = 'Where do you want to go?';
	document.getElementById('level_image').src = 'img/level1.jpg';


	var opt1 = document.getElementById('option2');
	opt1.innerHTML = 'Uchiha village';
	opt1.setAttribute("onClick", "javascript:uchiha();");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Hokage residence'
    opt3.setAttribute("onClick", "javascript:hokage();");


}

function uchiha() {
	console.log("uchiha()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Be friendly';
	opt1.setAttribute("onClick", "javascript:receive();")

	document.getElementById('level_title').innerHTML = 'Welcome to the Uchiha village, What will you do now?';
	document.getElementById('level_image').src = 'img/uchiha.png';

    var opt2 = document.getElementById('option2')
    opt2.innerHTML = 'Steal sharingan';
    opt2.setAttribute("onClick", "javascript:killed();")

    var opt3 = document.getElementById('option3')
    opt3.innerHTML = 'Murder everybody'
    opt3.setAttribute("onClick", "javascript:killed();")
}

function hotsprings() {
	console.log("hotsprings")

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Spy on girls';
	opt1.setAttribute("onClick", "javascript:failed();");

	document.getElementById('level_title').innerHTML = 'What will you do next?';
	document.getElementById('level_image').src = 'img/hotsprings.jpeg';


	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Take a bath';
	opt2.setAttribute("onClick", "javascript:bath();");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Search Jiraiya'
    opt3.setAttribute("onClick", "javascript:dead();");
}

function failed() {
    console.log("failed")

	document.getElementById('level_title').innerHTML = 'You have been caught, try again!';
	document.getElementById('level_image').src = 'img/slapped.jpg';

	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function dead() {
	console.log("failed")

	document.getElementById('level_title').innerHTML = 'Jiraiya has been killed by Pain, try again!';
	document.getElementById('level_image').src = 'img/jiraiya.jpg';

	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function killed() {
	console.log("killed")

	document.getElementById('level_title').innerHTML = 'You failed and got killed, try again!';
	document.getElementById('level_image').src = 'img/failed.png';

	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function destroyed() {
	console.log("destroyed")

	document.getElementById('level_title').innerHTML = 'Konoha has been destroyed, try again!';
	document.getElementById('level_image').src = 'img/destroyed.png';

	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function bath() {
	console.log("bath")

	document.getElementById('level_title').innerHTML = 'You should be defeating Pain, try again!';
	document.getElementById('level_image').src = 'img/bath.jpg';

	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function hokage() {
	console.log("hokage()");

	var opt1 = document.getElementById('option1');

	document.getElementById('level_title').innerHTML = 'Pain killed the current hokage, fight him and save konoha!';
	document.getElementById('level_image').src = 'img/pain.jpg';

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Fight Pain'
    opt1.setAttribute("onClick", "shari();");
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function receive() {
    console.log("receive")

	document.getElementById('level_title').innerHTML = 'You were kind enough and the uchiha are willing to give you their sharingan!';
	document.getElementById('level_image').src = 'img/sharingan.png';

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Receive sharingan'
    opt1.setAttribute("onClick", "received();");	

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'Go to the Hokage residence'
    opt2.setAttribute("onClick", "hokage();")


	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function fight() {
    console.log("fight")

	document.getElementById('level_title').innerHTML = 'You are now fighting pain, what move will you use?';
	document.getElementById('level_image').src = 'img/begin.jpg';

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Shadow clone Jutsu'
    opt1.setAttribute("onClick", "fail();");	

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'Rasenshuriken'
    opt2.setAttribute("onClick", "rasen();")
    opt2.style.display = "inline";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function rasen() {
	console.log("rasen")

	document.getElementById('level_title').innerHTML = 'Pain dodged your attack, he counters you with Shinra Tensei!';
	document.getElementById('level_image').src = 'img/rasen.png';

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Dodge left'
    opt1.setAttribute("onClick", "dodged();");	

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'Dodge right'
    opt2.setAttribute("onClick", "fail();")
    opt2.style.display = "inline";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function fail() {
	console.log("fail")

	document.getElementById('level_title').innerHTML = 'You died to Pain, try again!';
	document.getElementById('level_image').src = 'img/fail.jpg';

	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function dodged() {
	console.log("dodged")

	document.getElementById('level_title').innerHTML = 'Use your final attack to defeat Pain!!!';
	document.getElementById('level_image').src = 'img/final.png';

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Use sexy Jutsu'
    opt1.setAttribute("onClick", "sexy();");	

    var opt2 = document.getElementById('option2');
    opt2.innerHTML = 'Use your rasengan'
    opt2.setAttribute("onClick", "win();")
    opt2.style.display = "inline";

	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function sexy() {
	console.log("sexy")

	document.getElementById('level_title').innerHTML = 'Thats not how you defeat Pain';
	document.getElementById('level_image').src = 'img/sexy.gif';

	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function win() {
	console.log("win")

	document.getElementById('level_title').innerHTML = 'You defeated Pain and you became Hokage';
	document.getElementById('level_image').src = 'img/win.png';

	var opt1 = document.getElementById('option1');
	opt1.style.display = "none";
    var opt2 = document.getElementById('option2');
	opt2.style.display = "none";
	var opt3 = document.getElementById('option3');
	opt3.style.display = "none";
}

function shari(){
	if (sharingan){
		fight();
	}
	else{
		destroyed();
        alert('You dont have the sharingan, Pain was way stronger and killed you and destroyed Konoha!')
	}
}

function received(){
	sharingan = true
	alert ('The Uchiha gave their sharingan to you, You are now strong enough to defeat Pain!')
	}

function Run() {
	alert('Dont run away!')
}

function Nothing() {
	alert('DO SOMETHING!!!')
}

