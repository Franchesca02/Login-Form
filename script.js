const expextedUsername = "ify20";
const expextedPassword = "123456";
function getInfo() {
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value

        if(username === expextedUsername && password == expextedPassword) {
            alert("User Login Succesfully")
            console.log(username + "is correct!!!")
            
            // end the function if this comes out true
            return
        }
    // }
    console.log("incorrect username or password")
    alert("incorrect username or password")
    const button = document.querySelector('button')
    button.disabled = true;
   
    

}
