function addcustomer() {
			
	var firstName = document.forms.userDetails.firstName.value;
	var lastName = document.forms.userDetails.lastName.value;
	var phoneNumber = document.forms.userDetails.phoneNumber.value;
	var email = document.forms.userDetails.email.value;
	var address = document.forms.userDetails.address.value;


	const detail = JSON.stringify([lastName, phoneNumber,  email, address]);
	localStorage.setItem(firstName, detail);
	doShowAll();
}

function EditUser() {
	var firstName = document.forms.userDetails.firstName.value;
    let data = JSON.parse(localStorage.getItem(firstName));
    document.forms.userDetails.lastName.value = data[0];
    document.forms.userDetails.phonenumber.value = data[1];
    document.forms.userDetails.email.value = data[2];
	document.forms.userDetails.address.value = data[3];
}

function DeleteUser() {
	var firstName = document.forms.userDetails.firstName.value;
	localStorage.removeItem(firstName);
	doShowAll();
	document.forms.userDetails.firstName.value = null;
	document.forms.userDetails.lastName.value = null;
	document.forms.userDetails.phonenumber.value = null;
    document.forms.userDetails.email.value = null;
	document.forms.userDetails.address.value = null;
}

function ClearAll() {
	localStorage.clear();
	doShowAll();
	document.forms.userDetails.firstName.value = null;
	document.forms.userDetails.lastName.value = null;
	document.forms.userDetails.phoneNumber.value = null;
    document.forms.userDetails.email.value = null;
	document.forms.userDetails.address.value = null;
}

// dynamically draw the table

function doShowAll() {

		var key = "";
		var list = "<tr><th>firstName</th><th>lastName</th><th>Phone Number</th><th>Email</th><th>Address</th>\n";
		var i = 0;

        if (localStorage.length == 0) {
            list += "<tr><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></</tr>\n";
          } else {
            for (i = 0; i < localStorage.length; i++) {
        
              key = localStorage.key(i);
              let data = JSON.parse(localStorage.getItem(key));
        
              list += "<tr><td>" + key + "</td>\n<td>" +
                data[0] + "</td>\n<td>" + data[1] + "</td>\n<td>" + data[2] + "</td>\n<td>" + data[3] + "</td></tr>\n";
        //			list += "<tr><td>" + key + "</td>\n<td>" +
        //			data[0] + "</td>\n<td>" + data[1] + "</td>\n<td>" + data[2] + "</td></tr>\n";
            }
        }
        document.getElementById('list').innerHTML = list;
        
        }
