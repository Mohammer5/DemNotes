import {AbstractStorageModel} from './../../../../Abstract/AbstractDirective';

export default class NotesDirective extends AbstractDirective {
  /*@ngInject*/
  constructor(NotesService) {
    super();
    this.NotesService = NotesService;
  }

  link(scope, el) {
    this.component = React.render(
      <Notes Notes={this.NotesService} />,
      el[0]
    );
  }
}