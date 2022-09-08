const MyExample = () => {

	const [value, setValue] = useState<number>(0);

	const handleOnChange = (index: number): void => {
		void snackbarService.show(`you selected step ${index + 1}`);
		setValue(index);
	};

	const handleOnFinish = (): void => {
		void snackbarService.show('you reached the end');
	};

	return (
		<Stepper
			value={value}
			onChange={handleOnChange}
			onFinish={handleOnFinish}
		>
			<Step value="1" label="Step 1">
				Content 1 Content 1 Content 1
			</Step>
			<Step value="2" label="Step 2">
				Content 2 Content 2 Content 2<br />
				Content 2 Content 2 Content 2
			</Step>
			<Step value="3" label="Step 3">
				Content 3 Content 3 Content 3<br />
				Content 3 Content 3 Content 3<br />
				Content 3 Content 3 Content 3
			</Step>
			<Step value="4" label="Step 4">
				Content 4 Content 4 Content 4<br />
				Content 4 Content 4 Content 4<br />
				Content 4 Content 4 Content 4<br />
				Content 4 Content 4 Content 4
			</Step>
		</Stepper>
	);
}
