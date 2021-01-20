//js=인터프리터. 한줄한줄 실행됨
//커스텀 타이머 만들기

function myTimer(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(time>2000){
                reject(new Error('에러발생'));
            }
            else resolve (`${time}초걸림`);
        },time);
    });
}

//무분별한 await 사용시 병목 발생 위험
//병목피하기-validator
//Promise.all
async function main(){
    try{
        const str = await myTimer(1000);
        console.log(str);
        console.log('메인함수실행');
    }
    catch(error){
        console.error(error.message);
    }
}

main();