<!-- if the php ever breaks, you can make the listbox manually with the code below... -->

<!-- <div id="isbnavigateform"><br /> <form name="isbnavigate" method="post"><fieldset> <legend>Navigate to previous year's ISBs</legend> <select name="isbnav"> <option selected="selected" value="http://www.caurs.com/New%20Website/isb/20102011isb.html">2010 - 2011</option> <option value="http://www.caurs.com/New%20Website/isb/20092010isb.html">2009 - 2010</option>  <option value="http://www.caurs.com/New%20Website/isb/20082009isb.html">2008 - 2009</option> <option value="http://www.caurs.com/New%20Website/isb/20072008isb.html">2007 - 2008</option> <option value="http://www.caurs.com/New%20Website/isb/20062007isb.html">2006 - 2007</option> <option value="http://www.caurs.com/New%20Website/isb/20052006isb.html">2005 - 2006</option> </select> <input type="button" onclick="location =
document.isbnavigate.isbnav.options
[document.isbnavigate.isbnav.selectedIndex].value;" value="Go" /></fieldset> </form></div> -->

<?php

$path = "/home/content/t/h/y/thy23/html/New Website/isb"; //change this if the script is in a different dir that the files you want

$select = "<div id=\"isbnavigateform\"><br /> <form name=\"isbnavigate\" method=\"post\"><fieldset class=\"isb\"> <legend class=\"isb\">Navigate to previous year's ISBs</legend> <select name=\"isbnav\"> ";

$dh = opendir( $path );
$filearray = array();
while( false !== ( $file = readdir( $dh ) ) ){
   if($file != "." AND $file != ".." ) {
	   array_push($filearray, $file);
   }
}

rsort($filearray);
reset($filearray);
while( $file = current($filearray) ){
	$displayfile = substr($file, 0, 4) . " - " . substr($file, 4, 4);
	$select .= "<option value='http://www.caurs.com/New%20Website/isb/$file'>$displayfile</option>\n";
	next($filearray);
}

$select .= "</select><input type=\"button\" onclick=\"location =
document.isbnavigate.isbnav.options
[document.isbnavigate.isbnav.selectedIndex].value;\" value=\"Go\" /></fieldset> </form></div>";
closedir( $dh );

echo "$select";
?> 