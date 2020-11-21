import {_dom} from '@core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = _dom(selector);
    this.components = options.components || [];
  }

  getRoot() {
    const $root = _dom.create('div', 'excel');

    this.components.forEach((Component)=>{
      const $el = _dom.create('div', Component.className);

      const component = new Component($el);
      $el.html(component.toHTML());

      $root.append($el);
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());
  }
}
