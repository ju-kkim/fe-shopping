import { CategorySelector } from './categorySelect.js';
import { SearchBar } from './searchBar.js';

class Search {
  constructor() {
    this.categorySelector = new CategorySelector();
    this.searchBar = new SearchBar();
    this.searchInput = document.querySelector('.search-form--input');

    this.init();
  }

  init() {
    const headerSearch = document.querySelector('.header__search');

    headerSearch.addEventListener('click', this.clickHandler.bind(this));

    this.searchInput.addEventListener(
      'focus',
      this.searchBar.init.bind(this.searchBar, this.searchInput)
    );

    this.searchInput.addEventListener(
      'input',
      this.searchBar.init.bind(this.searchBar, this.searchInput)
    );

    this.searchInput.addEventListener(
      'blur',
      this.searchBar.hideRecomBox.bind(this.searchBar)
    );
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
      case 'submitBtn':
        this.searchBar.searchKeyword.call(this.searchBar, this.searchInput);
        break;
      default:
        return;
    }
  };
}

export { Search };
