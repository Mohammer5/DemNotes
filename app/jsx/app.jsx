// import {StorageService} from './services/storageService';

var app;
{
  let _p = [];
  _.forEach(plugins, function(value, index) {
    if (value) {
      _p.push(index);
    }
  });
  app = angular.module("DemNotes", _p);
}

// app.factory('StorageService', StorageService);