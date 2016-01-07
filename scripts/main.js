$( document ).ready(function() {


var bHome = document.querySelector('#bhome');
var bMenu = document.querySelector('#bmenu');
var bDirections = document.querySelector('#bdirections');
var bContact = document.querySelector('#bcontact');



var  homeScreen = function() {
  //$( "#content" ).empty();

  $( "#content" ).empty();
  var myNewElement = $( '<img class="restaurant_photo" src="images/lidiotfront.jpg">');

  var myNewElement2 = $( "<p>We offer fine French dining at extremely high prices. Why pay less when you can pay more? Impress your friends, confuse your enemies, amuse people with common sense.</p>");

  $( "#content" ).hide();
  myNewElement.appendTo( "#content" );
  myNewElement2.appendTo( "#content" );

  $( "#content" ).show("slow");
}

homeScreen();


bHome.onclick = function() {
  homeScreen();
}

bMenu.onclick = function() {
  $( "#content" ).empty();

var myMenu = $( '<p>Menu:</br>Escargot - $expensive</br>Croissant - $outrageous</br>Bleu - $comically high</br>Camembert - $are you still checking prices?</br></br>Wine - $simply multiply liquor store prices by 1000</p>');

  $( "#content" ).hide();
  myMenu.appendTo( "#content" );
  $( "#content" ).show("slow");

}

bDirections.onclick = function() {
  $( "#content" ).empty();
  var myDirections = $( "<p>Directions:</br>You already know where we are, and if you do not you will need to ask a filty rich friend. If you do not have a filthy rich friend, you have no business coming here.</p>" );
  $( "#content" ).hide();
  myDirections.appendTo( "#content" );
  $( "#content" ).show("slow");
}


bContact.onclick = function() {
  $( "#content" ).empty();
  var myContact = $( "<p>Contact Us:</br>We do not post our contact information on the internet. Ask your filthy rich friend for our telephone number.</p>" );
  $( "#content" ).hide();
  myContact.appendTo( "#content" );
  $( "#content" ).show("slow");
}

});
