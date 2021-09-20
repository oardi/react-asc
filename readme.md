# react-asc
handcrafted components using Twitter Bootstrap, inspired by Material Design and bundled with rollup.

## showcase
react-asc showcase [link](https://react-asc.netlify.app)


## usage

### install package
`npm install react-asc`


### install twitter bootstrap 4.6

`npm install bootstrap@4.6`


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

- AppBar
- AutoComplete (v1)
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
- Form (v1)
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
- Stepper
- Table (v1)
- Tabs
- TimeSelect
- Textarea
- Tooltip
- TreeView (beta)
- Typography


## Credit 

uses fontawesome icons as SVGs
https://fontawesome.com/license
