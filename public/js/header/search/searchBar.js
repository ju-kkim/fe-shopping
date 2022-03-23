import { SearchStorage } from './searchStorage.js';
import { resentKeywordTemp } from './searchTemplate.js';

class SearchBar {
  constructor() {
    this.recomBox = document.querySelector('.search-form--recom');
    this.storage = new SearchStorage();
  }

  init(input) {
    const keyword = input.value;
    if (this.isValue(keyword)) {
      this.hideResentBox();
      return;
    }

    this.showResentResult();
  }

  showResentResult() {
    const resentKeywordList = this.isResentKeyword();
    if (resentKeywordList.length === 0) {
      this.hideRecomBox();
      return;
    }
    this.renderKeyword(resentKeywordList);
    this.showRecomBox();
    this.showResentBox();
  }

  showRecomBox() {
    this.recomBox.style.display = 'block';
  }

  hideRecomBox() {
    this.recomBox.style.display = 'none';
  }

  showResentBox() {
    this.recomBox.classList.add('resent');
  }

  hideResentBox() {
    this.recomBox.classList.remove('resent');
  }

  isValue(keyword) {
    return !!keyword;
  }

  isResentKeyword() {
    return this.storage.getResentSearch();
  }

  searchKeyword(input) {
    const keyword = input.value;
    if (keyword === '') {
      return;
    }
    this.storage.addResentSearch(keyword);
    input.value = '';
    input.blur();
    this.hideRecomBox();
  }

  renderKeyword(keywords) {
    const keywordBox = this.recomBox.querySelector('.search_words');
    keywordBox.innerHTML = resentKeywordTemp(keywords);
  }
}

export { SearchBar };
