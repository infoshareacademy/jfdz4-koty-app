import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'


import './App.css'

export default connect(
    state => ({
        addFavorite: state.favoriteItem
    })
)(
    class Lista extends React.Component {
        componentWillMount() {

        }

        render() {

            const favoriteProduct = this.props.addFavorite

             return (
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

                         console.log(favoriteProduct),
                       <tr>
                                     <td style={{verticalAlign: 'middle'}}><img src={favoriteProduct.image}/></td>
                                     <td style={{verticalAlign: 'middle'}}>{favoriteProduct.name}</td>
                                     <td style={{verticalAlign: 'middle'}}><p><strong>Allegro: </strong>{favoriteProduct.price_allegro}</p><p><strong>Ceneo: </strong>{favoriteProduct.price_ceneo}</p><p><strong>Ebay: </strong>{favoriteProduct.price_ebay}</p></td>
                                     <td style={{verticalAlign: 'middle'}}>{favoriteProduct.review} / 5</td>
                                     <td style={{verticalAlign: 'middle'}}>
                                         <p><Link to={'/products/' + favoriteProduct.id}>Szczegóły</Link></p>

                                     </td>
                                 </tr>

                     }
                     </tbody>
                 </Table>
             )




        }
    }
)