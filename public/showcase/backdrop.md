<Button onClick={() => setIsShow(!isShow)}>
	{isShow ? 'hide' : 'show'}
</Button>

<div id="backdrop-container" style={{ height: '300px', position: 'relative' }}>
	show backdrop
</div>

{isShow &&
	<Backdrop target={document.body.querySelector('#backdrop-container') as HTMLElement} />
}
