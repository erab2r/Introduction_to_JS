// Display sum of all the odd numbers from 81 to 131.
let num = 81;
let sum =0;
while(num<=131){
    if(num%2 !==0){
        sum+=num;
    }
    num++;
}
 console.log(sum);