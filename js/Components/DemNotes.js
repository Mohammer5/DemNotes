var DemNotes = React.createClass({
  displayName: 'DemNotes',

  /**
  *
  * Generate new Node
  *
  **/
  newNote: function() {
    
  }
  
  getInitialState: function() {
    return {
      notes: []
    };
  },

  componentDidMount: function() {
    var $this = $(ReactDOM.findDOMNode(this));

    $this.on('click', $.Proxy(this.newNote, this, $this));
  },

  render: function() {
    var notes;

    notes = [];
    for (var i = 0, len = this.state.notes.length; i < len; ++i) {
      document.createElement(Note, {key: i, this.state.notes[i]});
    }

    return React.createElement('div', {className: 'demnotes'}, notes);
  }
});