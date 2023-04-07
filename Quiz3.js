const express = require('express')
const app = express()
const port = 3000

let dbUsers = [
    {
        username: "Wee",
        password: "0000",
        name : "wee",
        email : "ok@gmail.com"
    },

    {
        username: "A",
        password: "B",
        name : "C",
        email : "D@gmail.com"
    }
]

function login(username, password) {
    console.log("someone try to login with", username, password)
    let matched = dbUsers.find(element => 
        element.username == username
    )
    if (matched) {
        if (matched.password == password) {
            return matched
        } else {
            return "Password not matched"
        } 
    } else {
        return "User not found"
    }
}

function register(newusername, newpassword, newname, newemail) {
    //TODO: Check if username exist

    let regmatch = dbUsers.find(element =>
        element.username == newusername
        )
        if (regmatch) {
            return "Username is used"
        } else {

        dbUsers.push({
            username: newusername,
            password: newpassword,
            name: newname,
            email: newemail,
        })
        return "Registration success"
    }
}

app.use(express.json())

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.post('/',(req,res) => {
    let data = req.body
    res.send(
        login(
            data.username,
            data.password
        )
    );
});

app.get('/bye',(req,res) => {
    res.send('Bye Worl')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.post('/login', (req, res) => {
    //get the username and password from the request body
    const { username, password } = req.body;

    //if user is found, return the user object
    if (user) {
        res.send(user);
    } else {
        //if user is nto found, return an error message
        res.send({ error: "User not found " });
    }
});

app.post('/register', (req, res) => {
    let data = req.body
    res.send(
        register(
        data.newusername,
        data.newpassword,
        data.newname,
        data.newemail
        )

    );
});