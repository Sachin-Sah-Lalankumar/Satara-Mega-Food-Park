document.addEventListener("DOMContentLoaded", () => {
  const teamMembers = document.querySelectorAll(".team-member");
  teamMembers.forEach((member) => {
    member.addEventListener("mouseover", () => {
      member.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";
    });
    member.addEventListener("mouseout", () => {
      member.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
    });
  });
});
