const MyComponent = () => {
	const { isMobile } = useMobileDetect();

	useEffect(() => {
		// listen to screensize change
	}, [isMobile]);

	return (
		{ isMobile ? 'mobile screen size' : 'no mobile screen size' }
	);
}
