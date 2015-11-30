var Notes = (function() {
  var _N = function() {};

  _N.prototype._notes = [];

  _N.prototype.init = function() {
    if (!localStorage['demnotes']) {
      localStorage.setItem('demnotes', '[]')
    }
    this._notes = JSON.parse(localStorage.demnotes);

    return this;
  }

  _N.prototype._read = function() {
    return JSON.parse(localStorage.demnotes || '[]');
  }

  _N.prototype._save = function(data) {
    localStorage.demnotes = JSON.stringify(data);
  }

  _N.prototype.addNote = function(noteData) {
    var notes = this._read();
    notes.push(noteData);
    this._notes = notes;
    this._save(notes);

    return this.getNotes();
  }

  _N.prototype.removeNote = function(id) {
    var notes = this._read();
    notes = globals.remove(notes, id);
    this._save(notes);

    return this.getNotes();
  }

  _N.prototype.getNotes = function() {
    return this._notes;
  }

  return new _N();
})().init();