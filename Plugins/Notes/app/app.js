import {NotesService} from './Services/NotesService';
import {NotesDirective} from './Directives/NotesDirective';

var Notes = angular.module('Notes', []);

/**
*
* Services
*
**/
register('Notes').factory('NotesService', NotesService);

/**
*
* Directives
*
**/
register('Notes').directive('Notes', NotesDirective);