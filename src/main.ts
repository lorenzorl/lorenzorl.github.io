import './scss/main.scss'
import './fontawesome'
import Modal from './modal'
import projects from './data/projects.json'
import skills from './data/skills.json'
import {
  getProjectElement,
  getSkillElement,
  getImagesOfProjects
} from './helpers'

import circlesBackground from './circlesBackground'

import { Project, Skill, Images } from './types'

// Circles Background
circlesBackground();

// MODAL
const modalElement = document.querySelector<HTMLDivElement>('.modal');
const maskElement = document.querySelector<HTMLDivElement>('.mask');
const aboutSection = document.querySelector<HTMLDivElement>('#about');
const buttonHomeElement = document.querySelector<HTMLButtonElement>('.home__button');
let modal : Modal;
if(modalElement != undefined && maskElement != undefined){
  modal = new Modal(modalElement, maskElement);
}

buttonHomeElement?.addEventListener('click', () => {
  const aboutSectionClientRect = aboutSection?.getBoundingClientRect();
  if (aboutSectionClientRect == undefined) return;
  window.scrollTo({
    top: aboutSectionClientRect.y + scrollY,
    behavior: 'smooth'
  });
})

maskElement?.addEventListener('click', () => {
  if (modal._isVisible) {
    modal.closeModal();
  }
});

skills.forEach(skill => addSkill(skill));

getImagesOfProjects().then((images) => {
  const imagesOfProjects = images;
  projects.forEach(project => addProject(project, imagesOfProjects));

});

function addProject(project: Project, images: Images) : void{
  const projectsContainerElement = document.querySelector<HTMLDivElement>('.projects')?.lastElementChild;
  const projectElement = getProjectElement(project, images, modal);
  projectsContainerElement?.appendChild(projectElement);
}

function addSkill(skill : Skill) {
  const skillsContainerElement = document.querySelector<HTMLUListElement>('.skills__list');
  const skillElement = getSkillElement(skill);
  skillsContainerElement?.appendChild(skillElement);
}




