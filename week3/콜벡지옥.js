function add1(input){
    return new Prpmise((resolve,reject)=>{
        setTimeout(()=>resolve(input+1),1000);
    })
}