var Notes = (function() {
  var _N = function() {
    self = this;
    Object.defineProperty(this, 'length', {
      get: function() {
        return self._notes.length;
      },
      set: function(value) {
        undefined;
      }
    })
  };

  _N.prototype._notes = [];
  _N.prototype.length = 0;

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
    this._notes = data;
    localStorage.demnotes = JSON.stringify(data) || [];
  }

  _N.prototype.addNote = function(noteData) {
    var notes = this._read();
    notes.push(noteData);
    this._save(notes);

    return this.getNotes();
  }

  _N.prototype.removeNote = function(id) {
    var notes = this._read();
    globals.remove(notes, id);
    this._save(notes);

    return this.getNotes();
  }

  _N.prototype.updateNote = function(id, updates) {
    var notes;
    notes = this._read();

    if (notes[id]) {
      for (var i in updates) {
        if (typeof notes[id][i] !== undefined) {
          notes[id][i] = updates[i];
        }
      }
    }

    this._save(notes);

    return this.getNotes();
  }

  _N.prototype.getNotes = function() {
    return this._notes;
  }

  return new _N();
})().init();