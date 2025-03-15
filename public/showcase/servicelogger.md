const MyComponet = () => {
const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
console.log(e);
}

    return (
    	<input type="text" onChange={handleOnChange} />
    );

}
