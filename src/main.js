import './style/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'

const container = document.createElement('div')
container.className = 'root'
document.body.appendChild(container)

ReactDOM.render(<App />, container)
