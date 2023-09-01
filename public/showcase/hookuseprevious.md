const MyComponent = () => {
	const [id, setId] = useState<string>('');
	const prevId: string = usePrevious(id);

    useEffect(() => {
    	if (id !== prevId) {
    		// doSomething...
    	}
    }, [id]);

    return (
    	...
    );
}
