import { getData } from '../../util/util.js';
import { categoryTemp } from './searchTemplate.js';

class CategorySelector {
  constructor() {
    this.selectBox = document.querySelector('.search-form__selector-box');
    this.selectBtnTxt = this.selectBox.querySelector('.selector--btn--text');
    this.categoryList = this.selectBox.querySelector('.selector-box__list');
  }

  toggleDropDown(e) {
    if (this.categoryList.innerText) {
      this.selectBox.classList.toggle('open');
      return;
    }
    this.getOption();
  }

  getOption() {
    getData('search/category')
      .then((data) => categoryTemp(data))
      .then((data) => (this.categoryList.innerHTML = data))
      .then(this.selectBox.classList.add('open'));
  }

  selectCategory(target) {
    const targetText = target.innerText;
    this.selectBtnTxt.innerText = targetText;
    this.selectBox.classList.remove('open');
  }
}

export { CategorySelector };
