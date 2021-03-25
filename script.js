// loop through Array of objects

var objPeople = [
    { // object @ 0 index
        username: "uche",
        password: "chezzy"
    },
    { // object @ 1 index
        username: "uriel",
        password: "uriely"
    },
    { // object @ 2 index
        username: "jude",
        password: "judge"
    }

]

function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

    for(var i = 0; i < objPeople.length; i++) {

        // check if user input matches username and password of the current index on the objpeople Array
        if(username == objPeople[i].username && password == objPeople[i].password) {
            
            console.log(username + "is correct!!!")
            
            // end the function if this comes out true
            return
        }
    }
    console.log("incorrect username or password")
}
