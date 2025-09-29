function confirmEnding(fullstr, lastpart){
  let len = lastpart.length
  console.log(len)
  if(fullstr.slice(fullstr.length - len) === lastpart){
    return true;
  }
  else {
    return false;
  }
}
console.log(confirmEnding("Congratulation", "on"))