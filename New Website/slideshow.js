// JavaScript Document

// Our array for holding the different slides
var slides = new Array();
// The pointer to the current slide
var current_slide = 0;
 
$(document).ready(function() {		
	
	//Execute the slideShow, set 9 seconds for each images
	slideShow(9000);
	
});
 
function slideShow(speed) {
	//find each list item and add the object to the slides array
	$('ul.slideshow li').each(function(index) {
		slides[index] = $(this);
	});
	
	//Shuffle the slides array to put it into a random order
	shuffle(slides);	
	
	//append a LI item to the UL list for displaying caption
	$('ul.slideshow').append('<div id="caption"><p></p></div>');
	
	
	//append an LI item to the UL for displaying the selector
	/*
	$('ul.slideshow').append('<div id="selector"><a id="one"></a><a id="two"></a><a id="three"></a></div>');
	Add the dot image to each selector <a>
	$('#selector a').html('<img src="images/dot.png" height="20" width="22" />');
	*/
 
	//Display the current slide
	display_slide();
	
	//Call the gallery function to run the slideshow
	var timer = setInterval('gallery()',speed);
	
	//pause the slideshow on mouse over
	/*$('ul.slideshow').hover(
		function () {
			clearInterval(timer);	
		}, 	
		function () {
			timer = setInterval('gallery()',speed);			
		}
	);
	*/
	
	// Manage the clicks on the 1 - 4 items to switch to each story
	/*
	$("#selector a").hover(
		function () {
			$(this).find('img').attr('src', 'images/dot-over.png');
		},
		function() {
			$(this).find('img').attr('src', 'images/dot.png');
			highlight_slide();
		}
	);
	$("a[id='one']").click(
		function () {
			clearInterval(timer);
			current_slide = 0;
			display_slide();
		}			
	);
	$("a[id='two']").click(
		function () {
			clearInterval(timer);
			current_slide = 1;
			display_slide();						
		}			
	);
	$("a[id='three']").click(
		function () {
			clearInterval(timer);
			current_slide = 2;
			display_slide();			
		}			
	);
	*/
}
//Function to shuffle an array
function shuffle(arr) {
	for(
	  var j, x, i = arr.length; i;
	  j = parseInt(Math.random() * i),
	  x = arr[--i], arr[i] = arr[j], arr[j] = x
	);
	return arr;
}

function display_slide() {
	//Set the opacity of all images to 0 and z-index to 0
	$('ul.slideshow li').css({'opacity' : '0', 'z-index' : '0'});

	//Get the first image and display it (set it to full opacity and z-index 1)
	slides[current_slide].css({'opacity' : '1.0', 'z-index' : '1'});
	
	//Get the caption of the first image from IMG 'title' and 'alt' attribute and display it
	//$('#caption h3').html(slides[current_slide].find('img').attr('title'));
	$('#caption p').html(slides[current_slide].find('img').attr('alt'));
	//$('#caption a').attr('href', slides[current_slide].find('a').attr('href'));
	
	//Display the caption
	$('#caption').css({opacity: .85, bottom:0});	
	//$('#selector').css({opacity: .85, bottom: 60});
		
	/*
	highlight_slide();	
	*/
}

function highlight_slide() {
	$('#selector a').css('background-color', '#ccc');
	/* $('#selector a').find('img').attr('src', 'images/dot.png'); */
	switch(current_slide) {		
		case 0:
			$("a[id='one']").find('img').attr('src', 'images/dot-over.png');
			$("a[id='one']").css('background-color', '#000');
			break;			
		case 1:
			$("a[id='two']").find('img').attr('src', 'images/dot-over.png');
			$("a[id='two']").css('background-color', '#000');
			break;
		case 2:
			$("a[id='three']").find('img').attr('src', 'images/dot-over.png');
			$("a[id='three']").css('background-color', '#000');
		case 3:
			$("a[id='four']").find('img').attr('src', 'images/dot-over.png');
			$("a[id='four']").css('background-color', '#000');
		case 4:
			$("a[id='five']").find('img').attr('src', 'images/dot-over.png');
			$("a[id='five']").css('background-color', '#000');
		case 5:
			$("a[id='six']").find('img').attr('src', 'images/dot-over.png');
			$("a[id='six']").css('background-color', '#000');
			break;
		default:
	}
}
 
function gallery() {

	//if no IMGs have the show class, grab the first image
	var current = slides[current_slide];
 
	//Get next image, if it reached the end of the slideshow, rotate it back to the first image
	if(current_slide == 5) {
		current_slide = 0;
	}
	else {
		current_slide++;
	}
	//Set the next slide
	var next = slides[current_slide];
		
	//Get next image caption
	//var title = next.find('img').attr('title');	
	var desc = next.find('img').attr('alt');
    //var link = next.find('a').attr('href');	
 
	//Set the fade in effect for the next image, set the z-index of the next image to 1
	//and se the z-index of the current image to 0
	current.animate({'opacity' : '0'}, 1000, function () {
		current.css({'z-index' : '0'});
	});
	next.animate({'opacity' : '1'}, 800, function () {
		next.css({'z-index' : '1'});
	});
		
	//$('#selector').animate({bottom: 0}, 800);
	$('#caption').animate({bottom:-60}, 800, function () {			
		//$('#caption h3').html(title);
		$('#caption p').html(desc);
		//$('#caption a').attr('href', link);
	});
	//$('#selector').animate({bottom:60}, 800);
	$('#caption').animate({bottom:0}, 800);
	
	//Highlight the correct slide in the selector
	//highlight_slide(); 
}