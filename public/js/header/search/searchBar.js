import { AutoCompleteController } from './autoCompleteController.js';
import { SearchStorage } from './searchStorage.js';
import { resentKeywordTemp } from './searchTemplate.js';

class SearchBar {
  constructor() {
    this.recomBox = document.querySelector('.search-form--recom');
    this.keywordBox = this.recomBox.querySelector('.search_words');
    this.modeBtn = this.recomBox.querySelector('.recent_mode_btn');
    this.storage = new SearchStorage();
    this.autoComplete = new AutoCompleteController();
    this.recentMode = true;
    this.firstInput = true;
  }

  init(input) {
    const keyword = input.value;
    if (this.isValue(keyword)) {
      this.getAutoCompleteKeyword(input);
      this.firstInput = false;
      return;
    }
    this.firstInput = true;
    this.showResentResult();
  }

  getAutoCompleteKeyword(input) {
    const keyword = input.value;
    if (this.firstInput) {
      this.keywordBox.innerText = '';
    }
    this.firstInput = !keyword;
    this.autoComplete.getRecomKeyword(keyword, this.renderKeyword.bind(this));
    this.hideResentBox();
    this.showRecomBox();
    if (!this.isValue(keyword)) {
      this.init(input);
      return;
    }
  }

  showResentResult() {
    const resentKeywordList = this.isResentKeyword();
    if (resentKeywordList.length === 0) {
      this.hideRecomBox();
      return;
    }
    this.showResentBox();
    const keywordHtml = resentKeywordTemp(resentKeywordList);
    this.renderKeyword(keywordHtml);
    this.showRecomBox();
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
    const resentTtl = this.recomBox.querySelector('.resent_ttl');

    if (this.recentMode) {
      this.keywordBox.style.display = 'block';
      resentTtl.innerText = '최근 검색어';
      this.modeBtn.innerText = '최근검색어끄기';
      this.modeBtn.setAttribute('data-mode', 'off');
      return;
    }

    this.keywordBox.style.display = 'none';
    resentTtl.innerText = '최근 검색어 저장 기능이 꺼져있습니다.';
    this.modeBtn.innerText = '최근검색어켜기';
    this.modeBtn.setAttribute('data-mode', 'on');
  }

  renderKeyword(html) {
    this.keywordBox.innerHTML = html;
  }
}

export { SearchBar };
