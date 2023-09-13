function hashEmail(e) {
    e.preventDefault();

    //Naming variables
    let fName = document.querySelector("#fName").value;
    let email = document.querySelector("#email").value;
    let output = document.querySelector("#profile");

    //regexp to hash the email
    let pattern = email.replace(/(.*)@/, "**********");
    output.innerHTML =
             `<b>Welcome  <br>
            Full Name: <span> ${fName} </span> <br>
            E-mail:  <span>${pattern} </span>`

    //Setting Visibility of the form to Hidden
    document.querySelector("#email").style.display = "none"
    document.querySelector("#fName").style.display = "none"
    document.querySelector(".form-button").style.display = "none"
}