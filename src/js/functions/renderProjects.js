import projectsData from '../data/projects';

export default function () {
  // Assign variables
  const projectsSection = document.querySelector('.projects__listing');
  const project = document.createElement('section');
  const description = document.createElement('p');
  const name = document.createElement('div');

  // Assign class names
  project.className = 'project';
  description.className = 'project__description';

  for (const projectData of projectsData) {
    // Assign data to variables
    description.innerHTML = projectData.description;
    name.innerHTML = projectData.name;

    // Render the HTML elements
    projectsSection.appendChild(project);
    project.appendChild(name);
    project.appendChild(description);

    for (let link of projectData.links) {
      const anchor = document.createElement('a');
      anchor.className = 'project__anchor';
      anchor.setAttribute('href', link.link);
      anchor.setAttribute('target', '_blank');
      anchor.innerHTML = link.buttonText;

      description.appendChild(anchor);
    }
  }
}
