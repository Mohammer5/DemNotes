/**
*
*
*
**/
function Notes(plugins) {
  Helper.Model.call(this, "Notes");
};

/**
*
*
*
**/
Notes.prototype.component = DemNotes;
Notes.prototype.type = "array";

/**
*
*
*
**/
Notes.prototype.addNote = function(noteData) {
  this._data.push(noteData);
  this._save(this._data);
  console.log(this._data);

  return this.getNotes();
}
Notes.prototype.removeNote = function(id) {
  Helper.remove(this._data, id);
  this._save(this._data);

  return this.getNotes();
}
Notes.prototype.updateNote = function(id, updates) {
  if (this._data[id]) {
    for (var i in updates) {
      if (typeof this._data[id][i] !== undefined) {
        this._data[id][i] = updates[i];
      }
    }
  }

  this._save();
  return this.getNotes();
}
Notes.prototype.getNotes = function() { return this._data; }
Notes.prototype._onSync = function() {
  this.rComponent = ReactDOM.(document.querySelector('.demnotes'));
}
/**
*
*
*
**/
Helper.extend(Helper.Model, Notes);
Core.registerPlugin(Notes, true);