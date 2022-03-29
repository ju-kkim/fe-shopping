const categoryTemp = (categorys) => {
  const html = categorys.searchCategory
    .map((cat) => {
      return `<li><a href="#!" data-search="searchCategory">${cat}</a></li>`;
    })
    .join('');
  return html;
};

const resentKeywordTemp = (keywords) => {
  const html = keywords
    .map((keyword) => {
      return `<a href="#!" data-blur="keyword">${keyword}</a>`;
    })
    .join('');
  return html;
};

const autoCompleteKeywordTemp = (value, keywords) => {
  const html = keywords
    .map((keyword) => {
      const keywordValue = keyword.value;
      return `<a href="#!" data-blur="keyword">${keywordValue.replace(
        value,
        `<strong>${value}</strong>`
      )}</a>`;
    })
    .join('');
  return html;
};

export { categoryTemp, resentKeywordTemp, autoCompleteKeywordTemp };
