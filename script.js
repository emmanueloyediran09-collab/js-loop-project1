//  for (starting value ; Condition, steps/interation/increment || decrement)
// for(let i =0; i<=10; i++){
//   console.log(i);
  
// }
let show = document.getElementById('display')
for (let i =1 ; i<=100 ; i++){
    
  if(i%2 == 0   ){
          show.innerHTML += `<p style="color:green;"> ${i} this is an even number</p>`
  }
  else{
    show.innerHTML += `<p style="color:red;">${i} this is an odd number</p>`
  }
  
}