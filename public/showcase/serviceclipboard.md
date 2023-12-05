const MyComponet = () => {
	const handleOnClick = () => {
		clipboardService.copy("some text");
	}

    return (
    	<Button onClick={handleOnClick}>
    		copy to clipboard
    	</Button>
    );

}
