class SearchStorage {
  constructor() {
    this.STORAGE_NAME = 'resent_search';
    this.resentSearch = [];
    this.storage = localStorage;

    this.getStorage();
  }

  getResentSearch() {
    return this.resentSearch;
  }

  addResentSearch(keyword) {
    this.resentSearch.push(keyword);
    this.setStorage();
  }

  setStorage() {
    this.storage.setItem(this.STORAGE_NAME, JSON.stringify(this.resentSearch));
  }

  getStorage() {
    const currentStorage = JSON.parse(this.storage.getItem(this.STORAGE_NAME));
    if (currentStorage) {
      this.resentSearch = currentStorage;
    }
  }
}

export { SearchStorage };
