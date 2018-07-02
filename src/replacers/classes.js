export const hyphonatedClass = classes => (match, p1, p2, offset, string) => {
  classes.add(`${p1}-${p2}`);
  return `\t'${p1}-${p2}': {\n`;
}

export const simpleClass = classes => (match, p1, offset, string) => {
  classes.add(`${p1}`);
  return `\t'${p1}': {\n`;
}
