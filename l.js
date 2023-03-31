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
console.log(login("ry", "123"))