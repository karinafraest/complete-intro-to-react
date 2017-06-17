var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	/*all functions must include a render method that returns Markup*/
	render: function() {
		return(
			div(null,
				h1({style: {color: this.props.color, fontweight: "bold"} }, this.props.title)
			)
		)
	}
});
	/*helper method that creates an element */
var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
	render: function(){
		return (
			div(null,
				MyTitleFactory({title: "props are the best", color: "peru"}),
				MyTitleFactory({title: "semicolons are the worst", color: "mediumaquamarine"}),
				MyTitleFactory({title: "its ok if you use semicolons", color: "rebeccapurple"}),
				MyTitleFactory({title: "i am a title as well", color: "darkblue"})
			)
		)
	}
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById("app"))