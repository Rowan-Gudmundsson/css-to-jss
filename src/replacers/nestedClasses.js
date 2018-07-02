export const nestedHyphonatedAnd = classes => (match, p1, p2, offset, string) => {
  classes.add(`${p1}-${p2}`);
  return `\t\t'&$${p1}-${p2}': {\n`;
};

export const nestedSimpleAnd = classes => (match, p1, offset, string) => {
  classes.add(p1);
  return `\t\t'&$${p1}': {\n`;
};

export const nestedHyphonated = classes => (match, p1, p2, offset, string) => {
  classes.add(`${p1}-${p2}`);
  return `\t\t'& $${p1}-${p2}': {\n`;
};

export const nestedSimple = classes => (match, p1, offset, string) => {
  classes.add(p1);
  return `\t\t'& $${p1}': {\n`;
};
