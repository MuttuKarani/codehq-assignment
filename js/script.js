document.addEventListener("DOMContentLoaded", function () {
  // Optional: Rotate ingredients slowly for effect
  setInterval(() => {
    document.querySelectorAll(".ingredient").forEach((el) => {
      let current = parseFloat(el.style.getPropertyValue("--angle")) || 0;
      el.style.setProperty("--angle", `${current + 0.3}deg`);
    });
  }, 50);

  // Subscription type radios
  const singleRadio = document.getElementById("single");
  const doubleRadio = document.getElementById("double");
  const tryRadio = document.getElementById("try");

  const singleContent = document.getElementById("single-content");
  const doubleContent = document.getElementById("double-content");
  const tryContent = document.getElementById("try-content");

  const trySingle = document.getElementById("try-single");
  const tryDouble = document.getElementById("try-double");

  // Show/hide based on subscription type
  function toggleSubscription() {
    singleContent.classList.add("hidden");
    doubleContent.classList.add("hidden");
    tryContent.classList.add("hidden");

    if (singleRadio.checked) {
      singleContent.classList.remove("hidden");
    } else if (doubleRadio.checked) {
      doubleContent.classList.remove("hidden");
    } else if (tryRadio.checked) {
      tryContent.classList.remove("hidden");
    }
  }

  // Show/hide based on try-type (single/double)
  function toggleTryType(e) {
    const type = e.target.value;
    if (type === "single") {
      trySingle.classList.remove("hidden");
      tryDouble.classList.add("hidden");
    } else {
      trySingle.classList.add("hidden");
      tryDouble.classList.remove("hidden");
    }
  }

  // Attach listeners
  document
    .querySelectorAll("input[name='subscription']")
    .forEach((el) => el.addEventListener("change", toggleSubscription));

  document
    .querySelectorAll("input[name='try-type']")
    .forEach((el) => el.addEventListener("change", toggleTryType));

  // Initialize on page load
  toggleSubscription();
});

const carousel = document.getElementById("carousel");
document.querySelector(".prev").onclick = () =>
  carousel.scrollBy({ left: -320, behavior: "smooth" });
document.querySelector(".next").onclick = () =>
  carousel.scrollBy({ left: 320, behavior: "smooth" });

// ===== Accordion logic =====
const planRadios = document.querySelectorAll('input[name="plan-select"]');
const plans = document.querySelectorAll(".plan");

planRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    plans.forEach((plan) => plan.classList.remove("active"));
    radio.closest(".plan").classList.add("active");
  });
});

// Open the default‑checked plan on first load
const defaultChecked = document.querySelector(
  'input[name="plan-select"]:checked'
);
if (defaultChecked) defaultChecked.closest(".plan").classList.add("active");
