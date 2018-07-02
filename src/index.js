#!/usr/bin/env node

import fs from 'fs';
import { getArgs } from './utils/argv';
import replacers from './replacers';
import regexes from './regexes';

let classes = new Set();

const main = () => {
  const keys = Object.keys(replacers);
  const { output, filename, mui } = getArgs();
  fs.readFile(filename, (err, data) => {
    if(err) throw err;

    const result = keys.reduce((acc, curr) => (acc.replace(regexes[curr], replacers[curr](classes))), data.toString());
    fs.writeFile(output, `export default ${mui ? 'theme => (' : ''}{\n`);
    classes.forEach((item) => {
      fs.appendFile(output, `  '${item}': {},\n`);
    });
    fs.appendFile(output, result);
    fs.appendFile(output, `}${mui ? ')' : ''};`);
  });
}

main();
