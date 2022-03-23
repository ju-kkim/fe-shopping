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
      return `<a href="#!">${keyword}</a>`;
    })
    .join('');
  return html;
};

export { categoryTemp, resentKeywordTemp };
