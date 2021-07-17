import React, { useState } from 'react';
import { NumberSelect } from 'react-craft';

const NumberSelectExample = () => {

	const [value, setValue] = useState<number>(10);

	const handleOnChange = (e: number) => {
		setValue(e);
	}

	return (
		<NumberSelect
			from={10}
			to={20}
			value={value}
			onChange={handleOnChange}
		/>
	);
}
