export default class AbstractDirective {
  /*@ngInject*/
  constructor() {
    this.template = '';
    this.restrict = 'E';
    this.scope = {};
  }

  link(scope, el) {}
}