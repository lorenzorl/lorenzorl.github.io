interface Project {
  name: string,
  description: string,
  img: string,
  link: string,
  imageSrc?: string | URL
}

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
    const { imageSrc, name, description, link } = data;
    const modalElement = this._modalElement;
    const modalTitleElement = modalElement.querySelector<HTMLElement>('.modal__title');
    const modalImgElement = modalElement.querySelector<HTMLElement>('.modal__img > img');
    const modalDescriptionElement = modalElement.querySelector<HTMLElement>('.modal__description');
    const modalLinkElement = modalElement.querySelector<HTMLElement>('.modal__button');

    if (modalTitleElement != undefined) modalTitleElement.innerText = name;
    if (modalDescriptionElement != undefined) modalDescriptionElement.innerText = description;
    if (typeof imageSrc == 'object') modalImgElement?.setAttribute('src', imageSrc.href);
    modalLinkElement?.setAttribute('target', '_blank');
    modalLinkElement?.setAttribute('href', link);

    this.show();
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