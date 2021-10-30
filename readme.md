# react-asc
handcrafted components inspired by Material Design and bundled with rollup.


## showcase
react-asc interactive showcase [link](https://react-asc.netlify.app)


## usage

### install package
`npm install react-asc`


### install twitter bootstrap 5
react-asc aims to get rid of bootstrap - but for now you need Bootstrap

`npm install bootstrap`


### Include needed scss files

```scss
@import "~bootstrap/scss/bootstrap";
@import "react-asc/react-asc.scss";
```


### Start using it
```js
import React from 'react';
import { Button } from 'react-asc';

const MyApp = () => {
	return (
		<Button>some button</Button>
	)
}
```


## Included

- Alert (beta)
- AppBar
- AutoComplete (beta)
- Backdrop
- Badge
- Button
- ButtonGroup
- Breadcrumb
- Card
- Checkbox
- Chip
- ConditionalWrapper
- DateSelect
- Drawer
- ExpansionPanel
- FileInput
- FloatingActionButton
- Form (beta)
- Grid
- Icon
- IconButton
- Link
- List
- LoadingIndicator
- Modal + ModalService
- Menu
- NumberSelect
- Select
- Snackbar + SnackbarService
- SpeedDial
- Stepper (beta)
- Table (beta)
- Tabs
- TimeSelect
- Textarea
- Tooltip
- TreeView (beta)
- Typography


## Credit 

uses fontawesome icons as SVGs
https://fontawesome.com/license
