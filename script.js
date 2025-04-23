fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("about").textContent = data.about;
    document.getElementById("email").textContent = data.email;
    document.getElementById("email").href = `mailto:${data.email}`;
    document.getElementById("linkedin").href = data.linkedin;

    const projectsList = document.getElementById("projects");
    data.projects.forEach(project => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${project.title}:</strong> ${project.description}`;
      projectsList.appendChild(li);
    });

    const skillsList = document.getElementById("skills");
    data.skills.forEach(skill => {
      const li = document.createElement("li");
      li.className = "bg-blue-100 text-blue-700 px-3 py-1 rounded";
      li.textContent = skill;
      skillsList.appendChild(li);
    });
  });
