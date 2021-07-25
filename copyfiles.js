const fs = require('fs');

const dir = './lib';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

fs.copyFile('./package-lib.json', './lib/package.json', (err) => {
	if (err) throw err;
	console.log('copy and rename package-lib complete!');
});

fs.copyFile('./readme.md', './lib/readme.md', (err) => {
	if (err) throw err;
	console.log('copy readme complete!');
});

fs.copyFile('./changelog.md', './public/changelog.md', (err) => {
	if (err) throw err;
	console.log('copy changelog complete!');
});
