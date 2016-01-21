$( document ).ready(function() {

var bHomeElement = document.getElementById('bhome');
var bMenuElement = document.getElementById('bmenu');
var bDirectionsElement = document.getElementById('bdirections');
var bContactElement = document.getElementById('bcontact');

var displayPageWithEffect = function(myNewElementShow){
  $( "#content" ).empty();
  $( "#content" ).hide();
  myNewElementShow.appendTo( "#content" );
  $( "#content" ).show("slow");
}

function homeScreen() {
  var myNewElement = $( '<img class="restaurant_photo" src="images/lidiotfront.jpg"><p>We offer fine French dining in a casual, upscale atmosphere. Experience the best that French cuisine has to offer.</p>');
  displayPageWithEffect(myNewElement);
}



homeScreen();

function menuScreen() {
  var myNewElement = $( '<p><b>Menu:</b><br><br><b>Moules Marinières ou à la Crème avec Pommes Frites - $19.5</b><br> mussels steamed, with or without cream, in garlic wine sauce and served with french fries <br><br><b>Poulet aux Porto - $20.5 </b><br>chicken breast tenderloin sautéed with a white port wine mushroom cream sauce <br><br><b>Poulet à la Provençale - $20.5</b><br> chicken breast tenderloin sautéed with garlic, leeks, tomatoes, capers and white wine <br><br><b>Saint-Jacques Sauce Gingembre et Citron Vert - $29 </b><br>pan-seared sea scallops in a ginger lime sauce <br><br><b>Saumon Sauce Endives - $25</b><br> salmon sautéed with belgium  endive, shallots, white wine, lemon and butter <br><br><b>Bar au Beurre Blanc et Crabe - $33</b><br> seared seabass with crabmeat in a sherry butter sauce <br><br><b>Truite aux Amandes - $20.5 </b><br>sautéed trout topped with brown butter and almonds</p>');
  displayPageWithEffect(myNewElement);

}

function directionsScreen() {
  var myNewElement = $( "<p>Directions:</br>We are convenently located in the heart of the restaurant district, on the main road. Starting at Interstate 95, take exit 33B, drive 3 miles to Restaurant Row and you will see Restaurant L'Idiot on the right side.</p>" );
  displayPageWithEffect(myNewElement);
}


function contactScreen() {
  var myNewElement = $( "<p>Contact Us:</br>Restaurant L'Idiot is not a real restaurant; rather this is an Odin Project assignment website which demonstrates dynamic html through Javascript and jQuery. The author of  this website, Nicholas Agro, can be contacted at (516)441-7820.</p>" );
  displayPageWithEffect(myNewElement);
}

bHomeElement.addEventListener('click', homeScreen);
bMenuElement.addEventListener('click', menuScreen);
bDirectionsElement.addEventListener('click', directionsScreen);
bContactElement.addEventListener('click', contactScreen);


});
