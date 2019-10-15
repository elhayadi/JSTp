function sum(arg,...args){
	let somme=arg;
	for (var i = 0; i < args.length; i++) {
		somme+=args[i];
	}
	console.log(somme);
}

sum(4,5,5,4,5,4,8,5,5,45,5);