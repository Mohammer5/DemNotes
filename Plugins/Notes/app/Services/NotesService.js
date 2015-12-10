import {AbstractStorageModel} from './../../../../Abstract/AbstractStorageModel';

class NotesService extends AbstractStorageModel {
  constructor() {
    super('Notes');
  }

  addNote(noteData) {
    this.set(noteData);
    return this.getNotes();
  }
  removeNote(id) {
    this.del(id);
    return this.getNotes();
  }
  updateNote(id, updates) {
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
  getNotes() {
    return this._data;
  }
}
NotesService._type = 'array'