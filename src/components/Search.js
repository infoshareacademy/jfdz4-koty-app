import React from 'react'
import { connect } from 'react-redux'
import { Table} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './App.css'

export default connect(
    state => ({
        products: state.products,
        searchPhrase: state.productsSearching.searchPhrase
    }),
    dispatch => ({
        setSearchPhrase: event => dispatch({
            type: 'productsSearching/SET_SEARCH_PHRASE',
            searchPhrase: event.target.value
        }),
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
            const searchPhrase = this.props.searchPhrase
            const setSearchPhrase = this.props.setSearchPhrase
            return (
                <div>
                    <div>
                        <input value={searchPhrase} onChange={setSearchPhrase}/>
                        <ul>
                            {

                                            <Table striped bordered condensed hover style={{textAlign: 'center'}}>
                                                <thead>
                                                <tr>
                                                    <th>ZDJĘCIE</th>
                                                    <th>NAZWA PRODUKTU</th>
                                                    <th>CENA</th>
                                                    <th>OCENA</th>
                                                    <th>SZCZEGOŁY PRODUKTU</th>
                                                </tr>
                                                </thead>
                                                <tbody >
                                                {
                                                    products
                                                    === null ?
                                                        null :
                                                        products.filter(
                                                            product => searchPhrase === '' ? false : (
                                                                searchPhrase.split('').every(
                                                                    letter => product.name.toLowerCase().includes(letter.toLowerCase())
                                                                )
                                                            )
                                                        ).slice(0, 10).map(
                                                        product => <tr key={product.id}>
                                                            <td style={{verticalAlign: 'middle'}}><img src={product.image}/></td>
                                                            <td style={{verticalAlign: 'middle'}}>{product.name}</td>
                                                            <td style={{verticalAlign: 'middle'}}>{product.price}</td>
                                                            <td style={{verticalAlign: 'middle'}}>{product.review} / 5</td>
                                                            <td style={{verticalAlign: 'middle'}}><Link to={'/products/' + product.id}>Szczegóły</Link></td>
                                                        </tr>
                                                    )
                                                }
                                                </tbody>
                                            </Table>


                            }

                        </ul>
                    </div>






                </div>
            )
        }
    }
)