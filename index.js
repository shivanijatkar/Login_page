function Toggle() {
    let pass = document.getElementById("pass");
     
    if (pass.type === "password") {
        pass.type = "text";
    }else{
        pass.type ="text";
    }
}

function openPopup(){
    if(pass.value.length > 0 && uname.value.length > 0){
        popup.classList.add("open-popup");
    }else{
        alert("Please fill the details completely.")
    }
}

function closePopup(){
    // popup.classList.remove("open-popup");
    alert("Close the window")
}