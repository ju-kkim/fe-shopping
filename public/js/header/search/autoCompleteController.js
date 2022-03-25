import { getData } from '../../util/util.js';
import { autoCompleteKeywordTemp } from './searchTemplate.js';

class AutoCompleteController {
  constructor() {
    this.timer = null;
  }

  getRecomKeyword(keyword, renderFuc) {
    if (!keyword) {
      this.clearTimer();
      this.timer = null;
      return;
    }

    const AMAZON_API = `https://completion.amazon.com/api/2017/suggestions?session-id=133-4736477-7395454&customer-id=&request-id=4YM3EXKRH1QJB16MSJGT&page-type=Gateway&lop=en_US&site-variant=desktop&client-info=amazon-search-ui&mid=ATVPDKIKX0DER&alias=aps&b2b=0&fresh=0&ks=71&prefix=${keyword}&event=onKeyPress&limit=11&fb=1&suggestion-type=KEYWORD`;
    this.clearTimer();
    this.timer = setTimeout(function () {
      getData(AMAZON_API)
        .then((data) => autoCompleteKeywordTemp(keyword, data.suggestions))
        .then((html) => renderFuc(html));
    }, 500);
  }

  clearTimer() {
    clearTimeout(this.timer);
  }
}

export { AutoCompleteController };
