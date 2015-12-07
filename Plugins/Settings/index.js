function Settings(plugins) {
  Helper.Model.call(this, "Settings");
}
Settings.prototype.registerSettings = function(settings, namespace, plugin, callback) {
  if (!Helper.exists(this.get(namespace))) {
    this.set(namespace, {
      settings: settings,
      callback: callback,
      context: plugin
    });
  }

  return this;
}
Settings.prototype.setSetting = function(namespace, setting, value) {
  var oldValue;

  oldValue = this._data[namespace].settings[setting];
  this._data[namespace].settings[setting] = value;
  this._data[namespace].callback.call(this._data[namespace].context, {
    setting: setting,
    oldValue: oldValue,
    newValue: value
  });
  this.save();
}

Helper.extend(Helper.Model, Settings);
Core.registerPlugin(Settings, false);