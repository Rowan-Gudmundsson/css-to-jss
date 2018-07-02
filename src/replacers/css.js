export const hyphonatedCss = classes => (match, p1, p2, p3, offset, string) => {
  return `\t\t\t${p1}${p2.charAt(0).toUpperCase() + p2.substr(1)}: '${p3}',\n`;
}

export const simpleCss = classes => (match, p1, p2, offset, string) => {
  return `\t\t\t${p1}: '${p2}',\n`;
}
