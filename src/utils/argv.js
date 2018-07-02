export const getArgs = () => {
  let output;
  let filename;
  let mui;

  const argv = process.argv;
  const filenameIndex = argv.indexOf('--filename');
  const outputIndex = argv.indexOf('--output');
  const muiIndex = argv.indexOf('--mui');

  if (filenameIndex === -1) filename = 'style.css';
  else filename = argv[filenameIndex + 1];

  if(outputIndex === -1) output = 'style.jss';
  else output = argv[outputIndex + 1];

  if (muiIndex === -1) mui = false;
  else mui = true;

  return {
    output,
    filename,
    mui,
  };
};
