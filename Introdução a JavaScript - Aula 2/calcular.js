var a = 5;
var b = 2;
var r;

adicao();
subtracao();
multiplicacao();
divisao();

function adicao(){
   r = a + b;
   console.log(a + ' + ' + b + ' = ' +r);
}

function subtracao(){
    r = a - b;
    console.log(a + ' - ' + b + ' = ' +r);
 }

 function multiplicacao(){
    r = a * b;
    console.log(a + ' x ' + b + ' = ' +r);
 }

 function divisao(){
    r = a / b;
    console.log(a + ' / ' + b + ' = ' +r);
 }