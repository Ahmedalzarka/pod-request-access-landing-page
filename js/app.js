    let requestBtn = document.getElementById("requestbtn")
    let oops = document.querySelector(".oops")
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    requestBtn.addEventListener("click", e => {
        e.preventDefault()
        let emailInput = document.getElementById("email").value
        emailInput === "" ?  oops.innerHTML = "Oops! Please add your email" : !emailRegex.test(emailInput) ? oops.innerHtml = "Oops! Please check your email" : null
     })

