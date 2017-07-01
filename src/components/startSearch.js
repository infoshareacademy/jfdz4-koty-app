import React from 'react'
import './loader.css'
import { browserHistory } from 'react-router'

export default class startSearch extends React.Component {
    render() {
        return (

        <div className="loader">
            {
                setTimeout( () => (this.props.history.push('/Search')), 1000)
            }
        </div>

        )
    }
}