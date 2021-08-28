import { getOperatorsResult } from '../../utils/operand';

const operatorFunctionMap = {
  number: (operand1, operand2, operator, app) => (!operator ? (app.operand1 = (operand1 + operand2)) : getOperatorsResult(operand1, operator, operand2)),
  operator: (operand1, operand2, operator, app) => (app.operator = operand2),
  evaluate: (app) => (app.operator = null),
};
const operatorPrintMap = {
  true: (display, operand1, newOperand, operand2, operator) => display.showOnDisplay(newOperand),
  false: (display, operand1, newOperand, operand2, operator) => display.showOnDisplay(operand2),
};
export const calculateIfNumber = (operand1, buttonType, operand2, operator, display, app) => {
  console.log(` operand1: ${operand1} buttonType= ${buttonType} operator: ${!operator} operand2: ${operand2}`);
  const classByType = operatorFunctionMap[buttonType];
  const operators = operatorPrintMap[!operator];
  const newOperator1 = classByType(operand1, operand2, operator, app);
  console.log(newOperator1);
  operators(display, operand1, newOperator1, operand2);
  console.log(classByType);
};
