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

  updateDimension: function(sizeSwitch) {
    var resizeObj, width, height, size, el;

    resizeObj  = {};
    sizeSwitch = sizeSwitch || false;
    size       = this.props.data.size;
    el         = ReactDOM.findDOMNode(this);

    if (sizeSwitch) {
      width = size ? this.props.data.sWidth : this.props.data.width;
      height = size ? this.props.data.sHeight : this.props.data.height;
    } else {
      width = el.offsetWidth - 40;
      height = el.offsetHeight - 48;
    }

    if (size) {
      resizeObj.sWidth = width;
      resizeObj.sHeight = height;
    } else {
      resizeObj.width = width;
      resizeObj.height = height;
    }

    this.props.updateNote(this.props.id, resizeObj);
  },

  componentDidMount: function() {
    var self, el, $el;

    self = this;
    el = ReactDOM.findDOMNode(this);
    $el = $(el);

    $el.on('keydown', 'textarea', function() {
      self.props.updateNote(self.props.id, $(this).val());
    });

    $(this.refs.note).resizable({
      containment: "parent",
      create: function() {
        self.adjustHeadlineContainerSize.call(self);
      },
      stop: function() {
        self.updateDimension();
        self.adjustHeadlineContainerSize();
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
    var self;
    self = this;
    this.updateDimension();
    this.props.updateNote(this.props.id, {size: !this.props.data.size}, function() {
      self.adjustHeadlineContainerSize();
    });
  },

  render: function() {
    var positioning, data, className, size;

    data = this.props.data;
    size = this.props.data.size;
    positioning = {
      top: data.y,
      left: data.x,
      width: size ? data.sWidth : data.width,
      height: size ? data.sHeight : data.height,
      zIndex: data.zIndex
    }

    className = "dn-note ui-resizable ui-draggable ui-draggable-handle" + (size ? " small" : "");

    return React.createElement('article', {ref: 'note', className: className, style: positioning},
      React.createElement('span', {className: 'dn-delete', onClick: this.deleteNote}),
      React.createElement('span', {className: 'dn-size', onClick: this.switchSize}),
      React.createElement('textarea', {ref: 'headline', className: 'dn-headline', cols: "0", rows: "0", onChange: this.handleHeadlineUpdate, value: this.props.data.headline}),
      React.createElement('div', {ref: 'content', className: 'dn-content'},
        React.createElement('textarea', {onChange: this.handleContentUpdate, value: this.props.data.content})
      )
    );
  }
});