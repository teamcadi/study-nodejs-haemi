const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout,
});

let inp;
readline.on('line', (input) =>{
    inp=input;
    console.log('내가 입력',input);
    logic();
});

function logic(){
    console.log(inp);
    const list = inp.split('');
    console.log(list);
}