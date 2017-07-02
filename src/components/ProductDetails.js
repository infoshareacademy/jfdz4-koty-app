import React from 'react'
import {Link} from 'react-router-dom'

class Product extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

        fetch(
            process.env.PUBLIC_URL + '/data/productsBase.json'
        ).then(
            response => response.json()
        ).then(
            products => this.setState({
                products: products
            })
        )
    }


    render() {


        const productId = parseInt(this.props.match.params.productId, 10)
        const product = this.state.products.find(
            product => product.id === productId
        )


        return (

            <div style={{color: 'white', background: '#000d1a', boxShadow: '9px 9px 29px #21324f'}}>
                {product === undefined ? <div> Fetching</div> :
                    <div style={{border: '2px solid #FF7D00'}}>
                        <Link to='/Search'><img src="https://raw.githubusercontent.com/infoshareacademy/jfdz4-koty-app/productDetails-style/public/data/image/arrowBack.jpg" style={{float: 'left', height: '40px', width: '40px', marginRight: '20px'}}/></Link>
                        <h1 style={{fontFamily: 'Verdana', fontWeight: '800', color: '#FF7D00'}}> {product.name} </h1>
                        <img src={product.image} style={{marginLeft: '4px', marginBottom: '8px', border: '1px solid #999999', boxShadow: '2px 2px 22px'}}/>
                        <p style = {{fontFamily: 'Verdana', fontWeight: '700', fontSize: '27px', color: '#FF7D00'}}>Cena: {product.price}</p>
                        <p style = {{fontFamily: 'Verdana', fontSize: '22px'}}> Ocena klientów: {product.review}</p>
                        <p style = {{fontFamily: 'Verdana', fontSize: '18px', fontWeight: 'bold'}}> Opis produktu: {product.name} nr 1 na świecie! </p>
                    </div>
                }
            </div>
        )
    }
}



export default Product
