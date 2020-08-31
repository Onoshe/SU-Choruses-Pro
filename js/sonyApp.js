//var  hymnNo = document.getElementById("grabMe").innerHTML;
//document.getElementById("3").innerHTML= "Good";
//document.getElementById("displayHymn").innerHTML= "red"

//Print Choruse to Screen
function pHymnIndex(num){
	num = num;
	numInt = parseInt(num)
	/*
	var myNo =  hymnFun2();    			//Chorus Solo
	var selNum = hymnFunList2();		//Chorus Title
	*/
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= numInt;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
	//document.getElementById("3").innerHTML;
}
function pHymnIndex2(num){
	num = num;
	numInt = parseInt(num)
	//var myNo =  hymnFun2();
	//var selNum = hymnFunList2();
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title


	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
	//document.getElementById("3").innerHTML;
	location.replace("#page3")
}


/*Print Favourite Choruses to Screen. ID must be from 1- 709.
It must check to ensure number is within this range. 
Note that IDs for classified choruses are over 709*/
function printFavChoruse(num){
	num = num;
	num = parseInt(num);
	if(num > 0 && num < 1000){num = num;}
	else if(num >= 1000 && num < 2000){num = num - 1000;}
	else if(num >= 2000 && num < 3000){num = num - 2000;}
	else if(num >= 3000 && num < 4000){num = num - 3000;}
	else if(num >= 4000 && num < 5000){num = num - 4000;}
	else if(num >= 5000 && num < 6000){num = num - 5000;}
	else if(num >= 6000 && num < 7000){num = num - 6000;}
	else if(num >= 7000 && num < 8000){num = num - 7000;}
	else if(num >= 8000 && num < 9000){num = num - 8000;}
	else if(num >= 9000 && num < 10000){num = num - 9000;}
	else if(num >= 10000 && num < 11000){num = num - 10000;}
	else if(num >= 11000 && num < 12000){num = num - 11000;}
	else if(num >= 12000 && num < 13000){num = num - 12000;}
	else if(num >= 13000 && num < 14000){num = num - 13000;}
	else if(num >= 14000 && num < 15000){num = num - 14000;}
	else if(num >= 15000 && num < 16000){num = num - 15000;}
	else if(num >= 16000 && num < 17000){num = num - 16000;}
	else if(num >= 17000 && num < 18000){num = num - 17000;}
	else if(num >= 18000 && num < 19000){num = num - 18000;}
	else if(num >= 19000 && num < 20000){num = num - 19000;}
	else if(num >= 20000 && num < 21000){num = num - 20000;}
	else if(num >= 21000 && num < 22000){num = num - 21000;}
	else if(num >= 22000 && num < 23000){num = num - 22000;}
	else if(num >= 23000 && num < 24000){num = num - 23000;}
	else if(num >= 24000 && num < 25000){num = num - 24000;}
	else if(num >= 25000 && num < 26000){num = num - 25000;}
	else if(num >= 26000 && num < 27000){num = num - 26000;}
	else if(num >= 27000 && num < 28000){num = num - 27000;}
	else if(num >= 28000 && num < 29000){num = num - 28000;}
	else if(num >= 29000 && num < 30000){num = num - 29000;}
	else if(num >= 30000 && num < 31000){num = num - 30000;}

	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
/*
//Print Index Chorus to Screen
function printCIndexSelected(num){
	num = num;
	num = parseInt(num)-1000;
	var myNo =  hymnFun2();
	var selNum = hymnFunList2();

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}
*/

//Print Alphabetical Index Chorus to Screen. Unique ID starts from 2000.
function printAlphaIndex(num){
	num = num;
	num = parseInt(num)-2000;
	//var myNo =  hymnFun2();
	//var selNum = hymnFunList2();
	var myNo =  suChorusesFunction();    			//Chorus Solo
	var selNum = suChoruseIndexFunction();		//Chorus Title

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
}

//Function populate General Index with Songs. This function is triggered upon page load
function populateHymnIndexFun(){
	var alist = document.getElementById("hymnIndices");

	//var arrayT = hymnFunList2();
	var arrayT = suChoruseIndexFunction();
	//var indexID = [1,	2,	3,	4,	5,	6,	7,	8,	9,	10,	11,	12,	13,	14,	15,	16,	17,	18,	19,	20,	21,	22,	23,	24,	25,	26,	27,	28,	29, 30, 31];  //First element in the function is skipped
	for (var i=1; i<arrayT.length; i++) {
	//for(var i of indexID){
		var crtList = document.createElement("li");
		var createElmt = document.createElement("a");
		createElmt.textContent = (i)+". "+arrayT[i];
		createElmt.setAttribute("class", "ui-btn");
		createElmt.setAttribute("class", "ui-icon-bullets");
		createElmt.setAttribute("id",+(i));               
		createElmt.setAttribute("onclick", "pHymnIndex(this.id);" + onclick);
		createElmt.href = "#page3";
		crtList.appendChild(createElmt);
		alist.appendChild(crtList);
	}
}
/*
//Function populate Alphabetical Index with Songs
function assuCategory(){var assurance = [3, 	2, 	8, 	15, 	20, 	15, 	1, 	7, 	17,  14, 	4, 	9, 	10, 	11, 	13, 	16];
 return assurance; }*/

function populateAlphaIndexFun(){
	var alist = document.getElementById("pg9ChorusIndex");

	//var arrayT = hymnFunList2();
	//var indexID = assuCategory();
	var arrayT = suChoruseIndexFunction();
	 var indexID = chorusIndexA2ZList();
	//for (var i=1; i<arrayT.length; i++) {
	  for(var i of indexID){
		var crtList = document.createElement("li");
		var createElmt = document.createElement("a");
		createElmt.textContent = arrayT[i];
		createElmt.setAttribute("class", "ui-btn");
		createElmt.setAttribute("class", "ui-icon-bullets");
		createElmt.setAttribute("id",+(i+2000));               
		createElmt.setAttribute("onclick", "printAlphaIndex(this.id);" + onclick);
		createElmt.href = "#page3";
		crtList.appendChild(createElmt);
		alist.appendChild(crtList);
	}
}

function sheffleSong(){
	var num = randIntFun(0, 708);
	var num = parseInt(num)+1 //To stop it from selecting 0.
	var myNo =  suChorusesFunction();
	var selNum = suChoruseIndexFunction();

	document.getElementById("hymnNoIndex").innerHTML= num;
	document.getElementById("displayHymn").innerHTML= myNo[num];
	document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
	document.getElementById("suSongTitle").innerHTML= selNum[num];
	//document.getElementById("3").innerHTML;
}

function nextSong(){
	var myNo =  suChorusesFunction();
	var selNum = suChoruseIndexFunction();
	var num = document.getElementById("hymnNoIndex").innerHTML;
	num =  parseInt(num);
	
	if(num < 709){
		num = num + 1;
		document.getElementById("hymnNoIndex").innerHTML= num;
		document.getElementById("displayHymn").innerHTML= myNo[num];
		document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
		document.getElementById("suSongTitle").innerHTML= selNum[num];
	};
}

function prevSong(){
	var myNo =  suChorusesFunction();
	var selNum = suChoruseIndexFunction();
	var num = document.getElementById("hymnNoIndex").innerHTML;
	num =  parseInt(num);
	
	if(num > 1){
		num = num - 1;
		document.getElementById("hymnNoIndex").innerHTML= num;
		document.getElementById("displayHymn").innerHTML= myNo[num];
		document.getElementById("hymnNo").innerHTML= "SU Song No " + num;
		document.getElementById("suSongTitle").innerHTML= selNum[num];
	};
}


function goToPage2(){ location.replace("#page2"); }
function go2Prev(){	history.back(); }
function goSlashScrn(){	location.replace("#spashScreen2Page"); }

function showMyFavs(){
		//Clear this from My Favourites
		document.getElementById("noFavLabel").innerHTML = "";
		//Clear all the exisitng list
		$('#favouriteSongsListHead').empty();

		//get runs object
		var myFavs = getmyFavsObject();
		//var myFavs2= ["hello", "Good", "Tested", "Nice"]

		//Check if empty
		if(myFavs !="" && myFavs != null){
			for(var i = 0; i < myFavs.length; i++){
		$('#favouriteSongsListHead').append('<li class="ui-btn favListContainer" id="favListContainer2">'+myFavs[i]["title"]
		+'<a class="favListIcons ui-icon-eye ui-btn-icon-left favIcon" id="'+myFavs[i]["songID"]
		+'" onclick=pHymnIndex2(this.id)></a><a href="#" id="deleteLink" data-title="'+myFavs[i]["title"]
		+'" class="favListIcons ui-icon-delete ui-btn-icon-right"></a></li>'); }
		}
		countFavs();
}

function addFav(){
	//Get Form Values
	var title = $('#suSongTitle').text();
	var solo = $('#displayHymn').text();
	var songID = $('#hymnNoIndex').text();
	var titleID = "No."+songID+" "+title;

	//Create 'myFav' object
	var myFav = {
		title: titleID,
		solo: solo,
		songID: songID};

	var myFavs = getmyFavsObject();

	// Add song to Fav array
	myFavs.push(myFav);

	alert('Song Added');

	//Set stringgified object to localStorage
	localStorage.setItem('myFavs', JSON.stringify(myFavs));

	//Redirect
	//window.location.href="#";
	return false;
}

//Delete All Favourites
function clearAllFavFun(){
	//var testPoint = document.getElementById("clearAllFav");
	var clearFavs = document.getElementById("noFavLabel");
	if (confirm('Clear all Favourites! Sure you want to continue?')){
		localStorage.removeItem('myFavs');
		showMyFavs();
		clearFavs.innerHTML = "You Have No Favourites";

	//var myFavs = getmyFavsObject();
	//localStorage.setItem('myFavs', JSON.stringify(myFavs));
	//showMyFavs();
	}
}

//Get the runs object
function getmyFavsObject(){
	//Set runs array
	var myFavs= new Array();
	//Get current runs from localStorage
	var myCurrentFavs = localStorage.getItem('myFavs');

	//Check localStorage
	if(myCurrentFavs != null){
		var myFavs = JSON.parse(myCurrentFavs);
	}
	//Return runs object
	return myFavs;
}

function countFavs(){
	var myFavs = getmyFavsObject().length;
	document.getElementById("homeFavCount").innerHTML = myFavs;
}

/*
//Movintboo Text
// Wrap every letter in a span 
var textWrapper = document.querySelector('.bottomA'); 
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"); 
anime.timeline({loop: true}) 
.add({ 
	targets: '.ml2 .letter', 
	scale: [4,1], 
	opacity: [0,1], translateZ: 0, 
	easing: "easeOutExpo", 
	duration: 950, 
	delay: (el, i) => 70*i 
	}).add({ 
		targets: '.ml2', 
		opacity: 0, 
		duration: 1000, 
		easing: "easeOutExpo", 
		delay: 1000 
	});
*/

function fadingVerses(){setInterval(function(){
	$("#dailyPass").hide();
    $("#dailyPass").html(randomBibleVerse()); //Set Bible verse in tis ID
    $("#dailyPass").fadeIn(2000);
    $("#dailyPass").delay(5000);
    $("#dailyPass").fadeOut(2000);
    }, 9100);
};

function exitFromApp(){
	if (confirm('Do you really want to exit?')){
		if(navigator.app){
			navigator.app.exitApp();
		}else if (navigator.device){
			navigator.device.exitApp();
		}else{
			window.close();
		}

	}
}