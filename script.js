const sections = ["home", "about", "skills", "projects", "contact"];

function showSection(sectionID) {
  sections.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = (id === sectionID) ? "block" : "none";
    }
  });
}

const homeBtn = document.getElementById("homeBtn");
const aboutBtn = document.getElementById("aboutBtn");
const skillsBtn = document.getElementById("skillsBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");

homeBtn.onclick = () => showSection("home");
aboutBtn.onclick = () => showSection("about");
skillsBtn.onclick = () => showSection("skills");
