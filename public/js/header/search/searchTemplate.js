const categoryTemp = (categorys) => {
  const html = categorys.searchCategory
    .map((cat) => {
      return `<li><a href="#!" data-search="searchCategory">${cat}</a></li>`;
    })
    .join('');
  return html;
};

export { categoryTemp };
