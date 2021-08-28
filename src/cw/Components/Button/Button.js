import DefaultComponent from '../DefaultComponent';
import { createElement } from '../../utils';
import './Button.css';
import { getButtonClassList } from '../../utils/button-utils';

export default class Button extends DefaultComponent {
  constructor(props) {
    super(props);
  }

  get isFake() {
    return this.props.value === undefined;
  }

  render() {
    const button = createElement('button', getButtonClassList(['button'], this.props.type, this.isFake));

    button.setAttribute('value', this.props.value);
    button.setAttribute('data-type', this.props.type);
    button.innerHTML = this.props.value;
    return button;
  }
}
