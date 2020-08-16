function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var services = document.getElementById("services").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    



    var text;
    if(name.length < 2 || name.length == ""){
      text = "Please enter your name";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length < 10){
      text = "Please enter valid phone number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please enter a valid email";
      error_message.innerHTML = text;
      return false;
    }

    if(services == -1){
        text ="Please choose your required service"
        error_message.innerHTML = text;
      return false
      }
    if(message.length == " "){
      text = "Please enter a message to provide futher details about your required service";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }