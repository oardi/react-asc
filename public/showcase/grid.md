// simple row column setup with auto align columns
<Row>
	<Column>col 1</Column>
	<Column>col 2</Column>
	<Column>col 3</Column>
</Row>

// defining the width of one column, rest will be set automatically
// size={20} means 20%
<Row>
	<Column size={20}>col 1</Column>
	<Column>col 2</Column>
	<Column>col 3</Column>
</Row>

// defining the direction to be "row"
// this will take affect even on smaller screens
<Row direction='row'>
	<Column size={20}>col 1</Column>
	<Column>col 2</Column>
	<Column>col 3</Column>
</Row>
