function validate(e){
    e.preventDefault();
    /*variables for each form elements */
      //document.formName.fieldName.value
  var name = document.cForm.name.value;
  var email = document.cForm.email.value;
  var mobile = document.cForm.mobile.value;
  var city = document.cForm.city.value;
  var gender = document.cForm.gender.value;
  var lang =[];
  var checkOpt = document.getElementsByName("lang[]");
  for(var i=0; i<checkOpt.length; i++){
    if(checkOpt[i].checked){
        //populate the lang array with selected input values
        lang.push(checkOpt[i].value);
    }
  }

  console.log("lang=",lang);

  /*defining an error variables*/
  var nameErr = emailErr = mobileErr = genderErr = langErr = true;
  //var nameErr= true;
  //var mobileErr= true;
  //var genderErr= true;


  /*name validation error*/
    if(name === ""){
        printError("nameErr","name Field cannot be empty");
    } else{
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name)===  false){
            printError("nameErr","Please enter a valid name");
    } else{
        printError("nameErr","");
        nameErr =false;
    }
  }
  /*email Validations*/
   if(email ===""){
    printError("emailErr","Please enter a valid email");
   } else{
    let regex =/^\s+@\s+\.\s+$/;
     if(regex.test(email)=== false){
        printError("emailErr","Invalid email");
     } else{
        printError("emailErr","");
     }
   }

   /*mobile Validations*/
   if(mobile ===""){
    printError("mobileErr","Please enter a valid mobile");
   } else{
    let regex =/^[6-9]\d{9}$/;
    if(regex.test(mobile)=== false){
        printError("mobileErr","Invalid mobile number");
   } else{
     printError("mobileErr","");
     mobileErr=false;
   }
}

/*city validation*/
if(city === null){
    printError("cityErr","Please select a city name");
}else{
    printError("cityErr","");
    cityErr =false;
}

/*gender validation*/
if(gender === null){
    printError("genderErr","Please select a gender");
} else{
    printError("genderErr","");
    genderErr =false;
}
  /*lang validation*/
  if(lang.length===0){
    printError("langErr","Please select a language");
  } else{
    printError("langErr","");
    genderErr =false;
  }

  if((nameErr && emailErr && mobileErr && genderErr && cityErr && langErr) ===false){
    let data = {
        name: name,
        email: email,
        mobile: mobile,
        gender: gender,
        city: city,
        language: lang
    };
    //console.log(data);
  }

}



/*defining a function to display the error message*/
function printError(eleId, msg){
    document.getElementById(eleId).innerHTML = msg;
}