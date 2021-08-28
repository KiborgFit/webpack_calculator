const TypeToClassNameMap = {
  number: 'button--number',
  operator: 'button--operator',
  evaluate: 'button--evaluate',
  undefined: 'button--fake',
};

/**
 * @param {Array<String>} classNames
 * @param {String} type
 * @param {Boolean} isFake
 * @returns {Array<String>} array pf string
 */
export const getButtonClassList = (classNames, type, isFake) => {
  const classes = [];
  const classByType = TypeToClassNameMap[type];
  classes.push(classByType);

  if (isFake) {
    classes.push('button--fake');
  }
  return [...classNames, ...classes];
};
