


// var messageRef = firebase.database().ref('messages')



// function submitform(e){
//   e.preventDefault(e)



// var name = getInputVal('name');
// var contact = getInputVal('contact');
// var message = getInputVal('message');

// saveMessage(name, contact, message);

// }

//   function getInputVal(id){
//     return document.getElementById(id).value
//   }


//   function saveMessage(name, contact, message){
//     var newMessageRef = messageRef.push();
//     newMessageRef.set({
//       name: name,
//       contact: contact,
//       message: message
//     })
//   }




function submit(){
  var name = document.getElementById("name")
  var contact = document.getElementById("contact")
  var message = document.getElementById("message")

  var customer = {
    name: name.value,
    contact: contact.value,
    message: message.value
  }

  firebase.database().ref("customer").push(customer)
  alert("Thank you " + name.value + ". We will contact you as soon as possible")

}
