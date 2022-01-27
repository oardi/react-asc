<Menu
	toggle={<Button>Menu Button</Button>}
>
	<MenuItem type="header">
		This is a header
	</MenuItem>
	<MenuDivider />
	<MenuItem onClick={() => handleClick('1')}>
		Action 1
	</MenuItem>
	<MenuItem onClick={() => handleClick('2')}>
		Action 2
	</MenuItem>
	<MenuItem onClick={() => handleClick('3')}>
		Action 3
	</MenuItem>
</Menu>
