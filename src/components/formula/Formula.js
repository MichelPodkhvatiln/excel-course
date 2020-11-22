import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `
      <div class="excel__formula-info"> 
        fx
      </div>
      
      <div
        class="excel__formula-input"
        contenteditable
        spellcheck="false"
      > 
    `;
  }

  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim());
  }

  onClick(event) {
    console.log('Formula: onClick', event);
  }
}
