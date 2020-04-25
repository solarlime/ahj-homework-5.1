/* eslint-disable class-methods-use-this */

/**
 * Приложение представляет собой кнопку,
 * обрабатывающую нажатия и показывающую /
 * скрывающую подсказку
 */
export default class App {
  /**
   * Начальная точка приложения
   * Объявляем переменные для основных элементов
   */
  constructor() {
    this.page = document.body;
    this.container = this.page.querySelector('div.container');
    this.button = this.page.querySelector('button.button');
    this.init();
  }

  /**
   * Добавляем обработчик события на кнопку. В случае наличия
   * подсказки удаляем её, иначе - отрисовываем.
   */
  init() {
    this.button.addEventListener('click', () => {
      const popupContainer = this.page.querySelector('div.popup');
      if (!popupContainer) {
        this.popup();
      } else {
        popupContainer.remove();
        this.button.style.marginTop = '';
      }
    });
  }

  /**
   * Отрисовываем подсказку и добавляем её на страницу.
   * Задаём положение и управляем им.
   */
  popup() {
    const popup = document.createElement('div');
    popup.setAttribute('class', 'popup');
    popup.innerHTML = '<h4 class="popup-title">Tip!</h4>'
      + '<p class="popup-description">This is a tip. '
      + 'It should appear on a button click. And disappear after the next one. Change the window width. The tip should be flexible.</p>'
      + '<div class="popup-tail"></div>\n';
    this.container.append(popup);
    const { width } = window.getComputedStyle(popup);
    popup.style.position = 'absolute';
    popup.style.bottom = 'calc(32px)';
    popup.style.left = `calc(50% - ${width}/2)`;
    this.page.querySelector('.popup-tail').style.left = 'calc(50% - 10px)';
    // Добавляем обработчик события изменения окна. В случае срабатывания - двигаем подсказку
    window.addEventListener('resize', () => {
      popup.style.left = `calc(50% - ${popup.offsetWidth / 2}px)`;
    });
  }
}
