       // Function to check Whether both passwords 
       // is same or not. 
       function checkPassword(form) {
           password = form.password.value;
           repeat_password = form.repeat_password.value;

           // If password not entered 
           if (password == '')
               alert("Please enter Password");

           // If confirm password not entered 
           else if (repeat_password == '')
               alert("Please enter repeat password");

           // If Not same return False.     
           else if (password != repeat_password) {
               alert("\nPassword did not match: Please try again...")
               return false;
           }

           // If same return True. 
           else {
               alert("Password Match: Welcome to AquaMed!")
               return true;
           }
       }