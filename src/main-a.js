import usedByA from './used-by-a.js';
import usedByBoth from './used-by-both.js';

import('./dynamically-imported/apply-color-and-message.js').then(({ default: apply }) => {
	apply('#a [data-used-by="a"]', usedByA);
	apply('#a [data-used-by="both"]', usedByBoth);
});

function loadTheComponent() {
	import('./Widget.html').then(({ default: Widget }) => {
		new Widget({
			target: document.querySelector('#widget-container')
		});
	});
}

loadTheComponent();