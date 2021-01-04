## Install Preact Craft via Github

```js
npm install git+https://github.com/oardi/preact-craft.git
```


## Install Twitter Bootstrap 4.5

```js
npm install bootstrap@4.5
```


## Include needed scss files

```scss
@import "~bootstrap/scss/bootstrap";
@import "preact-craft/lib/preact-craft.scss";
```


## Start using the library

```js
import { Button } from 'preact-craft';

const MyApp = () => {
	return (
		<Button>some button</Button>
	)
}
```
