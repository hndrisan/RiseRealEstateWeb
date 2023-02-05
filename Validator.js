//validator Register form //
function addcustomer() {
    var firstName = document.getElementById("firstName").value;
        if (!firstName) {
            alert('Please enter your First Name!')
            return false;
        }
        var lastName = document.getElementById("lastName").value;
        if (!lastName) {
            alert('Please enter your Last Name!')
            return false;
        }

        var phoneNumber = document.getElementById("phoneNumber").value;
        if (!phoneNumber) {
            alert('Please Enter your Phone Number')
            return false;
        }

        var phoneNumberFilter = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        if(!phoneNumberFilter.test(phoneNumber)) {
        alert('please enter a valid phone Number!');
        return false;
        }

        var email = document.getElementById("email").value;
        if (!email) {
            alert('Please enter email!')
            return false;
        }

        var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailfilter.test(email)) {
            alert('Please enter a valid email address!');
            return false;
        }

      //  var password = document.getElementById("password").value;
       // if (!password) {
       //     alert('Please enter your password!')
       //     return false;
       // }//

        var address = document.getElementById("address").value;
        if (!address) {
            alert('Please enter your city!')
            return false;
        }

     //   bindjsondata();
        const detail = JSON.stringify([lastName, phoneNumber,  email, address]);
        localStorage.setItem(firstName, detail);
        doShowAll();  
}

//validator Sell Form//

function sellForm() {
    var firstName = document.getElementById("firstName").value;
        if (!firstName) {
            alert('Please enter your First Name!')
            return false;
        }
        var lastName = document.getElementById("lastName").value;
        if (!lastName) {
            alert('Please enter your Last Name!')
            return false;
        }
      
        var phoneNumber = document.getElementById("phoneNumber").value;
        if (!phoneNumber) {
            alert('Please Enter your Phone Number')
            return false;
        }

        var phoneNumberFilter = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        if(!phoneNumberFilter.test(phoneNumber)) {
        alert('please enter a valid phone Number!');
        return false;
        }

        var email = document.getElementById("email").value;
        if (!email) {
            alert('Please enter email!')
            return false;
        }
        var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailfilter.test(email)) {
            alert('Please enter a valid email address!');
            return false;
        }        
        
}

//Validator Appointment Form//

function Appointment() {
    var firstName = document.getElementById("firstName").value;
        if (!firstName) {
            alert('Please enter your First Name!')
            return false;
        }
        var lastName = document.getElementById("lastName").value;
        if (!lastName) {
            alert('Please enter your Last Name!')
            return false;
        }
        
        var phoneNumber = document.getElementById("phoneNumber").value;
        if (!phoneNumber) {
            alert('Please Enter your Phone Number')
            return false;
        }

        var phoneNumberFilter = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
        if(!phoneNumberFilter.test(phoneNumber)) {
        alert('please enter a valid phone Number!');
        return false;
        }

        var email = document.getElementById("email").value;
        if (!email) {
            alert('Please enter email!')
            return false;
        }

        var emailfilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailfilter.test(email)) {
            alert('Please enter a valid email address!');
            return false;
        }    

        var dateAppointment = document.getElementById("dateAppointment").value;
        if (!dateAppointment) {
            alert('Please Pick your date!')
            return false;
        }
        
}

