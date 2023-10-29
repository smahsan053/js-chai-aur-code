const accountId =144553
let accountEmail = "smahsan053@gmail.com"
var accoutPassword ="12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed
accountEmail = "syedmahsan053@gmail.com"
accoutPassword = "21212121"
accountCity = "Karachi"

console.log(accountId)
console.table([accountId, accountEmail, accoutPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope & functional scope
*/