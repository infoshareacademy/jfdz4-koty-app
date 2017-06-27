import React from 'react'
import { connect } from 'react-redux'


import './App.css'

export default connect(
    state => ({
        products: state.products,
        addFavorite: state.addFavorite
    }),
    dispatch => ({
        success: data => dispatch({
            type: 'products/FETCH__SUCCESS',
            data: data
        })
    })
)(
    class Products extends React.Component {
        componentWillMount() {
            fetch(
                `${process.env.PUBLIC_URL}/data/productsBase.json`
            ).then(
                response => response.json().then(
                    data => this.props.success(data)
                )
            )
        }

        render() {
            const products = this.props.products.data





        }
    }
)