const squareButtons = [
  document.getElementById("squareTopButton"),
  document.getElementById("squareMainButton")
];

const hasSquareUrl =
  typeof BOOKING_CONFIG !== "undefined" &&
  BOOKING_CONFIG.squareBookingUrl &&
  BOOKING_CONFIG.squareBookingUrl !== "PASTE_YOUR_SQUARE_BOOKING_LINK_HERE";

squareButtons.forEach((button) => {
  if (!button) return;

  if (hasSquareUrl) {
    button.href = BOOKING_CONFIG.squareBookingUrl;
  } else {
    button.href = "#request-form";
    button.removeAttribute("target");

    button.addEventListener("click", () => {
      alert("Add your Square booking link in config.js first. This button will scroll to the request form for now.");
    });
  }
});

if (typeof BOOKING_CONFIG !== "undefined") {
  const phone = document.getElementById("footerPhone");
  const email = document.getElementById("footerEmail");

  if (phone) phone.textContent = BOOKING_CONFIG.phone;
  if (email) email.textContent = BOOKING_CONFIG.email;
}
