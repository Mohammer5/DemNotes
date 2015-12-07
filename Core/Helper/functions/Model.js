/**
*
*
*
**/
Helper.Model = function(storageName) {
  var isArray, initialData;

  isArray = this.type === "array";

  this.synced = $.Deferred();
  this._setStorageName(storageName);
  this._setInitialData(isArray);
  this._setLength();

  Object.defineProperty(this, 'length', {
    get: function() {
      if (isArray) {
        return this._data.length;
      } else {
        return this._len;
      }
    },
    set: function(value) {
      undefined;
    }
  });
};

/**
*
*
*
**/
Helper.Model.prototype._len = 0;
Helper.Model.prototype._data = null;
Helper.Model.prototype.synced = null;

/**
*
*
*
**/
Helper.Model.prototype._setStorageName = function(storageName) { 
  this.storageName = "dnData_" + storageName;
}
Helper.Model.prototype._setLength = function() {
  this._len = _.size(this._data);
}
Helper.Model.prototype._setInitialData = function(isArray) { 
  var self, dataObj, defaults;
  self = this;
  dataObj = {};

  this._data = isArray ? [] : {};
  defaults    = isArray ? [] : {};

  dataObj[this.storageName] = defaults;
  chrome.storage.sync.get(dataObj, function(data) {
    if (Object.getOwnPropertyNames(data).length === 0) return;
    self._data = data;
    self._onSync();
  })
}
Helper.Model.prototype._onSync = function() {}
Helper.Model.prototype._save = function() {
  var data = {};
  data[this.storageName] = this._data;
  chrome.storage.sync.set(data);
}

/**
*
*
*
**/
Helper.Model.prototype.set = function() {
  var data, name;
  if (arguments.length === 1) {
    this._data.push(arguments[0]);
  } else {
    name = arguments[0];
    if (typeof this._data[name] === 'undefined') ++this._len;
    this._data[name] = arguments[0];
    this._save();
  }

  return this;
}
Helper.Model.prototype.get = function(name) {
  return this._data[name];
}
Helper.Model.prototype.del = function(name) {
  delete this._data[name];
  --this._len;
  this._save();
}
Helper.Model.prototype.each = function(callback, context) {
  context = context || self;
  _.each(this._data, function(val, key) {
    callback.call(context, val, key);
  });
}