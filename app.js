window.onload = function(){
	alert('Calulator Designed by Dr. Umesh Dutta');
	document.getElementById('myaddition').addEventListener('click',addnum);
	document.getElementById('mysubtraction').addEventListener('click',subnum);
	document.getElementById('mymultiplication').addEventListener('click',mulnum);
	document.getElementById('mydivision').addEventListener('click',divnum);
	document.getElementById('clear').addEventListener('click',resultclear);
}


function addnum() 
{
var x = document.getElementById('num1').value;
var y = document.getElementById('num2').value;
var z = parseFloat(x)+parseFloat(y);
document.getElementById('result').innerHTML = z;
}

function subnum() 
{
var x = document.getElementById('num1').value;
var y = document.getElementById('num2').value;
var z = parseFloat(x)-parseFloat(y);
document.getElementById('result').innerHTML = z;
}

function mulnum() 
{
var x = document.getElementById('num1').value;
var y = document.getElementById('num2').value;
var z = parseFloat(x)*parseFloat(y);
document.getElementById('result').innerHTML = z;
}

function divnum() 
{
var x = document.getElementById('num1').value;
var y = document.getElementById('num2').value;
var z = parseFloat(x)/parseFloat(y);
document.getElementById('result').innerHTML = z;
}
function resultclear()
{
document.getElementById('result').innerHTML = 0;
document.getElementById('num1').value = '';
document.getElementById('num2').value = '';
}
