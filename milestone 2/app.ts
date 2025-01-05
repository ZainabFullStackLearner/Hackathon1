// app.ts
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const output = document.getElementById("resume-output") as HTMLDivElement;
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Gather input values
      const name = (document.getElementById("name") as HTMLInputElement).value;
      const email = (document.getElementById("email") as HTMLInputElement).value;
      const education = (document.getElementById("education") as HTMLTextAreaElement).value;
      const work = (document.getElementById("work") as HTMLTextAreaElement).value;
      const skills = (document.getElementById("skills") as HTMLTextAreaElement).value.split(",");
  
      // Generate the resume HTML
      output.innerHTML = `
        <h1>${name}</h1>
        <p>${email}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Work Experience</h2>
        <p>${work}</p>
        <h2>Skills</h2>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
      `;
  
      // Show the resume
      output.classList.remove("hidden");
      form.classList.add("hidden");
    });
  });
  