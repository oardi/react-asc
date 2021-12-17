const [hoverRef, isHovered] = useHover();


return (
	<div ref={hoverRef as any}>
		...isHovered
	</div>
)
