const MyComponet = () => {
	const [searchText, setSearchText] = useState<string | undefined>('');

	useDebounce(
		() => { onChange && onChange(searchText); },
		debounce,
		[searchText]
	);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchText(e.target.value);
	}

	return (
		<input type="text" onChange={handleOnChange} />
	);
}
