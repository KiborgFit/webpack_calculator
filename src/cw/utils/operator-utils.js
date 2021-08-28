const TypeToClassNameMap = {
  number: (operand1, operand2) => operand1 + operand2,
  operator: 'operator',
  evaluate: 'evaluate',
};

export const selectNumber = (operand1, buttonType, operand2) => {
  const classByType = TypeToClassNameMap[buttonType];
  console.log(classByType);
  return classByType(operand1, operand2);
};

