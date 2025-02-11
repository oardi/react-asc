#! /usr/bin/env node
import shell from 'shelljs';

shell.exec('npm run build:lib');
shell.cd('dist');
shell.exec('git init');
shell.exec('git add .');
shell.exec("git commit -m 'Update'");
shell.echo('done!');
shell.echo('');
shell.echo('How to install locally:');
shell.echo('');
shell.echo('1. Stop serving');
shell.echo('2. Run command:');
shell.echo('');
shell.echo(`npm install -f --no-save git+file:///${process.cwd()}`);

shell.exit(0);
