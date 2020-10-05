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

/*
// Tune Collection Function 
function tuneCollections(){
	var song1 = 'res/myaudio/song1.mp3';
	var song5 = 'res/myaudio/song5.mp3';
	var song10 = 'res/myaudio/song10.mp3';
	var song14 = 'res/myaudio/song14.mp3';
	var song16 = 'res/myaudio/audio5.mp3';
	var tuneList = [0,song1,2, 3, 4, song5, 6, 7, 8, 9, song10,11,12,13,song14, 15, song16];
	return tuneList;
}
*/

/* Tune Collection Function 
function tuneCollections(){
	var song1 = 'res/myaudio/song1.mp3';
	var song5 = 'res/myaudio/song5.mp3';
	var song10 = 'res/myaudio/song10.mp3';
	var song14 = 'res/myaudio/song14.mp3';
	var song23 = 'res/myaudio/song23.mp3';
	var song24 = 'res/myaudio/song24.mp3';
	var song30 = 'res/myaudio/song30.mp3';
	var song33 = 'res/myaudio/song33.mp3';
	var song48 = 'res/myaudio/song48.mp3';
	var song50 = 'res/myaudio/song50.mp3';
	var song61 = 'res/myaudio/song61.mp3';
	var song66 = 'res/myaudio/song66.mp3';
	var song78 = 'res/myaudio/song78.mp3';
	var song79 = 'res/myaudio/song79.mp3';
	var song80 = 'res/myaudio/song80.mp3';
	var song85 = 'res/myaudio/song85.mp3';
	var song94 = 'res/myaudio/song94.mp3';
	var song103 = 'res/myaudio/song94.mp3';

	var tuneList = [0, song1,2,3, 4, song5, 6, 7, 8, 9, song10,11,12,13,song14, 15, 16,17,18,19,20, 21,22,song23,song24,25,26,27,28,29,song30, 31,32,song33,34,35,36,37,38,39,40, 41,42,43,44,45, 46,47,song48,49, song50, 51,52,53,54,55, 56,57,58,59,60, song61, 62,63,64,65, song66, 67,68,69,70,71,72,73,74,75,76, 77, song78, 79, song80, 81,82,83,84, song85, 86,87,88,89,90,91,92,93,song94, 95,96,97,98,99,100, 101,102,song103];
	return tuneList;
}*/

function resetSongBtn(){
	var tuneControl = $('#tuneControl').text();
	var tuneControl2 = $('#tuneControl2').text();
	if(tuneControl === 2 ){
		$('#songTune').css('background-color', '');
		$('#songTune').text('Play Song Tune');
	}
	if(tuneControl === 0 && tuneControl2 === 1){
		$('#songTune').css('background-color', 'aqua');
		$('#songTune').text('Pause Song Tune');
	}
}

// Check Song Tune at the click of Panel btn (My Songs Display Screen)
/*  tuneControl: 
		0 - Song is vailable to play
		2 - Song is Not available to play
	tuneControl2:
	  if 0 - Play Song
	     1 - Stop Song
*/
function checkSongTune(){
	var songNo = document.getElementById('hymnNoIndex').innerHTML;
	var tuneControl = document.getElementById('tuneControl').innerHTML;
	var tuneCall = tuneCollections();
	var checkTune = tuneCall[songNo];
	
	//Check if available
	if(typeof checkTune == 'string'){
		$('#songTune').text('Play Song Tune');
		$('#songTune').css('background-color', 'lime');
		$('#tuneControl').text(0);

	}else {$('#tuneControl').text(2);
		$('#songTune').css('background-color', '');
		$('#songTune').text('Song tune unavailable');}
	//resetSongBtn();
}

/* Home Song Panel- Play Audio & Display*/
//var music = new Audio();
function playSong(){
	var tuneControl2 = $('#tuneControl2').text();

	var tuneControl = document.getElementById('tuneControl').innerHTML;
	tuneControl = parseInt(tuneControl);
	if(tuneControl === 0){
		var songNo = document.getElementById('hymnNoIndex').innerHTML;	
		var playme = document.getElementById('myaudioID');

		document.getElementById('songTune').style.backgroundColor = 'aqua';
		var tuneCall = tuneCollections();
		$('#tuneControl2').text(1);
		//$('#songTune').text('Pause Song Tune');
		playme.src = tuneCall[songNo];
		playme.load();
		playme.play();
		playme.loop = true;
	//Call Stop Butto
		$('#stopSongTune').css('visibility', 'visible');
		$('#stopSongTune-HomeDiv').css('display', 'block');
	}
}

