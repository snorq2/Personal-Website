document.getElementById("contact-form").onsubmit = () => {
  // event.preventdefault();
  let mainForm = document.getElementById("contact-form");

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

  console.log("Name: " + mainForm.elements.name.value);
  console.log("Email: " + mainForm.elements.email.value);
  console.log("Message: " + mainForm.elements.message.value);
};
