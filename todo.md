### hooks
- usePageScreenSize
	- get current PageSize in sm, md, lg, xxl

### CssTransitipon

-   onTransition toggle
    -- abort previous transition (toggle during toggle)
    -- only on transition at a time

        // szenarios
        // initial visible
        // - no animation
        // initial not visible
        // - hidden
        // show item which was invisible
        // renderAnimation
        // hide item which is visible
        // renderAnimation

### ListItemAction

-   check color

### select

-   multiselect bug

### menu

-   use menuItems
-   reuse menuItems in autoComplete and Select

### autocomplete

-   start to filter on X chars
-   highlight filter
-   check in form

### stepper

-   set selected with step

### radio

-   add component
-   include to form

### form

-   validation select -> red border is missing
-   novalidate to form-input to disable default behaviour
-   getControl - setControl from outside for disable?
-   input debounce
-   select - add "choose" only if needed with config?
-   handle date and time
-   add generic interface for controly keys -> IControls<T>
-   password autocomplete
-   prepend, append inputGroup

### modal

-   cancel should not throw unhandled error -> ModalResult.cancel?

### Theme

-   css vars
-   theme provider

## Components

### select

-   search
-   optionsGroup
-   icons

### datepicker

-   add component (formControl)

### timepicker

-   add component (formControl)

### switch

-   ?

translations?

Lazy loading für list etc?
scroll für nachladen?
