<?php

$path = "/home/content/t/h/y/thy23/html/New Website/pastevents"; //change this if the script is in a different dir that the files you want

$select = "<div id=\"pasteventsnavform\"><br /> <form name=\"pasteventsnavform\" method=\"post\"><fieldset class=\"past\"><legend class=\"past\">Navigate to past symposia</legend> <select name=\"pasteventsnav\"> ";

$dh = opendir( $path );
$filearray = array();
while( false !== ( $file = readdir( $dh ) ) ){
   if($file != "." AND $file != "..") {
	   array_push($filearray, $file);
   }
}

rsort($filearray);
reset($filearray);
while( $file = current($filearray) ){
	$displayfile = substr($file, 0, 4);
	$select .= "<option value='http://www.caurs.com/New%20Website/pastevents/$file'>$displayfile Symposium</option>\n";
	next($filearray);
}

$select .= "</select><input type=\"button\" onclick=\"location =
document.pasteventsnavform.pasteventsnav.options
[document.pasteventsnavform.pasteventsnav.selectedIndex].value;\" value=\"Go\" /></fieldset> </form></div>";
closedir( $dh );

echo "$select";
?> 