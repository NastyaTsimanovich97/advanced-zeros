module.exports = function getZerosCount(number, base) {
  // your implementation
  let factors=[];
  let i=2;
  let n=base;
  let p=0;
  let t=0;
  let result=[];
  while (i*i<=n){
      if(n%i==0){
          factors.push(i);
          n=Math.floor(n/i);
      }
      else{
          i+=1;
      }
  }
  factors.push(n);
  let count=0;
      let j=factors[0];
      //console.log(factors)
      while(number>=j){
      count+=Math.floor(number/j);
      j*=factors[0];
    }
    for (let k=0;k<=factors.length;k++){
        if(factors[k]===factors[0]){
            p++;
            //console.log(p);
        }
    }
    result.push(Math.floor(count/p));
  
    let count1=0;
    let m=factors[factors.length-1];
    //console.log(factors)
    while(number>=m){
    count1+=Math.floor(number/m);
    m*=factors[factors.length-1];
  }
  for (let l=0;l<=factors.length;l++){
      if(factors[l]===factors[factors.length-1]){
          t++;
          //console.log(p);
      }
  }  
  result.push(Math.floor(count1/t));
  for(let i=0;i<=result.length;i++){
      if(result[i]<result[i+1]){
          return result[i];
      }
      return result[i+1];
  }
}