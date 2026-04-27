// ================= MOBILE MENU =================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// Close menu when clicking a link (mobile)
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});


// ================= BOOKING BUTTON =================
const squareButton = document.getElementById("squareTopButton");

const hasSquareUrl =
  typeof BOOKING_CONFIG !== "undefined" &&
  BOOKING_CONFIG.squareBookingUrl &&
  BOOKING_CONFIG.squareBookingUrl !== "PASTE_YOUR_SQUARE_BOOKING_LINK_HERE";

if (squareButton) {
  if (hasSquareUrl) {
    squareButton.href = BOOKING_CONFIG.squareBookingUrl;
    squareButton.target = "_blank";
  } else {
    squareButton.href = "#booking-form";

    squareButton.addEventListener("click", () => {
      alert("⚠️ Add your Square booking link in config.js first.");
    });
  }
}


// ================= FOOTER INFO =================
if (typeof BOOKING_CONFIG !== "undefined") {
  const phone = document.getElementById("footerPhone");
  const email = document.getElementById("footerEmail");

  if (phone) phone.textContent = BOOKING_CONFIG.phone;
  if (email) email.textContent = BOOKING_CONFIG.email;
}


// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
