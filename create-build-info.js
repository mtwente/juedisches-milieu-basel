const fs = require('fs');

function writeFile(filePath, content, joinChar = '\n') {
  try {
    fs.writeFileSync(filePath || '', content.join(joinChar));
  } catch (err) {
    console.error(err);
  }
}
const version = JSON.parse(fs.readFileSync('./package.json')).version;
const timestamp = new Date().toLocaleString('de-CH', { timeZone: 'UTC', timeZoneName: 'short' });

writeFile('./src/buildinfo.ts', ['// timestamp of build', `export const timestamp = '${timestamp}';`, '// version', `export const version = '${version}'`]);
