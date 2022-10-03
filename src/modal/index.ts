import { Project } from "../types";
import Swiper from 'swiper'

export default class Modal {

  _modalElement: HTMLDivElement;
  _maskElement: HTMLDivElement;
  _isVisible: boolean;

  constructor(modalElement: HTMLDivElement, maskElement: HTMLDivElement) {
    this._modalElement = modalElement;
    this._maskElement = maskElement;
    this._isVisible = false;
    this.addEventListenerToClose();
  }
  addEventListenerToClose(): void {
    const buttonCloseElement = this._modalElement.parentElement?.querySelector('.modal__close');
    buttonCloseElement?.addEventListener('click', () => this.closeModal());
  }

  openModal(data: Project): void {
    const { images, name, description, link } = data;
    const modalElement = this._modalElement;
    const modalTitleElement = modalElement.querySelector<HTMLElement>('.modal__title');
    const modalSwiperElement = modalElement.querySelector<HTMLElement>('.modal__img .swiper-wrapper');
    const modalDescriptionElement = modalElement.querySelector<HTMLElement>('.modal__description');
    const modalTagsElement = modalElement.querySelector<HTMLElement>('.modal__tags');
    const modalLinkElement = modalElement.querySelector<HTMLElement>('.modal__button');

    if (modalTitleElement != undefined) modalTitleElement.innerText = name;
    if (modalDescriptionElement != undefined) modalDescriptionElement.innerText = description;
    if (modalSwiperElement && images) this.addSlides(modalSwiperElement, images);
    if (modalTagsElement) this.createTags(modalTagsElement, data.technologies);
    modalLinkElement?.setAttribute('target', '_blank');
    modalLinkElement?.setAttribute('href', link);

    this.show();
  }
  addSlides(parentElement: HTMLElement, images: string[]): void {
    parentElement.innerHTML = '';
    
    images.forEach(image => {
      const swiperSlideElement = document.createElement('div');
      swiperSlideElement.classList.add('swiper-slide');

      const imageElement = document.createElement('img');
      imageElement.setAttribute('src', image);
      swiperSlideElement.appendChild(imageElement);
      parentElement.appendChild(swiperSlideElement);
    });    

    const swiper = new Swiper('.swiper', {
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      }

    });

    swiper.el.querySelector('.swiper-button-next')?.addEventListener('click', () => {
      if (swiper.slides.length === 1) return;
      swiper.slideNext();
    });
    swiper.el.querySelector('.swiper-button-prev')?.addEventListener('click', () => {
      if (swiper.slides.length === 1) return;
      swiper.slidePrev();
    });

  }
  createTags(tagsElement: HTMLElement, tags: string[]): void {
    tagsElement.innerHTML = '';
    tags.forEach(tag => {
      const modalTagElement = document.createElement('div');
      modalTagElement.classList.add('modal__tag');
      modalTagElement.innerText = tag;
      tagsElement.appendChild(modalTagElement);
    });
  }
  show(): void {
    this._isVisible = true;
    this._maskElement.classList.add('mask--show');
    this._modalElement.parentElement?.classList.add('modal--show');
  }
  hide(): void {
    this._isVisible = false;
    this._maskElement.classList.remove('mask--show');
    this._modalElement.parentElement?.classList.remove('modal--show');
  }
  closeModal(): void {
    this.hide();
  }
}