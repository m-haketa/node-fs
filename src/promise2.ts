import { promises as fs } from 'fs';

const inputFilepath = './file/input.txt';
const outputFilepath = './file/output_promise2.txt';

const main = () => {
  fs.readFile(inputFilepath, 'utf-8')
    .then((data) => {
      console.log(data);
      return fs.writeFile(outputFilepath, data);
    })
    .then(() => {
      console.log(`Write to ${outputFilepath}`);
    })
    .catch((e) => {
      //err処理
    });
};

main();
