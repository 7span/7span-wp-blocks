const summary = (
	<p>
		Enhance app rating, improve search rankings and boost organic downloads for
		high-value keywords! Popoulate your "Most Relevant" section with carefully
		crafted reviews from our pool of experts
	</p>
);

export default {
	title1: {
		source: 'text',
		selector: '.hero__title-top',
		default: 'Get (positive) Reviews',
	},
	title2: {
		source: 'text',
		selector: '.hero__title-bottom',
		default: 'From Real People',
	},
	summary: {
		type: 'array',
		source: 'children',
		selector: '.hero__desc',
		default: [ summary ],
	},
	imageAlt: {
		attribute: 'alt',
		selector: '.ss-image img',
	},
	imageSrc: {
		attribute: 'src',
		selector: '.ss-image img',
	},
	label: {
		source: 'text',
		selector: '.ss-button',
		default: 'View Pricing',
	},
	url: {
		selector: '.ss-button',
		source: 'attribute',
		attribute: 'href',
	},
	size: {
		selector: '.ss-button',
		default: 'large',
	},
	style: {
		selector: '.ss-button',
		default: 'outline',
	},
};
