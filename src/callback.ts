import fs from 'fs';

const inputFilepath = './file/input.txt';
const outputFilepath = './file/output_callback.txt';

const main = () => {
  fs.readFile(inputFilepath, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    fs.writeFile(outputFilepath, data, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(`Write to ${outputFilepath}`);
    });
  });
};

main();
