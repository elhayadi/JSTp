function game(){
	var nbr= Math.random();
var essai;
var nbressai=0;
do{
	nbressai++;
essai=prompt();
alert(nbr)
if(essai>nbr){
console.log("le nombre entré est grand");
}else if(essai<nbr){
console.log("le nombre entré est petit");
}
}while(essai!=nbr)

	console.log("nombre d'essai : "+nbressai);
	return(0);
}


game();