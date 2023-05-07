
    let requestBtn = document.getElementById("requestbtn")
    let oops = document.querySelector(".oops")
    
    requestBtn.addEventListener("click", () => {
        let emailInput = document.getElementById("email").value
        emailInput == "" ?  oops.classList.remove("hidden") : null
     })

