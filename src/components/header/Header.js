import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
      <input type="text" class="excel__header--input" value="New table">
      
      <div>
        <button class="excel__button excel__header-button">
          <i class="material-icons">delete</i>
        </button>
      
        <button class="excel__button excel__header-button">
          <i class="material-icons">exit_to_app</i>
        </button>
      </div>
    `;
  }
}
