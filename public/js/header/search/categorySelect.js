import { getData, toggleClass } from '../../util/util.js';
import { categoryTemp } from './searchTemplate.js';

class CategorySelector {
  constructor() {
    this.selectBox = document.querySelector('.search-form__selector-box');
    this.selectBtnTxt = this.selectBox.querySelector('.selector--btn--text');
    this.categoryList = this.selectBox.querySelector('.selector-box__list');
    this.toggleClassName = 'open';
  }

  toggleDropDown(e) {
    if (this.categoryList.innerText) {
      toggleClass(this.selectBox, this.toggleClassName);
      return;
    }
    this.getOption();
  }

  getOption() {
    getData('search/category')
      .then((data) => categoryTemp(data))
      .then((data) => (this.categoryList.innerHTML = data))
      .then(toggleClass(this.selectBox, this.toggleClassName));
  }

  selectCategory(target) {
    const targetText = target.innerText;
    this.selectBtnTxt.innerText = targetText;
    toggleClass(this.selectBox, this.toggleClassName);
  }
}

export { CategorySelector };
