const fs = require('fs');

const dir = './lib';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

fs.copyFile('./package-lib.json', './lib/package.json', (err) => {
	if (err) throw err;
	console.log('copy complete!');
});

fs.copyFile('./readme.md', './lib/readme.md', (err) => {
	if (err) throw err;
	console.log('copy complete!');
});
