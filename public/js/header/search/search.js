import { CategorySelector } from './categorySelect.js';

class Search {
  constructor() {
    this.categorySelector = new CategorySelector();

    this.init();
  }

  init() {
    const headerSearch = document.querySelector('.header__search');
    headerSearch.addEventListener('click', this.clickHandler.bind(this));
  }

  clickHandler = (e) => {
    e.preventDefault();
    const target = e.target;

    switch (target.dataset.search) {
      case 'selectorBtn':
        this.categorySelector.dropDownMenu.call(this.categorySelector);
        break;
      case 'searchCategory':
        this.categorySelector.selectCategory.call(
          this.categorySelector,
          target
        );
        break;
    }
  };
}

export { Search };
