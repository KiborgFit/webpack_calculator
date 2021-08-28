import { createElement } from '../../utils';
import DefaultComponent from '../DefaultComponent';
import './Display.css';

export default class Display extends DefaultComponent {
  constructor(props) {
    super(props);
    this.className = this.props.className;
    this.rowCount = this.props.rowCount;
    this.maxLength = this.props.maxLength;
  }

  showOnDisplay(value) {
    document.querySelector('.calculator__display').innerHTML = value;
  }

  render() {
    return createElement('div', ['display', ...this.props.className]);
  }
}
