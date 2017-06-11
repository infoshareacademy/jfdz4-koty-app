import React from 'react'
import { connect } from 'react-redux'

export default connect(
    state => ({
        products: state.products
    }),
    dispatch => ({
        begin: () => dispatch({ type: 'products/FETCH__BEGIN' }),
        success: data => dispatch({ type: 'products/FETCH__SUCCESS', data }),
        fail: error => dispatch({ type: 'products/FETCH__FAIL', error }),
    })
)(
    class Products extends React.Component {
        componentWillMount() {
            this.props.begin()
            fetch(
                `${process.env.PUBLIC_URL}/data/productsBase.json`
            ).then(
                response => response.json()
            ).then(
                products => this.props.success(products)
            ).catch(
                error => this.props.fail('Połączenie przerwane')
            )
        }

        render() {
            return (
                <div>
                    <h1>Products</h1>
                    {
                        this.props.products.fetching ? 'Pobieranie produktów...' : null
                    }

                    {
                        this.props.products.error || null
                    }

                    {
                        this.props.products.data !== null ?
                            <ul>
                                {
                                    this.props.products.data.map(
                                        product => <li key={product.id}>{product.name}{product.price}</li>
                                    )
                                }
                            </ul> : null
                    }
                </div>
            )
        }
    }
)