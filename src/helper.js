export default {
	defaultDesc( desc ) {
		return [ <p>{ desc }</p> ];
	},
	defaultList( list ) {
		const _list = [];
		list.forEach( listItem => {
			_list.push( <li>{ listItem }</li> );
		} );
		return _list;
	},
};
