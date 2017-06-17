var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	/*all functions must include a render method that returns Markup*/
	render: function() {
		return(
			div(null,
				h1(null, "check out this component")
			)
		)
	}
});
	/*helper method that creates an element*/
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
	render: function(){
		return (
			div(null,
				MyTitleFactory(MyTitle),
				MyTitleFactory(MyTitle),
				MyTitleFactory(MyTitle),
				MyTitleFactory(MyTitle)
			)
		)
	}
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById("app"))