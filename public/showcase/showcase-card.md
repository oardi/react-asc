# Test

`asdf`

```js
import snarkdown from 'snarkdown';

let md = '_this_ is **easy** to `use`.';
let html = snarkdown(md);
console.log(html);
// <em>this</em> is <strong>easy</strong> to <code>use</code>.
```
