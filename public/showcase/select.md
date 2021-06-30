<Select
	id="myselect"
	name="myselect"
	className="form-control"
	multiple={settingValues.multiple}
	multipleMaxCountItems={settingValues.multipleMaxCountItems}
	options={[
		{ value: "1", label: 'one' },
		{ value: "2", label: 'two' },
		{ value: "3", label: 'three' },
		{ value: "4", label: 'four' },
		{ value: "5", label: 'five' },
		{ value: "6", label: 'six' },
		{ value: "7", label: 'seven' },
		{ value: "8", label: 'eight' },
		{ value: "9", label: 'nine' },
		{ value: "10", label: 'ten' },
		{ value: "11", label: 'eleven' },
		{ value: "12", label: 'twelve' },
		{ value: "13", label: 'thirteen' },
		{ value: "14", label: 'fourteen' },
		{ value: "15", label: 'fifteen' },
	]}
	onChange={handleOnChange}
	disabled={settingValues.disabled}
	value="2"
/>
