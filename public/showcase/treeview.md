<TreeView
	data={[
		{ id: 1, label: 'A' },
		{
			id: 2, label: 'B', children: [
				{
					id: 3, label: 'B11', children: [
						{ id: 4, label: 'B21' }
					]
				}
			]
		},
		{ id: 5, label: 'C' },
		{
			id: 6, label: 'D', children: [
				{ id: 7, label: 'D11' },
				{ id: 8, label: 'D12' }
			]
		}
	]}
	onSelect={(items) => handleSelect(items)}
/>
