const MyComponet = () => {
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		loggerService.log(e);
	}

	return (
		<input type="text" onChange={handleOnChange} />
	);
}
