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

    this.searchInput.addEventListener('blur', this.blurHandler.bind(this));
  }

  clickHandler(e) {
    e.preventDefault();
    const target = e.target;

    switch (target.dataset.search) {
      case 'selectorBtn':
        this.categorySelector.dropDownMenu();
        break;
      case 'searchCategory':
        this.categorySelector.selectCategory(target);
        break;
      case 'submitBtn':
        this.searchBar.searchKeyword(this.searchInput);
        break;
      default:
        return;
    }
  }

  blurHandler({ relatedTarget }) {
    if (!relatedTarget) {
      this.searchBar.hideRecomBox();
      return;
    }
    switch (relatedTarget.dataset.recent) {
      case 'deleteAll':
        this.searchBar.deleteRecentKeyword();
        break;
      case 'modeBtn':
        this.searchBar.changeRecentMode(relatedTarget, this.searchInput);
        break;
      default:
        this.searchBar.hideRecomBox();
    }
  }
}

export { Search };
