import fs from 'fs';

const dir = './dist';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

fs.copyFile('./package-lib.json', './dist/package.json', err => {
	if (err) throw err;
	console.log('copy and rename package-lib complete!');
});

fs.copyFile('./readme.md', './dist/readme.md', err => {
	if (err) throw err;
	console.log('copy readme complete!');
});
