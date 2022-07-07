const MyComponent = () => {
	const windowSize = useWindowSize();

	useEffect(() => {
		windowSize && checkIsMobile(windowSize.height, windowSize.width);
	}, [windowSize]);

	return (
		<></>
	);
}
