import './index.css'
import 'materialize-css/dist/css//materialize.min.css'
import 'materialize-css'
import React from 'react'
import ReactDom from 'react-dom'

class App extends React.Component {
	render () {
		return (
			<h1>Hello</h1>
		)
	}
}

ReactDom.render(<App />, document.getElementById('app'))
