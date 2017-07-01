import React from 'react'

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

            <div style={{color: '#21324f', boxShadow: '9px 9px 29px #21324f'}}>
                {product === undefined ? <div> Fetching</div> :
                    <div style={{border: '2px solid #FF7D00'}}>
                        <a href="/Search"><img src="https://raw.githubusercontent.com/infoshareacademy/jfdz4-koty-app/productDetails-style/public/data/image/arrowBack.jpg" style={{float: 'left', height: '40px', width: '40px', marginRight: '20px'}}/></a>
                        <h1 style={{fontFamily: 'Verdana', fontWeight: 'bold'}}> {product.name} </h1>
                        <img src={product.image} style={{marginLeft: '4px', border: '1px solid #21324f', boxShadow: '4px 0px 29px #21324f'}}/>
                        <p style = {{fontFamily: 'Verdana', fontWeight: '700', fontSize: '27px', color: '#FF7D00'}}>Cena: {product.price}</p>
                        <p style = {{fontFamily: 'Verdana', fontSize: '22px'}}> Ocena klientów: {product.review}</p>
                        <p style = {{fontFamily: 'Verdana', fontSize: '22px', fontWeight: 'bold'}}> OPIS: Super najlepsza rzecz na świecie! </p>
                    </div>
                }
            </div>
        )
    }
}



export default Product