function stopSongTune(){
	var tuneControl2 = $('#tuneControl2').text();

	var tuneControl = document.getElementById('tuneControl').innerHTML;
	tuneControl = parseInt(tuneControl);

		var playme = document.getElementById('myaudioID');
		document.getElementById('songTune').style.backgroundColor = '';
		//var tuneCall = tuneCollections();
		//playme.src = tuneCall[songNo];
		//playme.load();
		playme.pause();
		$('#tuneControl2').text(0);
		$('#stopSongTune').css('visibility', 'hidden');
		$('#stopSongTune-HomeDiv').css('display', 'none');
}

/* -------- Developer Section ----------- */
//Write My Songs- Preview My Song
var myAddedSongsTitleList = [];
var myAddedSongsSoloList = [];
$(function(){
    $("#addMySong").on("click", function(){
	var addSongTitle = $("#writeTitle").val();
	var addSongSolo = $("#writeSolo").val();
	if(addSongTitle != '' && addSongSolo != ''){
		$("#mySongTitle").text('Song Title: '+addSongTitle);
		//$("#mySongCreated").text('');
		$("#mySongCreated").html('');
		//var soloPreview = addSongSolo.replace(/"/g, '<p>');
		var soloPreview = addSongSolo.replace(/:/g, '<p>');
		//var soloPreview = addSongSolo.replace(/"/g, '<p>');
		$("#mySongCreated").append(soloPreview);
		}else{"Write your Song title and solo to preview"}
    });
});

/*----Clear My Songs & Undo My Songs -----*/
//Create dummy variables
var dummyTitle = "";
var dummySolo = "";

$(function(){
	$('#clearMySong').click(function(){		
	var holdMyITitle = $("#writeTitle").val();
	var holdMyISolo = $("#writeSolo").val();
	var holdMyDTitle = $("#mySongTitle").text();
	var holdMySSolo = $("#mySongCreated").text();

	//Send input data to dummy variables before deleting
	dummyTitle = holdMyITitle;
	dummySolo = holdMyISolo;
	dummyDTitle = holdMyDTitle;
	dummyDSolo = holdMySSolo;

	//Delete input data
	$("#writeTitle").val('');
	$("#writeSolo").val('');
	$("#mySongTitle").text('');
	$("#mySongCreated").text('');
	});

	//Recall
	$('#undoClearSong').click(function(){
	//Recall data from dummy variables
	$("#writeTitle").val(dummyTitle);
	$("#writeSolo").val(dummySolo);
	});
});
/*----/Clear My Songs & Undo My Songs -----*/

//Add My Songs- Save My Song
function addMySong(){
	//Get Song Values
	//var title = $("#mySongTitle").text();
	//var solo = $("#mySongCreated").text();
	//var solo = $("#mySongCreated").text();
	var title = $("#writeTitle").val();  //This is working
	var solo = $("#writeSolo").val();

	//Check if songtitle & solo are empty
	if(title != '' && solo != ''){
		var mySongs = getMyAddSongsObject();
		nextID = mySongs.length;

		//Set unique ID using length of the object 
		var songID = nextID+50000;

		//Create 'mySong' object
		var mySong = {
			title: title,
			solo: solo,
			songID: songID};

		// Add mySong to mySongs array
		mySongs.push(mySong);

		//Set stringgified object to localStorage
		localStorage.setItem('mySongs', JSON.stringify(mySongs));

		alert("My Script Added successful");
			//Delete input data
			$("#writeTitle").val('');
			$("#writeSolo").val('');
			$("#mySongTitle").text('');
			$("#mySongCreated").text('');
		return false;
	} 
	if (title === '' && solo === ''){
		alert('Please write Song Title and Solo and preview');
	}
}

//Get the runs object
function getMyAddSongsObject(){
	//Set mySongs array
	var mySongs= new Array();
	//Get current mySongs from localStorage
	var myCurrentSongs = localStorage.getItem('mySongs');

	//Check localStorage
	if(myCurrentSongs != null){
		var mySongs = JSON.parse(myCurrentSongs);
	}
	//Return runs object
	return mySongs;
}


