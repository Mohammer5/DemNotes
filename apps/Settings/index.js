var SettingsApp = (function() {
  function Settings(initialSettings) {
    Model.call(this, "Settings", {
      initialData: initialSettings
    });
  }
  Settings.prototype.addSettings = function(name, initialValue) {
    if (!globals.exists(this.get(name))) {
      this.set(name, initialValue);
    }
  }

  extend(Model, Settings); 

  return Settings;
})();