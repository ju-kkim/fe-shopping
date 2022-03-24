import { SearchStorage } from './searchStorage.js';
import { resentKeywordTemp } from './searchTemplate.js';

class SearchBar {
  constructor() {
    this.recomBox = document.querySelector('.search-form--recom');
    this.modeBtn = this.recomBox.querySelector('.recent_mode_btn');
    this.storage = new SearchStorage();
    this.recentMode = true;
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
    if (keyword === '') return;
    if (this.recentMode) this.storage.addResentSearch(keyword);
    input.value = '';
    input.blur();
    this.hideRecomBox();
  }

  deleteRecentKeyword() {
    this.storage.deleteStorage();
    this.hideRecomBox();
  }

  changeRecentMode(modeBtn, input) {
    const mode = modeBtn.dataset.mode;
    mode === 'off' ? (this.recentMode = false) : (this.recentMode = true);
    this.renderModeTypeView();
    input.focus();
  }

  renderModeTypeView() {
    const searchWords = this.recomBox.querySelector('.search_words');
    const resentTtl = this.recomBox.querySelector('.resent_ttl');

    if (this.recentMode) {
      searchWords.style.display = 'block';
      resentTtl.innerText = '최근 검색어';
      this.modeBtn.innerText = '최근검색어끄기';
      this.modeBtn.setAttribute('data-mode', 'off');
      return;
    }

    searchWords.style.display = 'none';
    resentTtl.innerText = '최근 검색어 저장 기능이 꺼져있습니다.';
    this.modeBtn.innerText = '최근검색어켜기';
    this.modeBtn.setAttribute('data-mode', 'on');
  }

  renderKeyword(keywords) {
    const keywordBox = this.recomBox.querySelector('.search_words');
    keywordBox.innerHTML = resentKeywordTemp(keywords);
  }
}

export { SearchBar };
