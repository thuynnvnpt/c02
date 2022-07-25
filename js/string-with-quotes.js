var title;
var message ;
// Assign valua
title = " Molly's Special Offers";
message = '<a href=\"sale.html\"> 25% off!</a>';
// Get the element with an id of title.
var elTitle = document.getElementById('title');
// Replace the content of this element.
elTitle.textContent = title;

var elNote = document.getElementById('note');

elNote.innerHTML = message;
