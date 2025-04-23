fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("about").textContent = data.about;

    const certificationsList = document.getElementById("certifications");
    data.certifications.forEach(cert => {
      const li = document.createElement("li");
      li.textContent = cert;
      certificationsList.appendChild(li);
    });

    const experienceSection = document.getElementById("experience");
    data.experience.forEach(job => {
      const div = document.createElement("div");
      div.className = "mt-4";
      div.innerHTML = `
        <h3 class="text-xl font-semibold">${job.title} - ${job.company}</h3>
        <p class="text-sm text-gray-300">${job.date}</p>
        <ul class="list-disc pl-5 space-y-2">
          ${job.responsibilities.map(res => `<li>${res}</li>`).join('')}
        </ul>
      `;
      experienceSection.appendChild(div);
    });

    const projectsList = document.getElementById("projects");
    data.projects.forEach(project => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${project.title}:</strong> ${project.description}`;
      projectsList.appendChild(li);
    });

    const skillsList = document.getElementById("skills");
    data.skills.forEach(skill => {
      const li = document.createElement("li");
      li.className = "bg-blue-100 text-blue-700 px-4 py-2 rounded-lg";
      li.textContent = skill;
      skillsList.appendChild(li);
    });

    const achievementsList = document.getElementById("achievements");
    data.achievements.forEach(achievement => {
      const li = document.createElement("li");
      li.textContent = achievement;
      achievementsList.appendChild(li);
    });

    document.getElementById("hobbies").textContent = data.hobbies;
  });
