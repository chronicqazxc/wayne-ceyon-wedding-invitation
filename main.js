document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  if (name && email) {
    document.getElementById(
      "rsvp-message"
    ).textContent = `Thank you, ${name}! Your RSVP has been received.`;
    e.target.reset();
  } else {
    document.getElementById("rsvp-message").textContent =
      "Please fill in all fields.";
  }
});
