import { promises as fs } from 'fs';

const inputFilepath = './file/input.txt';
const outputFilepath = './file/output_promise.txt';

const main = async () => {
  try {
    const data = await fs.readFile(inputFilepath, 'utf-8');
    console.log(data);

    await fs.writeFile(outputFilepath, data);
    console.log(`Write to ${outputFilepath}`);
  } catch (e) {
    console.log(e);
  }
};

main();
