// Define some css transition

.hidden {
	display: none;
}

.fade-enter,
.fade-leave {
	transition: all 1s ease;
}

.fade-enter-start,
.fade-leave-end {
	opacity: 0;
}

.fade-enter-end,
.fade-leave-start {
	opacity: 1;
}


// use the component

<CssTransition show={isShow} className="fade">
	<div>
		some text
	</div>
</CssTransition>


// toggle the state
// needs to be undefined on start
const [isShow, setIsShow] = useState<boolean | undefined>(undefined);

<Button onClick={() => setIsShow(!isShow)}>
	toggle css transition
</Button>
