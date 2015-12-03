var Note = React.createClass({
  displayName: 'note',

  adjustHeadlineContainerSize: function() {
    var el, $el, style, headlineHeight;

    $el = $(el = this.refs.headline);
    style = el.style;

    style.height = '1px';
    headlineHeight = (el.scrollHeight + 1) + "px";
    style.height = headlineHeight;

    this.forceUpdate();
  },

  componentDidMount: function() {
    var self, el, $el;

    self = this;
    el = ReactDOM.findDOMNode(this);
    $el = $(el);

    $el.on('keydown', 'textarea', function() {
      Notes.updateNote(self.props.id, $(this).val());
    });

    $(this.refs.note).resizable({
      containment: "parent",
      minHeight: 150,
      minWidth: 250,
      create: function() {
        self.adjustHeadlineContainerSize.call(self);
      },
      stop: function() {
        self.props.updateNote(self.props.id, {width: el.offsetWidth - 40, height: el.offsetHeight - 48});
      }
    }).draggable({
      containment: "parent",
      start: function() {
        $(this).addClass('being-dragged');
        self.props.updateNoteZIndex(self.props.id, self.props.data.zIndex);
      },
      stop: function(e) {
        $(this).removeClass('being-dragged');
        self.props.updateNote(self.props.id, {x: el.offsetLeft, y: el.offsetTop});
      }
    }).on('mouseup', function() {
      self.props.updateNoteZIndex(self.props.id, self.props.data.zIndex);      
    });

    $(this.refs.content).perfectScrollbar({ suppressScrollX: true });
  },

  handleHeadlineUpdate: function(event) {
    this.props.updateNote(this.props.id, {headline: event.target.value});

    this.adjustHeadlineContainerSize();
  },

  handleContentUpdate: function(event) {
    this.props.updateNote(this.props.id, {content: event.target.value});
  },

  deleteNote: function(event) {
    this.props.deleteNote(this.props.id);
  },

  switchSize: function() {
    this.props.switchSize(this.props.id, this.props.data.size);
  },

  render: function() {
    var positioning, data;

    data = this.props.data;
    positioning = {
      top: data.y,
      left: data.x,
      width: data.width,
      height: data.height,
      zIndex: data.zIndex
    }

    return React.createElement('article', {ref: 'note', className: 'dn-note', style: positioning},
      React.createElement('span', {className: 'dn-delete', onClick: this.deleteNote}),
      React.createElement('span', {className: 'dn-size', onClick: this.switchSize}),
      React.createElement('textarea', {ref: 'headline', className: 'dn-headline', cols: "0", rows: "0", onChange: this.handleHeadlineUpdate, value: this.props.data.headline}),
      React.createElement('div', {ref: 'content', className: 'dn-content'},
        React.createElement('textarea', {onChange: this.handleContentUpdate, value: this.props.data.content})
      )
    );
  }
});