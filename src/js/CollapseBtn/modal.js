import './modal.css';

export default class CollapseBtn {
  constructor(modal, button, text) {
    this.modal = modal;
    this.button = button;
    this.text = text;
    this.modalTextElement = this.modal.querySelector('.modal-text');
    this.modalTextElement.textContent = this.text;
    this.header = this.modal.closest('header');

    this.modal.addEventListener('animationend', (event) => {
      if (event.animationName === 'close-modal') {
        this.modal.style.display = 'none';
      }
    });
  }

  openModal() {
    this.modal.style.display = 'block';
    this.header.classList.add('expand');
    this.header.style.height = `${this.modal.scrollHeight + 60}px`;
    this.modal.classList.remove('hide');
    this.modal.classList.add('show');
  }

  closeModal() {
    this.modal.classList.remove('show');
    this.modal.classList.add('hide');
    this.header.classList.remove('expand');
    this.header.style.height = '';
  }

  init() {
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.modal.classList.contains('show')) {
        this.closeModal();
      } else {
        this.openModal();
      }
    });

    this.modal.classList.add('hide');
  }
}
