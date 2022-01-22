const fs = require('fs');

const dir = './dist';

if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
}

fs.copyFile('./changelog.md', './dist/changelog.md', (err) => {
	if (err) throw err;
	console.log('copy changelog complete!');
});
