function navigateTo(sectionId) {
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("hidden");
    });
    document.getElementById(sectionId).classList.remove("hidden");
  }
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    navigateTo("booking");
  });
  
  document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    navigateTo("login");
  });
  
  document.getElementById("flightForm").addEventListener("submit", function (e) {
    e.preventDefault();
    navigateTo("confirm");
  });
  
  function confirmBooking() {
    navigateTo("end");
  }
  
