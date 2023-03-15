class Cache {
  constructor(storage) {
    if (storage === "local") {
      this.storage = localStorage;
    } else if (storage === "session") {
      this.storage = sessionStorage;
    } else {
      confirm("请输入 'local' 或 'session' 作为参数");
    }
  }

  setCache(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getCache(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  removeCache(key) {
    this.storage.removeItem(key);
  }

  clearCache() {
    this.storage.clear();
  }
}

const localCache = new Cache("local");
const sessionCache = new Cache("session");

