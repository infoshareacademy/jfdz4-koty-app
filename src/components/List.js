import React from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
import {Link} from 'react-router-dom'


import './App.css'

export default connect(
    state => ({
        addFavorite: state.favoriteItem,
        showYourList: state.showYourList.showList,
    }), dispatch => ({
        showList: event => dispatch({
            type: 'SHOW__LIST',
            showList: event

        }),


    })
)(
    class Lista extends React.Component {

        render() {

            const favoriteProduct = this.props.addFavorite
            const showYourList = this.props.showYourList
            const showList = this.props.showList

            return (

                <div>
                    <button onClick={() => showList('showListOn')}>Pokaż listę</button>
                    { showYourList === 'showListOn' ?
                        <Table striped bordered condensed hover style={{textAlign: 'center'}}>
                            <thead>
                            <tr>
                                <th>ZDJĘCIE</th>
                                <th>NAZWA PRODUKTU</th>
                                <th>CENA</th>
                                <th>OCENA</th>
                                <th>AKCJE</th>
                            </tr>
                            </thead>
                            <tbody >
                            {

                                <tr>
                                    <td style={{verticalAlign: 'middle'}}><img src={favoriteProduct.addFavorite.image}/></td>
                                    <td style={{verticalAlign: 'middle'}}>{favoriteProduct.addFavorite.name}</td>
                                    <td style={{verticalAlign: 'middle'}}><p>
                                        <strong>Allegro: </strong>{favoriteProduct.addFavorite.price_allegro}</p><p>
                                        <strong>Ceneo: </strong>{favoriteProduct.addFavorite.price_ceneo}</p><p>
                                        <strong>Ebay: </strong>{favoriteProduct.addFavorite.price_ebay}</p></td>
                                    <td style={{verticalAlign: 'middle'}}>{favoriteProduct.addFavorite.review} / 5</td>
                                    <td style={{verticalAlign: 'middle'}}>
                                        <p><Link to={'/products/' + favoriteProduct.addFavorite.id}>Szczegóły</Link></p>

                                    </td>
                                </tr>

                            }
                            </tbody>
                        </Table> : <p>Musisz kliknąć aby zobaczyć swoją listę</p>}
                </div>
            )


        }
    }
)