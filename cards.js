
let count = 0;
function cc(card){
  if([2,3,4,5,6].includes(card)){
    count ++
     return `${count} Bet`

  }
  else if ([7,8,9].includes(card)){
    if(count <= 0){
    return `${count} Hold`
  }
    else {
    return `${count} Bet`
  }
  }
  else if ([10,"J","Q","K","A"].includes(card)){
   count --

    if(count <= 0){
    return `${count} Hold`
  }
    else {
    return `${count} Bet`
  }

  }
}
console.log(cc(2))
console.log(cc(2))
console.log(cc(10))