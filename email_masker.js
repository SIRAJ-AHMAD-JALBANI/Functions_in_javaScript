function maskEmail(email) {
  let atIndex = email.indexOf("@");
  let username = email.slice(0, atIndex);
  let domain = email.slice(atIndex);

  if (username.length <= 2) {
    return username + domain; // nothing much to mask
  }

  let masked = username[0] 
             + "*".repeat(username.length - 2) 
             + username[username.length - 1];

  return masked + domain;
}

// outside the function
let email = "apple.pie@example.com";

// log the result
console.log(maskEmail(email));
