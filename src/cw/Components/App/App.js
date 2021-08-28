import Display from '../Dispaly/Display';
import { createElement } from '../../utils';
import './App.css';
import DefaultComponent from '../DefaultComponent';
import Keyboard from '../Keyboard/Keyboard';
import mockButtons from '../../../MOCK/mock_buttons';
import mockKeyboardMarkup from '../../../MOCK/mock_keyboardMarkup';
import {getOperatorsResult} from '../../utils/operand';
import {selectNumber} from '../../utils/operator-utils';
import {calculateIfNumber} from './CalculateIfNumber';

export default class App extends DefaultComponent {
  constructor(props) {
    super(props);

    this.keyboardMarkup = mockKeyboardMarkup;
    this.buttons = mockButtons;
    this.operand1 = null;
    this.operand2 = null;
    this.operator = null;

    this.display = new Display({ className: ['calculator__display'], value: 10 });
    this.keyboard = new Keyboard({
      className: ['calculator__keyboard'],
      keyboardMarkup: this.keyboardMarkup,
      buttons: this.buttons,
      onClick: this.handleClick,
    });
  }

  render() {
    const appWrapper = document.createDocumentFragment();

    const calculator = createElement('div', ['calculator']);

    const keyboardRender = this.keyboard.render();
    calculator.append(this.display.render(), keyboardRender);

    appWrapper.append(calculator);

    return appWrapper;
  }

  handleClick = (event) => {
    if(event.target.className !== 'button' ){

    const button = event.target;
    const buttonType = button.getAttribute('data-type');

    if (!this.operand1 ) {
      this.operand1 = button.value;
      this.display.showOnDisplay(button.value);
      return;
    }

    if (buttonType === "number"){
        this.numberParser(button.value)
    }

    if (buttonType === "operator" && !this.operatorFinder(this.operand1)){
      this.operatorParser(button.value)
    }

    if(buttonType === 'evaluate' ){
      this.operand1 = getOperatorsResult(this.operand1, this.operator, this.operand2)
      this.display.showOnDisplay(this.operand1);
      this.operator = null;
      this.operand2 = null;
    }
    }
  }

  numberParser(value){
    if (!this.operand2) {
      this.operand2 = "";
    }
    if( !this.operator ){
      this.operand1 = this.operand1 + value
      this.display.showOnDisplay(this.operand1);
    } else {
      this.operand2 = this.operand2 + value
      this.display.showOnDisplay(this.operand2);
    }
  }
  operatorParser(value){
      if(value === "+/-"){
        this.operand1 = getOperatorsResult(this.operand1, value)
        this.display.showOnDisplay(this.operand1);
        return;
       }

    if(!this.operand2){
      this.operator = value;
      return;
    }

    if(this.operator) {
      this.operand1 = getOperatorsResult(this.operand1, this.operator, this.operand2)
      this.display.showOnDisplay(this.operand1);
      this.operand2 = null;
      this.operator = value;
    } else
      this.operator = value;
    }

    operatorFinder(value){
      return value === '+' || value === '-' || value === '*' || value === '/';
    }
    operatorValidation(value){
      if(value === '.' && this.operand1.includes('.')){
       return -1;
      }
    }
}
