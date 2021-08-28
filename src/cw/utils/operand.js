const OperatorNameMap = {
  '+': (operand1, operand2) => (parseFloat(operand1) + parseFloat(operand2)),
  '-': (operand1, operand2) => (parseFloat(operand1) - parseFloat(operand2)),
  '*': (operand1, operand2) => (parseFloat(operand1) * parseFloat(operand2)),
  '/': (operand1, operand2) => (parseFloat(operand1) / parseFloat(operand2)),
  '+/-': (operand1) => (parseFloat(operand1) * -1),
};

export const getOperatorsResult = (operand1, buttonValue, operand2) => {
  const classByType = OperatorNameMap[buttonValue];
  return classByType(operand1, operand2);
};
