module.exports = function getZerosCount(number, base) {
  // your implementation
  let factors=[];
  let i=2;
  let n=base;
  let p=0;
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
      let j=factors[factors.length-1];
      while(number>=j){
      count+=Math.floor(number/j);
      j*=factors[factors.length-1];
    }
    for (let k=0;k<=factors.length;k++){
        if(factors[k]===factors[factors.length-1]){
            p++;      
        }
    }
    return Math.floor(count/p);
}