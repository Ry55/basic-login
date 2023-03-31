let dbUsers = [
    {
        username: "ry",
        password: "123",
        name: "Lim Ru Ying",
        email: "123@gmail.com"
    },
    {
        username: "fatin",
        password: "456",
        name: "Fatin",
        email: "456@gmail.com"
    },
    {
        username: "ina",
        password: "789",
        name: "Adlina",
        email: "789@gmail.com"
    },
    {
        username: "mai",
        password: "012",
        name: "Maisarah",
        email: "012@gmail.com"
    }
]

function login (username, password){
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find(element => 
        //console.log(element) //print out every element in the array dbUsers
        element.username == username
    )
    if (matched){
        if (matched.password == password){
            return matched
        }
        else{
            return "Password not matched"
        }
    }
    else{
        return "Username not found"
    }
}


//call the login function
//console.log(login("utem", "234"))

function register (newusername, newpassword, newname, newemail){
    let matched = dbUsers.find(element => 
        element.username == newusername
    )
    if (matched){
        return "Username already exist"
    }
    else{
        dbUsers.push({
            username: newusername,
            password: newpassword,
            name: newname,
            email: newemail
        }) //push new element to the array
    }
}

//register
console.log(register("ry", "234", "UTEM", "234@gmail.com")) //username already exist
register("utem", "234", "UTEM", "234@gmail.com")
console.log(dbUsers)
//console.log(login("utem", "234"))
