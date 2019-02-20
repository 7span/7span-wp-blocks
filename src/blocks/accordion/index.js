const { registerBlockType } = wp.blocks;
import blockGroup from '../../components/block-group';
import helper from '../../helper';
import icon from '../../icons';

const faqs = [
	{
		title: 'Does your services are compliance with Google policies?',
		desc: helper.defaultDesc(
			'Absolutely YES, we use only Safe techniques for the delivery of reviews as we do not involve any automated systems, bots or emulators into the process. All reviews are from different IPs, devices and individuals. We\'ve never had any cases that the client’s app or account was removed from the store due to our service.We totally follow all the rules of Android Google Play Market, ensuring that all the reviews we provide are natural.'
		),
	},
	{
		title: 'Will I get immediate results?',
		desc: helper.defaultDesc(
			'You will notice the emergence of app reviews almost immediately, as soon as we start the campaign. The campaign usually starts within the next 12-24 working hours after the order is placed, in case all order details are provided fully & correctly. If we need some additional information to start the campaign, we\'ll contact you shortly to get it.During the set time the number of your reviews will start growing slowly.We can assure you that the number of reviews will be scaled up till your app gets a full number of ordered reviews.'
		),
	},
	{
		title: 'How does this work for apps?',
		desc: helper.defaultDesc(
			'Google Play Market contains over 1,500,000 applications and to become visible the app needs lots of installs, great reviews and high ratings. We guarantee that each review that we provide will have an effect on the potential users. Excellent reviews and high ranking are of high importance for every app. This will help to increase the overall ranking of the application until it gets into the “Popular Apps” list.'
		),
	},
	{
		title: 'What are your guarantees?',
		desc: helper.defaultDesc(
			'We guarantee that you will receive all reviews you have ordered. We assure you that the reviews you will get are 100% from real app users. If we appear unable to deliver you the reviews that you ordered, we will refund the money in accordance to the number of reviews that you have not received.'
		),
	},
	{
		title: 'Can I provide content for reviews from my end?',
		desc: helper.defaultDesc(
			'Absolutely yes! If you want strict control over the quality of every individual review, you can consider sending content for each review from your end. Our users will just copy and paste these reviews on your app.'
		),
	},
	{
		title: 'My app is paid one, can I get reviews for the same?',
		desc: helper.defaultDesc(
			'Unfortunately we do not work with paid apps. Our services are available only for the apps which are FREE and available GLOBALLY.'
		),
	},
];

const template = faqs.map( faq => [ 'sevenspan/accordion-item', faq ] );

registerBlockType( 'sevenspan/accordion', {
	title: 'Accordion',
	icon: icon( 'accordion' ),
	category: 'sevenspan-blocks',

	...blockGroup( {
		className: 'accordion-group',
		editor: {
			grid: 1,
		},
		template,
		allowedBlocks: [ 'sevenspan/accordion-item' ],
	} ),
} );
