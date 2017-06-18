import React from 'react'
import { connect } from 'react-redux'
// import { Table} from 'react-bootstrap'


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
                            { products
                                 === null ?
                                    null :
                                    products.filter(
                                        product => searchPhrase === '' ? false : (
                                            searchPhrase.split('').every(
                                                letter => product.name.toLowerCase().includes(letter.toLowerCase())
                                            )
                                        )
                                    ).slice(0, 10).map(
                                        product => (
                                            <li key={product.id}>
                                                {product.name}
                                            </li>
                                        )
                                    )
                            }
                        </ul>
                    </div>




                </div>
            )
        }
    }
)