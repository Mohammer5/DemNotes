export default class StorageModel {

  constructor(storageName, type) {
    this._length = 0;
    this._type = type;

    this._synced = $.Deferred();
    this._setStorageName(storageName);
    this._setInitialData(isArray);
  }

  /**
  *
  * Public methods
  *
  **/
  set(...args) {
    var data, name;
    if (args.length === 1) {
      this._data.push(args[0]);
    } else {
      name = args[0];
      if (typeof this._data[name] === 'undefined') ++this._length;
      this._data[name] = args[0];
    }
    this._save();

    return this;
  }
  get(name) {
    return this._data[name];
  }
  del(name) {
    var success;
    success = delete this._data[name];
    success && --this._length;
    return success;
  }

  /**
  *
  * Private methods
  *
  **/
  _setStorageName(name) {
    this.storageName = "dnData_" + storageName;
  }
  _setInitialData(isArray) {
    var isArray, dataObj, defaults;
    isArray = this._type === "array";
    
    this._data = isArray ? [] : {};
    defaults = isArray ? [] : {};
    dataObj[this.storageName] = defaults;

    chrome.storage.sync.get(dataObj, (data) => {
      if (!Object.getOwnPropertyName(data).length === 0) this._data = data;
      this._length = _.size(this._data);
      self._onSync();
    });
  }
  _onSync() {
    this._synced.resolve();
  }
  _save() {
    var data;
    data = { [this.storageName]: this._data };
    chrome.storage.sync.set(data);
  }

  /**
  *
  * Getters / Setters
  *
  **/
  get length() {
    return this._type == 'array' ? this._data.length : this._length;
  }
  set length(len) {
    undefined;
  }
}