function populateMyAddedSongs(){
	//Clear all the exisitng list
	$('#mySongIndices').empty();

	//get runs object
	var mySongs = getMyAddSongsObject();
	//var myFavs2= ["hello", "Good", "Tested", "Nice"]

	//Check if empty
	if(mySongs !="" && mySongs != null){
		for(var i = 0; i < mySongs.length; i++){
		$('#mySongIndices').append('<li class="ui-btn songTitleIndexClass" id="songTitleIndexCont">'+mySongs[i]["title"]
		+'<a class="favListIcons ui-icon-eye ui-btn-icon-left favIcon" id="'+mySongs[i]["songID"]
		+'" onclick="printMySong(this.id); formatMyDisplaySolo()"></a><a href="#" id="deleteMyAddedSong" data-title="'+mySongs[i]["title"]
		+'" class="favListIcons ui-icon-delete ui-btn-icon-right"></a></li><hr>'); 
		}
	}
	countMyScripts();
}


//Print My Selected Song to the Screen
function printMySong(selTitle){
	    	localStorage.setItem('myCurrentID', selTitle);

	    	//Get current data
	    	myCurrentID = localStorage.getItem('myCurrentID');

			var mySongs = getMyAddSongsObject();
	    	//Loop through runs
	        //&& runs[i].date == currentDate
	    	for(var i = 0; i < mySongs.length; i++){
	    		if(mySongs[i].songID == myCurrentID){

	    			$('#page12SongTitle').text(mySongs[i].title);
	    			$('#pg12SongDisplay').html(mySongs[i].solo);
	    			//alert( mySongObj[i].solo);
	    		}
	    		localStorage.setItem('mySongs', JSON.stringify(mySongs));
	    		//call showFavs()
	    		//	showMyFavs();
	    		//formatMyDisplaySolo();
	    		location.replace("#page12");
	    	}
	    	return false;
};


//Delete from Favourite
$(document).one('pageinit', function(){
	// Delete Handler
	$('#mySongIndices').on('click', '#deleteMyAddedSong', deleteMySong);

	function deleteMySong(){
		//alert("wanan to delete?");}
	//Set LS items
		if(confirm('Are you sure?')){
	    	localStorage.setItem('currentTitle', $(this).data('title'));

	    	//Get current data
	    	currentTitle = localStorage.getItem('currentTitle');

			var mySongs = getMyAddSongsObject();

	    	//Loop through runs
	        //&& runs[i].date == currentDate
	    	for(var i = 0; i < mySongs.length; i++){
	    		if(mySongs[i].title == currentTitle){
	    			mySongs.splice(i, 1);
	    		}
	    		localStorage.setItem('mySongs', JSON.stringify(mySongs));
	    		//call showFavs()
	    			popuateMyAddedSongs();
	    	}
	    	return false;
    	}
	}
}); 
/* ------- Testing Buttons ---------*/
//Get Displayed Song Contents
$(function(){
    $("#getContent").on("click", function(){
    var mySong = $("#pg9SongDisplay").text();
    var mySongContent = $("#pg9SongDisplay").html();
    //JSON.parse(mySong);
    //JSON.parse(mySongContent);
	
	alert(mySong);
	alert(mySongContent);
    });
});

//Format My Song On Display Screen
$(function(){
    $("#fMySong").on("click", function(){
    var mySong = $("#pg9SongDisplay").text();
    var mySongContent = $("#pg9SongDisplay").html();
    //JSON.parse(mySong);
    //JSON.parse(mySongContent);

	mySongContent = mySong;
	var finalSong = mySong.replace(/:/g, '<p>');
	//$("#mySongCreated").append(soloPreview);
	$("#pg9SongDisplay").html('');
	$("#pg9SongDisplay").html(finalSong);

    });
});


//Format My Song On Display Screen
$(function(){
    $("#revContents").on("click", function(){
    var mySong = $("#mySongCreated").text();
    var mySongContent = $("#mySongCreated").html();
    //JSON.parse(mySong);
    //JSON.parse(mySongContent);

	alert(mySong);
	alert(mySongContent);

    });
});

/* ------- /Testing Buttons ---------*/

//Format My Song To On Display on Screen
function formatMyDisplaySolo(){
    var mySong = $("#pg12SongDisplay").text();
    var mySongContent = $("#pg12SongDisplay").html();

	mySongContent = mySong;
	var finalSong = mySong.replace(/:/g, '<p>');
	$("#pg12SongDisplay").html('');
	$("#pg12SongDisplay").html(finalSong);
};

function countMyScripts(){
	var myScripts = getMyAddSongsObject().length;
	document.getElementById("homeMyScriptCount").innerHTML = myScripts;
}

/* ------- /Developer ----------- */
/*
$(function(){
	//var test = $('.navBtns-Home').css("margin");
	$("#mySongCreated").click(function(){
	var x = $("#mySongCreated").css("font-size");
	alert(x);
	});
});
*/