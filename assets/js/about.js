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
            title: "BootcampLesson2",
            description: "Adding CSS style to the website.",
            aboutme: "About Me",
            summary: "Ambitious and self-driven IT enthusiast with a strong passion for technology. Currently focused on IT support, seeking a responsible and rewarding career position that fully utilizes my academic background, professional skills, and goals",
            about: "about",
            picture: "assets/img/about/about1.png",

            professionalprofile: "Professional Profile",
            technicalskills: "Technical Skills",
            skills1: " Proficient in troubleshooting and resolving software issues.",
            skills2: " Knowledgeable in hardware maintenance and system upgrades.",
            skills3: " Familiar with web design principles and front-end technologies.",
            skills4: " Effective team player with excellent communication skills.",
            skills5: " Analytical thinker who enjoys solving complex technical challenges.",
            skills6: " Committed to staying updated with industry trends and advancements.",
            
            // Experience
            professionalexperience: "Professional Experience",
            it: "IT HelpDesk Specialist",
            experience1: "SA Renault Hand office (Motus Vehicles Distributor)/ Jun 2022- August 2023, 12 Ernest Oppenheimer Ave, Bruma, Johannesburg, 2198",
            experience2: "Provided technical assistance to end-users, resolving hardware and software issues promptly.",
            experience3: "Assisted in system upgrades and ensured smooth operations.",
            experience4: "Collaborated with cross-functional teams to enhance IT infrastructure.",
            experience5: "Conducted user training sessions on software applications.",

            // Education
            educational: "Educational History",
            certificate: "Certificate",
            yes: "YES4Youth Work Readiness Training/ 2023 (Yes Employment Service)",
            training: "Yes Intern (IT Service Desk) at YES4Youth",

            alison1: "Alison/ 2022 (Empower Yourself)",
            alison2: "Alison/ 2021 (Empower Yourself)",
            course1: "Office 365 Web Apps Troubleshooting",
            course2: "CompTIA A+ 1000 -Part2",
            course3: "CompTIA A+ 1000 -Part1 ",
            course4: "Information Technology and Computer Science Level 2 and Level 3",
            diploma: "Diploma",
            higher: "Higher National Certificate",
            ewc: "Ekurhuleni West College/ 2017- 2018 (For further education and training)",
        },
  ];

  


 // Event listener for About Me
  const projectsContainer = document.getElementById('about-me')
  

  projects.forEach((project) => {
      const projectDetailsContainer = document.createElement('div')
      projectDetailsContainer.classList.add('about-me')
      projectDetailsContainer.innerHTML = `
            <div class="about-me">
              <h1 style="color: #000066;">${project.aboutme}</h1>
              <h3 style="color: #000066; text-align: center;">Summary</h3>
                  <p style="text-align: center;">${project.summary}</p><br></div>

                  <section id="about" class="about" >
                  <img src="${project.picture}" style="width:30%;">

                    <div class="about-text">
                    <h3 style="color: #000066;"><u>${project.professionalprofile}</u></h3>
                    <h4>${project.technicalskills}</h4>
                    <p><b>Software:</b>${project.skills1}<br>
                    <b>Hardware:</b>${project.skills2}<br>
                    <b>Web Development:</b>${project.skills3}<br>
                    <b>Collaboration:</b>${project.skills4}<br>
                    <b>Problem-Solving:</b>${project.skills5}<br>
                    <b>Continuous Learning:</b>${project.skills6}</p>

                    <div class="line"></div>
                    <h3 style="color: #000066;"><u>${project.professionalexperience}</u></h3>
                    <h4>${project.it}</h4>
                    <p><b>${project.experience1}</b><br>${project.experience2}<br>${project.experience3}<br>${project.experience4}<br>${project.experience5}</p>  
                    <div class="line"></div>
                    </section>

                    <h3 style="color: #000066;"><u>${project.educational}</u></h3>
                    <h4>${project.certificate}</h4>
                    <p><b>${project.yes}</b><br>
                    <b>Training Course: </b>${project.training}</p>

                    <h4>${project.certificate}</h4>
                    <p><b>${project.alison1}</b></br>
                    <b>Course:</b> ${project.course1}</p>

                    <h4>${project.diploma}</h4>
                    <p><b>${project.alison1}</b></br>
                    <b>Course:</b> ${project.course2}</p>


                    <h4>${project.diploma}</h4>
                    <p><b>${project.alison2}</b></br>
                    <b>Course:</b> ${project.course3}</p>


                    <h4>${project.higher}</h4>
                    <p><b>${project.ewc}</b></br>
                    <b>Course:</b> ${project.course4}</p>
            `
      projectsContainer.appendChild(projectDetailsContainer)
  })

  


}
