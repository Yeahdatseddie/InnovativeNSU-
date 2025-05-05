# Innovative NSU

document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");
  const eventCards = document.querySelectorAll(".event-card");

  searchBar.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    eventCards.forEach(card => {
      const title = card.querySelector("h4").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });

  // Optional: Add confirmation dialog on all register buttons
  const registerButtons = document.querySelectorAll("button");
  registerButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("✅ You have successfully registered for the event!");
    });
  });
});
