import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './App.css'

export default connect(
    state => ({
        products: state.products,
        searchPhrase: state.productsSearching.searchPhrase,
        addFavorite: state.favoriteItem.addFavorite
    }),
    dispatch => ({
        setSearchPhrase: event => dispatch({
            type: 'productsSearching/SET_SEARCH_PHRASE',
            searchPhrase: event.target.value
        }),
        success: data => dispatch({
            type: 'products/FETCH__SUCCESS',
            data: data
        }),
        addFavorite: item => dispatch({
            type: 'products/ADD__FAVORITE',
            addFavorite: item
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
            const addFavorite = this.props.addFavorite
            return (
                <div>
                    <div>
                        <h4 className="szukajka">Czego dzisiaj szukasz?</h4>
                        <input style={{width: '100%', margin: '0 0 30px 0' }} value={searchPhrase} onChange={setSearchPhrase}/>
                        <ul>
                            {

                                <Table striped responsive bordered condensed style={{textAlign: 'center'}}>
                                    <thead>
                                    <tr>
                                        <th>ZDJĘCIE</th>
                                        <th>NAZWA PRODUKTU</th>
                                        <th>CENA</th>
                                        <th>NAJLEPSZA CENA</th>
                                        <th>OCENA</th>
                                        <th>AKCJE</th>
                                    </tr>
                                    </thead>
                                    <tbody >
                                    {
                                        products
                                        === null ?
                                            null :
                                            products.filter(
                                                product => searchPhrase.length < 2  ? false : (
                                                    searchPhrase.split('').every(
                                                        letter => product.name.toLowerCase().includes(letter.toLowerCase())
                                                    )
                                                )
                                            ).slice(0, 10).map(
                                                product => <tr key={product.id}>
                                                    <td style={{verticalAlign: 'middle'}}><Link to={'/products/' + product.id}><img
                                                        style={{borderRadius: '10px', border: "1px #21324f solid"}}
                                                        alt="costam" src={product.image}/></Link></td>
                                                    <td style={{verticalAlign: 'middle'}}>{product.name}</td>
                                                    <td style={{verticalAlign: 'middle'}}><p>
                                                        <strong>Allegro: </strong>{product.price_allegro} PLN</p><p><strong>Ceneo: </strong>{product.price_ceneo} PLN</p><p><strong>Ebay: </strong>{product.price_ebay} PLN</p></td>
                                                    <td style={{verticalAlign: 'middle'}}>
                                                        <p style={{color: 'bronze', fontWeight: '800'}}>
                                                            Najlepsza cena! </p><p style={{color: 'red', fontWeight: '600'}}>
                                                        {
                                                            Math.min(product.price_allegro, product.price_ceneo, product.price_ebay) + ' PLN'
                                                            }
                                                        </p>
                                                    </td>
                                                    <td style={{verticalAlign: 'middle'}}>{product.review} / 5</td>
                                                    <td style={{verticalAlign: 'middle'}}>
                                                        <p className="hiperlacze"><Link to={'/products/' + product.id}>Szczegóły</Link>
                                                        </p>
                                                        <p className="hiperlacze" onClick={() => {
                                                            addFavorite(product)
                                                        }}>
                                                            <Link to={'/favorite'}>Zapisz wyszukiwanie</Link></p>
                                                    </td>
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