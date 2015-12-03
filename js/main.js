(function() {
  var initialRequests;
  initialRequests = [
    $.ajax('apps.json')
  ];


  $.when.apply(this, initialRequests).then(function() {
    var AppData, appData;
    
    AppData = {};
    if (arguments.length === 3) {
      appData = JSON.parse(arguments[0]);
      AppData[appData.type] = appData.data;
    } else {
      for (var i = 0, len = arguments.length, appData; i < len; ++i) {
        appData = JSON.parse(arguments[i][0]);
        AppData[appData.type] = appData.data;
      }
    }

    window.App = ReactDOM.render(
      React.createElement(DemNotes, AppData),
      document.getElementById('app')
    );
  });  
})();