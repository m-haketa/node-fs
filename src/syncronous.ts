import fs from 'fs';

const inputFilepath = './file/input.txt';
const outputFilepath = './file/output_syncronous.txt';

const main = () => {
  try {
    const data = fs.readFileSync(inputFilepath, 'utf-8');
    console.log(data);

    fs.writeFileSync(outputFilepath, data);
    console.log(`Write to ${outputFilepath}`);
  } catch (e) {
    console.log(e);
  }
};

main();
