//  Simple List

<List>
	<ListItem>
		<ListItemText primary="lorem ipsum" />
	</ListItem>
	<ListItem disabled>
		<ListItemText primary="lorem ipsum" />
	</ListItem>
</List>


// Two Lines

<List>
	<ListItem onClick={handleClickItem}>
		<ListItemText 
			primary="1st lorem ipsum" 
			secondary="2nd lorem ipsum" 
		/>
	</ListItem>
	<ListItem onClick={handleClickItem}>
		<ListItemText 
			primary="1st lorem ipsum" 
			secondary="2nd lorem ipsum" 
		/>
	</ListItem>
</List>


// Avatar

<List >
	<ListItem>
		<ListItemAvatar avatar={<UserCircleSolidIcon />} />
		<ListItemText primary="lorem ipsum" />
	</ListItem>
	<ListItem>
		<ListItemAvatar avatar={<span>2</span>} />
		<ListItemText primary="lorem ipsum" />
	</ListItem>
</List>


//  Icon

<List>
	<ListItem>
		<ListItemIcon icon={<HomeSolidIcon />} />
		<ListItemText primary="lorem ipsum" />
	</ListItem>
</List>


// Action Item

<List>
	<ListItem>
		<ListItemText primary="lorem ipsum" />
		<ListItemAction>
			<IconButton 
				onClick={handleClickAction} 
				icon={<HomeSolidIcon />} 
			/>
		</ListItemAction>
	</ListItem>
	<ListItem>
		<ListItemText primary="lorem ipsum" />
		<ListItemAction>
			<IconButton 
				color={COLOR.primary} 
				onClick={handleClickAction} 
				icon={<HomeSolidIcon />} 
			/>
		</ListItemAction>
	</ListItem>
</List>


// Colors

<List>
	<ListItem color={COLOR.primary}>
		primary
	</ListItem>
	<ListItem color={COLOR.accent}>
		accent
	</ListItem>
	<ListItem color={COLOR.secondary}>
		secondary
	</ListItem>
	<ListItem color={COLOR.light}>
		light
	</ListItem>
	<ListItem color={COLOR.dark}>
		dark
	</ListItem>
</List>
