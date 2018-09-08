/*Pieterjan van Dijk																								//naam ontwikkelaar
opdracht-pizzacalculator*/																							//naam opdracht

var smallpizza = prompt("hoeveel small pizza's wilt u?(€5,-)")														//popup die hoeveelheid small pizza's vraagt
var mediumpizza = prompt("hoeveel medium pizza's wilt u?(€8,-)")													//popup die hoeveelheid medium pizza's vraagt
var largepizza  = prompt("hoeveel large pizza's wilt u? (€11,-)")													//popup die hoeveelheid large pizza's vraagt

document.write("<br>aantal pizza('s):" + " " + smallpizza)															//geeft aantal small pizza's weer
document.write("<br>prijs kleine pizza('s):" + " €" + smallpizza*5+",-")											//geeft prijs small pizza's aan

document.write("<br>aantal pizza('s):" + " " + mediumpizza)															//geeft aantal medium pizza's weer
document.write("<br>prijs medium pizza('s):" + " €" + mediumpizza*8+",-")											//geeft prijs medium pizza's aan

document.write("<br>aantal large pizza('s):" + " " + largepizza)													//geeft aantal large pizza's weer
document.write("<br>prijs grote pizza('s):" + " €" + largepizza*11+",-")											//geeft prijs large pizza's aan

document.write('<br>')																								//tussenruimte
document.write('<br>')																								//tussenruimte

var prijskleinepizza = 5		//prijs small pizza=€5																//prijs small pizza
var prijsmediumpizza = 8		//prijs medium pizza=€8																//prijs medium pizza
var prijsgrotepizza  = 11		//prijs large pizza=€11																//prijs large pizza


document.write('<br> totaal te betalen bedrag: €' + (smallpizza*5 + mediumpizza*8 + largepizza*11) + ',-')			//geeft totaalprijs weer