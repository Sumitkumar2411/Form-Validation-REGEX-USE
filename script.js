const userName = document.getElementById("username");
const myContact = document.getElementById("contact");
const myMail = document.getElementById("mail");
const form = document.getElementById("registration-form");
const error = document.getElementById("error");
const passwordInput = document.getElementById("password");
const msg = document.getElementById("msg");

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

passwordInput.addEventListener("input", () => {
  const password = passwordInput.value.trim();

  if (passwordRegex.test(password)) {
    msg.textContent = "Strong password!";
    msg.style.color = "green";
  } else {
    msg.textContent =
      "Weak password! Use uppercase, lowercase, digit, special char & 8+ chars.";
    msg.style.color = "red";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const usernameValue = userName.value.trim();
  const contactValue = myContact.value.trim();
  const mailValue = myMail.value.trim();
  const passwordValue = passwordInput.value.trim();

  let messages = [];

  if (!/^[A-Za-z\s]+$/.test(usernameValue)) {
    messages.push("Name must contain only letters and spaces.");
  }

  if (!/^\d{10}$/.test(contactValue)) {
    messages.push("Contact must be a 10-digit number with no spaces.");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailPattern.test(mailValue)) {
    messages.push("Please enter a valid email address.");
  }

  if (!passwordRegex.test(passwordValue)) {
    messages.push("Please enter a strong password.");
  }

  if (messages.length > 0) {
    error.innerText = messages.join(" ");
    error.style.color = "red";
  } else {
    error.innerText = "";
    alert("Form submitted successfully!");
    form.reset();
    msg.textContent = "";
  }
});
