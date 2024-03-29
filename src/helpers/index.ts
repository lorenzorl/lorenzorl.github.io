import { Images, Project, Skill } from '../types'
import Modal from '../modal'

const getImagesOfProjects = async (): Promise<Images> => {
  const modules = import.meta.glob('../assets/projects/*/*');
  const images: Images = {};
  for (const path in modules) {
    const la : any = await modules[path]();

    const p = la.default;
    const id = path.split('/')[path.split('/').length - 2];
    
    if(!images[id]) images[id] = [];
  
    images[id].push(p);
  }

  return images;
}

const getProjectElement = (project: Project, images: string[], modal: Modal) => {
  const projectElement = document.createElement('div');
  projectElement.classList.add('project');

  const projectImgElement = document.createElement('img');
  projectImgElement.setAttribute('src', images[0]);
  projectElement.appendChild(projectImgElement);

  const projectInfoElement = document.createElement('div');
  projectInfoElement.classList.add('project__info');
  projectElement.appendChild(projectInfoElement);

  const projectTitleElement = document.createElement('div');
  projectTitleElement.classList.add('project__title');
  projectTitleElement.innerText = project.name;
  projectInfoElement.appendChild(projectTitleElement);

  const projectDescriptionElement = document.createElement('div');
  projectDescriptionElement.classList.add('project__description');
  projectDescriptionElement.innerText = project.description;
  projectInfoElement.appendChild(projectDescriptionElement);

  const projectTagsElement = document.createElement('div');
  projectTagsElement.classList.add('project__tags');
  project.technologies.forEach(tech => {
    const projectTagElement = document.createElement('div');
    projectTagElement.classList.add('project__tag');
    projectTagElement.innerText = tech;
    projectTagsElement.appendChild(projectTagElement);
  });
  projectInfoElement.appendChild(projectTagsElement);

  const projectButtonElement = document.createElement('button');
  projectButtonElement.classList.add('project__button');
  projectButtonElement.innerText = 'Ver más';
  projectButtonElement.addEventListener('click', () => {
    modal.openModal({...project, images});
  });
  projectInfoElement.appendChild(projectButtonElement);

  return projectElement;
}

const getSkillElement = (skill: Skill) => {
  const skillElement = document.createElement('li');
  skillElement.classList.add('skill');

  const skillNameElement = document.createElement('div');
  skillNameElement.classList.add('skill__name');
  skillNameElement.innerText = skill.name;
  skillElement.appendChild(skillNameElement);

  const skillBgElement = document.createElement('div');
  skillBgElement.classList.add('skill__bg');
  skillElement.appendChild(skillBgElement);

  const skillPercentElement = document.createElement('div');
  skillPercentElement.classList.add('skill__percent');
  skillPercentElement.innerText = `${skill.percent}%`;
  skillPercentElement.style.width = `${skill.percent}%`;
  skillBgElement.appendChild(skillPercentElement);

  return skillElement;
}

export { getProjectElement, getSkillElement, getImagesOfProjects };