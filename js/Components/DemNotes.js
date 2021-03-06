var DemNotes = React.createClass({
  displayName: 'dem-notes',

  /**
  *
  * Generate new Node
  *
  **/
  newNote: function(event) {
    if (!$(event.target).is('.demnotes') || !this.state.newNoteEnabled) return;
    var notes;
    notes = Notes.addNote({
      x: getCoordinate("x", event),
      y: getCoordinate("y", event),
      headline: "",
      content: "",
      width: 400,
      height: 200,
      sWidth: 200,
      sHeight: 20,
      zIndex: this.state.curZIndex + 1,
      size: false
    });

    this.setNewZIndex();
    this.setNotesState(notes);
  },

  updateNote: function(id, updates, callback) {
    this.setNotesState(Notes.updateNote(id, updates), callback);
  },

  removeNote: function(id) {
    this.setNotesState(Notes.removeNote(id));
    if (!Notes.length) {
      this.setState({
        curZIndex: 0
      });
    }
  },

  setNewZIndex: function() {
    this.setState({
      curZIndex: this.state.curZIndex + 1
    }, function() {
      localStorage.setItem("curZIndex", this.state.curZIndex);
    })
  },

  updateNoteZIndex: function(id, oldZIndex) {
    this.updateNote(id, {zIndex: this.state.curZIndex + 1});
    this.setNewZIndex();
  },
  
  getInitialState: function() {
    var curZIndex;

    curZIndex = localStorage.curZIndex ? parseInt(localStorage.curZIndex) : Notes.length;
    return {
      notes: [],
      newNoteEnabled: (typeof localStorage.newNoteEnabled !== 'undefined' && localStorage.newNoteEnabled === "false") ? false : true,
      curZIndex: curZIndex
    };
  },

  setNotesState: function(notes, callback) {
    this.setState({
      notes: notes
    }, callback);
  },

  toggleNewNote: function(e) {
    this.setState({
      newNoteEnabled: !this.state.newNoteEnabled
    }, function() {
      localStorage.setItem('newNoteEnabled', this.state.newNoteEnabled);
    });
  },

  setBackground: function() {
    this.refs.container.style.background = 'url(img/unsplash/unsplash' + (Math.random() * 20 | 0) + ".jpg) left top / cover";
  },

  componentDidMount: function() {
    var self, $this;

    self = this;
    $this = $(ReactDOM.findDOMNode(this));

    $this.on('click', function(e) { self.newNote.call(self, e); });
    $this.on('click', '.toggle-new-note', function(e) { self.toggleNewNote.call(self, e); });
    
    this.setNotesState(Notes.getNotes());
    this.setBackground();
  },

  render: function() {
    var notes, className;

    notes = [];
    for (var i = 0, len = this.state.notes.length; i < len; ++i) {
      notes.push(React.createElement(Note, {
        key: i, 
        id: i, 
        data: this.state.notes[i], 
        updateNote: this.updateNote,
        deleteNote: this.removeNote,
        updateNoteZIndex: this.updateNoteZIndex
      }));
    }

    className = classNames({ 
      'toggle-new-note': true,
      'fa': true,
      'fa-sticky-note': true,
      'nn-disabled': !this.state.newNoteEnabled,
    });
    return React.createElement('div', {ref: 'container', className: 'demnotes'}, 
      React.createElement('i', {ref: 'toggleNewNote', className: className}),
      React.createElement('i', {ref: 'toggleBackground', className: 'refresh-background', onClick: this.setBackground}),
      notes
    );
  }
});