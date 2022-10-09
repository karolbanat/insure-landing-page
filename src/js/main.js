const toggleButton = document.querySelector('.toggle-button');

const DATA_STATES = {
	expanded: 'data-expanded',
};

const handleToggleButton = e => {
	const button = e.target;
	const prevExpanded = button.getAttribute('aria-expanded') === 'true' ? true : false;
	const buttonTarget = button.dataset.target;
	const targetElement = document.querySelector(buttonTarget);
	button.setAttribute('aria-expanded', !prevExpanded);
	targetElement.toggleAttribute(DATA_STATES.expanded);
	toggleBodyVerticalScroll(!prevExpanded);
};

const toggleBodyVerticalScroll = isExpanded => {
	document.body.style.overflowY = isExpanded ? 'hidden' : 'visible';
};

toggleButton.addEventListener('click', handleToggleButton);
