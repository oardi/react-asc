<Button onClick={() => handleClick()}>
	show drawer
</Button>

{isVisible &&
	<Drawer
		position={settingValues.position}
		permanent={settingValues.permanent}
		onClickBackdrop={handleClick}
	>
		some drawer content
	</Drawer>
}
