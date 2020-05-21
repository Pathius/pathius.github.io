// Function created to render projects in projects section, it takes array of objects
// from projects.js file and creates DOM elements using its data

import projectsData from '../data/projects';

export default function () {
  for (const projectData of projectsData) {
    // Assign variables
    const projectsSection = document.querySelector('.projects__listing');
    const project = document.createElement('section');
    const description = document.createElement('p');
    const name = document.createElement('div');

    // Assign class names
    project.classList.add('project', 'animation');
    project.id = projectData.id;
    description.className = 'project__description';

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
