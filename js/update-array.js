//create the array and assign it values
var colors = ['white','black','custom'];

// Update the third item in the array
colors[2] = 'beige';

// get the element with an id of colors
var el = document.getElementById('color');

// Replace element with third item from the array
el.textContent=colors[2]
/*
Note: textContent does not work in IEB or earLier
You can use innerHTML on line 10, but note the security issuses on p228-231
el.innerHTML= color[2];
 */