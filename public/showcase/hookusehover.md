const MyComponent = () => {
	const [hoverRef, isHovered] = useHover();

	return (
		<div ref={hoverRef as any}>
			<span style={{ color: isHovered ? 'red' : 'green' }}>
				some text
			</span>
		</div>
	);
}
