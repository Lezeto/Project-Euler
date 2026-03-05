function fiboEvenSum(n) {
  let a= 1;
  let b= 2;
  let suma =0;
   while(b<=n){
    if(b%2==0){suma+=b}
    [a,b]=[b,a+b];
   }
   return suma;
}