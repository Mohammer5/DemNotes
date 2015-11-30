var DemNotes = React.createClass({
  displayName: 'dem-notes',

  /**
  *
  * Generate new Node
  *
  **/
  newNote: function(event) {
    var notes;
    notes = Notes.addNote({
      x: getCoordinate("x", event),
      y: getCoordinate("y", event),
      title: "",
      content: ""
    });

    this.setState({
      notes: notes
    });
  },
  
  getInitialState: function() {
    return {
      notes: []
    };
  },

  componentDidMount: function() {
    var self, $this;

    self = this;
    $this = $(ReactDOM.findDOMNode(this));

    $this.on('click', function(e) {
      self.newNote.call(self, e);
    });
    
    this.setState({
      notes: Notes.getNotes()
    });
  },

  render: function() {
    var notes;

    notes = [];
    for (var i = 0, len = this.state.notes.length; i < len; ++i) {
      notes.push(React.createElement(Note, {key: i, id: i, data: this.state.notes[i]}));
    }

    return React.createElement('div', {className: 'demnotes'}, notes);
  }
});