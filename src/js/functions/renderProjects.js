import projectsData from '../data/projects';

export default function () {
  // Assign variables
  const projectsSection = document.querySelector('.projects__listing');
  const project = document.createElement('section');
  const logo = document.createElement('img');
  const description = document.createElement('p');
  const name = document.createElement('div');

  // Assign class names
  project.className = 'project';
  logo.className = 'project__logo';
  description.className = 'project__description';

  for (const projectData of projectsData) {
    // Assign data to variables
    logo.setAttribute('src', projectData.logo);
    description.textContent = projectData.description;
    name.innerHTML = projectData.name;

    // Render the HTML elements
    projectsSection.appendChild(project);
    project.appendChild(logo);
    project.appendChild(name);
    project.appendChild(description);

    for (let link of projectData.links) {
      const anchor = document.createElement('a');
      anchor.className = 'project__anchor';
      anchor.setAttribute('href', link.link);
      anchor.setAttribute('target', '_blank');
      anchor.textContent = link.buttonText;

      project.appendChild(anchor);
    }
  }
}
