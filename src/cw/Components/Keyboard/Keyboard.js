import { createElement } from '../../utils';
import DefaultComponent from '../DefaultComponent';
import Button from '../Button/Button';
import './Keyboard.css';
import marckup from '../../../MOCK/mock_keyboardMarkup';

export default class Keyboard extends DefaultComponent {
  constructor(props) {
    super(props);
    this.case = this.props.case;
    this.keyboardMarkup = this.props.keyboardMarkup;
    this.buttons = this.props.buttons;
  }

  handlePressKey(e) {
    console.log('q');
  }

  get buttonsOrder() {
    return this.keyboardMarkup.reduce((acc, markupRow) => {
      markupRow.forEach((buttonValue) => {
        const buttonData = this.buttons.find((buttonInfo) => buttonValue === buttonInfo.value);
        acc.push(new Button({ value: buttonData?.value, type: buttonData?.type }));
      });

      return acc;
    }, []);
  }

  render() {
    const keyboard = createElement('div', ['keyboard', ...this.props.className]);
    keyboard.addEventListener('click', this.props.onClick);

    this.keyboardMarkup.forEach((marckupRow) => {
      const div = createElement('div', ['keyboard', 'row']);
      keyboard.append(div);
      marckupRow.forEach((markupElement) => {
        const buttonData = this.buttons.find((buttonInfo) => markupElement === buttonInfo.value);
        const button = new Button({ value: buttonData?.value, type: buttonData?.type, className: ['keyboard__button'] });

        div.append(button.render());
      });
    });

    return keyboard;
  }
}
