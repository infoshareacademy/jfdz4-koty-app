import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

import FilterProducts from './FilterProducts'

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


                    {
                        this.props.products.fetching ? 'Pobieranie produktów...' : null
                    }

                    {
                        this.props.products.error || null
                    }

                    {
                        this.props.products.data !== null ?

                            <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>ZDJĘCIE</th>
                                <th>NAZWA PRODUKTU</th>
                                <th>CENA</th>
                                <th>OCENA</th>
                                <th>SZCZEGOŁY PRODUKTU</th>

                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.products.data.map(
                                        product => <tr key={product.id}>
                                            <td><img src={product.image}/></td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.review}</td>
                                            <td>SZCZEGÓŁY</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                            </Table>: null

                    }
                </div>
            )
        }
    }
)