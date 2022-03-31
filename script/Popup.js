export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
  }

  open() {
    this._popup.classList.add('popup_enable');
    this._popup.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_enable');
    this._popup.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close()
    }
  }

  // Кнопки закрытия Pop-up
  setEventListeners() {
    const popup = this._popup.closest('.popup')
      popup.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('popup__close') || event.target === event.currentTarget) {
          this.close(this._popup = popup)
        }
      })
  }
}