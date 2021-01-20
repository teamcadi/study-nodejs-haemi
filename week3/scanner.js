const { rejects } = require('assert');


function scanner(input){
    
    const rl = require('readline').createInterface({input: process.stdin, output: process.stdout});
    
    return new Promise((resolve, reject)=>{
        rl.on('line', (resulst)=>{
            resolve(result);
            rl.close();
        })
    });
}

async function main() {
    const result = await scanner();
    console.log(`${result}를 입력함`);
}


main();