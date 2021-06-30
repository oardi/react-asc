<DropDown toggle={<Button>Dropdown button</Button>}>
	<DropDownItem type="header">
		This is a header
	</DropDownItem>
	<DropDownDivider />
	<DropDownItem onClick={() => handleClick('1')}>
		Action 1
	</DropDownItem>
	<DropDownItem onClick={() => handleClick('2')}>
		Action 2
	</DropDownItem>
	<DropDownItem onClick={() => handleClick('3')}>
		Action 3
	</DropDownItem>
</DropDown>
