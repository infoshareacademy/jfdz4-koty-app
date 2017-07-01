import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'


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

            const products = this.props.addFavorite

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
                       <tr key={products.id}>
                                     <td style={{verticalAlign: 'middle'}}><img src={products.image}/></td>
                                     <td style={{verticalAlign: 'middle'}}>{products.name}</td>
                                     <td style={{verticalAlign: 'middle'}}><p><strong>Allegro: </strong>{products.price_allegro}</p><p><strong>Ceneo: </strong>{products.price_ceneo}</p><p><strong>Ebay: </strong>{products.price_ebay}</p></td>
                                     <td style={{verticalAlign: 'middle'}}>{products.review} / 5</td>
                                     <td style={{verticalAlign: 'middle'}}>
                                         <p><Link to={'/products/' + products.id}>Szczegóły</Link></p>

                                     </td>
                                 </tr>

                     }
                     </tbody>
                 </Table>
             )




        }
    }
)