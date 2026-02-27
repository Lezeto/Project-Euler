function multiplesOf3Or5(number) {
let suma=0;
for (let i=3; i<number; i++){
  if (i%3==0 && i%5==0){
    suma+=i;
  } else if (i%3==0){
    suma+=i;
  } else if (i%5==0){
    suma+=i;
  }
}
return suma
}

multiplesOf3Or5(1000);