// Enable scroll after landing animation finishes
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.querySelector(".snap-container").classList.remove("no-scroll");
  }, 2800); // Adjust this timing to match your last animation
});
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
