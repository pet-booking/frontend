import './style/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => <div><h1>hello</h1></div>

const container = document.createElement('div')
container.className = 'root'
document.body.appendChild(container)

ReactDOM.render(<App />, container)
