// Default 
<div>
	<ExpansionPanel header={'header 1'}>
		Some Content 1
	</ExpansionPanel>
	<ExpansionPanel header={'header 2'} isExpanded={true}>
		Some Content 2
	</ExpansionPanel>
	<ExpansionPanel header={'header 3'}>
		Some Content 3
	</ExpansionPanel>
</div>

// Controlled ExpansionPanel
const [expanded, setExpanded] = React.useState<string | false>(false);

const handleChange = (panelKey: string) => (event: React.MouseEvent, isExpanded: boolean) => {
	setExpanded(isExpanded ? panelKey : false);
};

<div>
	<ExpansionPanel
		header={'header 1'}
		onChange={handleChange('panel1')}
		isExpanded={expanded === 'panel1'}>
		Some Content 1
	</ExpansionPanel>
	<ExpansionPanel
		header={'header 2'}
		onChange={handleChange('panel2')}
		isExpanded={expanded === 'panel2'}>
		Some Content 2
	</ExpansionPanel>
	<ExpansionPanel
		header={'header 3'}
		onChange={handleChange('panel3')}
		isExpanded={expanded === 'panel3'}>
		Some Content 3
	</ExpansionPanel>
</div>
