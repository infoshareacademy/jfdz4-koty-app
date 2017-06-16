// import React from 'react'
// import { connect } from 'react-redux'
// import { Table, FormControl } from 'react-bootstrap'
//
//
// export default connect(
//     state => ({
//         products: state.products
//     }),
//     dispatch => ({
//         begin: () => dispatch({ type: 'products/FETCH__BEGIN' }),
//         success: data => dispatch({ type: 'products/FETCH__SUCCESS', data }),
//         fail: error => dispatch({ type: 'products/FETCH__FAIL', error }),
//     })
// )(
//     class Products extends React.Component {
//         componentWillMount() {
//             this.props.begin()
//             fetch(
//                 `${process.env.PUBLIC_URL}/data/productsBase.json`
//             ).then(
//                 response => response.json()
//             ).then(
//                 products => this.props.success(products)
//             ).catch(
//                 error => this.props.fail('Połączenie przerwane')
//             )
//         }
//
//         render() {
//             return (
//                 <div>
//                     <FormControl>
//                     </FormControl>
//
//
//                     {
//                         this.props.products.fetching ? 'Pobieranie produktów...' : null
//                     }
//
//                     {
//                         this.props.products.error || null
//                     }
//
//                     {
//                         this.props.products.data !== null ?
//
//                             <Table striped bordered condensed hover style={{textAlign: 'center'}}>
//                             <thead>
//                             <tr>
//                                 <th>ZDJĘCIE</th>
//                                 <th>NAZWA PRODUKTU</th>
//                                 <th>CENA</th>
//                                 <th>OCENA</th>
//                                 <th>SZCZEGOŁY PRODUKTU</th>
//
//                             </tr>
//                             </thead>
//                             <tbody >
//                                 {
//                                     this.props.products.data.map(
//                                         product => <tr key={product.id}>
//                                             <td style={{verticalAlign: 'middle'}}><img src={product.image}/></td>
//                                             <td style={{verticalAlign: 'middle'}}>{product.name}</td>
//                                             <td style={{verticalAlign: 'middle'}}>{product.price}</td>
//                                             <td style={{verticalAlign: 'middle'}}>{product.review}</td>
//                                             <td style={{verticalAlign: 'middle'}}>SZCZEGÓŁY</td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                             </Table>: null
//
//                     }
//                 </div>
//             )
//         }
//     }
// )