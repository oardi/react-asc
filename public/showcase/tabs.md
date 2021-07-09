export const TabsPage = () => {
	const [value, setValue] = useState(1);

	const handleChange = (event: any, newValue: number) => {
		setValue(newValue);
	}

	return (
		<Tabs
			value={value}
			fixed={settingValues.fixed}
			onChange={handleChange}
		>
			<Tab value={0} label="Tab 1" />
			<Tab value={1} label="Tab 2" />
			<Tab value={2} label={<div className="text-success">Tab 3 with css</div>} />
			<Tab value={3} label="Tab 4" disabled />
		</Tabs>

		<TabPanel value={value} index={0}>
			Tab1 Content
		</TabPanel>
		<TabPanel value={value} index={1}>
			Tab2 Content
		</TabPanel>
		<TabPanel value={value} index={2}>
			Tab3 Content
		</TabPanel>
		<TabPanel value={value} index={3}>
			Tab4 Content should never be displayed
		</TabPanel>
	);
}

