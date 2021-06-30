<TreeView
	data={[
		{ id: 1, name: 'A' },
		{
			id: 2, name: 'B', children: [
				{
					id: 3, name: 'B11', children: [
						{ id: 4, name: 'B21' }
					]
				}
			]
		},
		{ id: 5, name: 'C' },
		{
			id: 6, name: 'D', children: [
				{ id: 7, name: 'D11' },
				{ id: 8, name: 'D12' }
			]
		}
	]}
	onSelect={(items) => handleSelect(items)}
/>
