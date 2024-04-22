/*!
 Author: Tumelo Madume
Design by Tumelo Madume
 */

window.addEventListener(('load'), () => {
    loadProjects()
})

function loadProjects() {
  // Projects
  const projects = [
        {
            // Personal information
            ProjectName: "Tumelo Madume",
            bio1: "Based in Gauteng-",
            bio2: "I am a young ambitious self-driven technical young man with a lot of passion in IT proudly investing my skills in the sector,",
            bio3: "My current focus is within the IT support space to obtain Responsible and rewarding career position that will fully incorporate my academic and professional skills, knowledge, talents and goals.",
            learnMoreButton: "LEARN MORE",
            title: "BootcampLesson1",
            description: "Creating portfolio website using HTML.",
        },  
  ];

  // Event listener for "LEARN MORE" button
  const learnMoreButton = document.getElementById("learn-more-button");
  learnMoreButton.addEventListener("click", () => {
      window.location.href = "about.html"; // Redirect to the "about.html" page
  });


// Event listener for profile
  const projectsContainer = document.getElementById('profile')
    

  projects.forEach((project) => {
      const projectDetailsContainer = document.createElement('div')
      projectDetailsContainer.classList.add('profile')
      projectDetailsContainer.innerHTML = `
              <h1  style="color: #000066;">${project.ProjectName}</h1>
              <p><strong style="color: #000066;">${project.bio1}</strong>${project.bio2}</p>
              <p>${project.bio3}</p>
              <button  onclick="location.href='about.html';"><b>${project.learnMoreButton}</b></button>
      `
      projectsContainer.appendChild(projectDetailsContainer)
  })



}
