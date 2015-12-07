var Core;
Core = {};

/**
*
*
*
**/
Core.component = React.createClass({
  render: function() {
    var plugins, counter;
    plugins = [];
    counter = 0;

    for (var i in Core._viewPlugins) {
      plugins.push(React.createElement(Core._viewPlugins[i].component, {key: counter, plugins: Core._plugins}));
      ++counter;
    }

    return React.createElement('div', {className: 'dn-wrapper'}, plugins);
  }
});
Core._plugins = {};
Core._viewPlugins = {};

/**
*
*
*
**/
Core.init = function(container) {
  this.App = ReactDOM.render(
    React.createElement(this.component, null),
    container
  );
}

/**
*
*
*
**/
Core.registerPlugin = function(Plugin, isViewPlugin) {
  Core._plugins[Plugin.name] = new Plugin(Core._plugins);
  if (isViewPlugin) {
    Core._viewPlugins[Plugin.name] = Core._plugins[Plugin.name];
  }
}
Core.plugin = function(name) {
  return this._plugins[name];
}

/**
*
* Plugin
*
**/

/**
*
*
*
**/
$(window).load(function() {
  Core.init(document.getElementById('app'));
});