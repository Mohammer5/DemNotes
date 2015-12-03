var Model = function(storageName, settings) {
  var isArray, initialData;

  isArray = settings && settings.type === "array";
  initialData = settings ? settings.initialData : undefined;

  this._setStorageName(storageName);
  this._setInitialData(initialData, isArray);
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

Model.prototype._setStorageName = function(storageName) { this.storageName = "dnData_" + storageName; }
Model.prototype._setLength = function() { this._len = _.size(this._data); }
Model.prototype._setInitialData = function(initialData, isArray) { 
  if (typeof localStorage[this.storageName] === 'undefined') {
    localStorage.setItem(this.storageName, '');

    if (initialData) {
      this._data = initialData;
    } else {
      this._data = isArray ? [] : {};
    }
    this._save();
  } else {
    console.log(localStorage[this.storageName]);
    this._data = JSON.parse(localStorage[this.storageName]);
  }
}

Model.prototype._len = 0;
Model.prototype._data = null;
Model.prototype._read = function() { return JSON.parse(localStorage[this.storageName]); }
Model.prototype._save = function(data) { localStorage[this.storageName] = JSON.stringify(data); }

Model.prototype.set = function() {
  var data, name;
  if (arguments.length === 1) {
    this._data.push(arguments[0]);
  } else {
    name = arguments[0];
    if (typeof _data[name] === 'undefined') ++this._len;
    this._data[name] = value;
    this._save();
  }

  return this;
}
Model.prototype.get = function(name) {
  return this._data[name];
}
Model.prototype.del = function(name) {
  delete this._data[name];
  --this._len;
  this._save();
}
Model.prototype.each = function(callback, context) {
  context = context || self;
  _.each(this._data, function(val, key) {
    callback.call(context, val, key);
  });
}