document.getElementById("contact-form").onsubmit = () => {
  let mainForm = document.getElementById("contact-form");

  event.preventDefault();

  if (mainForm.elements.name.value === "") {
    alert("Please enter your name");
    return;
  }

  if (mainForm.elements.email.value === "") {
    alert("Please enter your email");
    return;
  }

  if (mainForm.elements.message.value === "") {
    alert("Please enter a message");
    return;
  }

  alert("Message sent!");

  console.group();

  console.log("Name: " + mainForm.elements.name.value);
  console.log("Email: " + mainForm.elements.email.value);
  console.log("Message: " + mainForm.elements.message.value);

  console.groupEnd();

  //Meant to mimic clear on submit.  Done ONLY because event.preventDefault() also prevents page reload!
  mainForm.elements.name.value = "";
  mainForm.elements.email.value = "";
  mainForm.elements.message.value = "";
};
