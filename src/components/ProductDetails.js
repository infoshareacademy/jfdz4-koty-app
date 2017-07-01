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

            <div style={{color: '#21324f', boxShadow: '4px 4px 44px #999999'}}>
                {product === undefined ? <div> Fetching</div> :
                    <div>
                        <h1 style={{fontFamily: 'Verdana', fontWeight: 'bold'}}> {product.name} </h1>
                        <img src={product.image}/>
                        <p style = {{fontFamily: 'Verdana', fontWeight: 'bold', fontSize: '22px'}}>Cena: {product.price}</p>
                        <p style = {{fontFamily: 'Verdana', fontSize: '20px'}}> Ocena klientów: {product.review}</p>
                        <p style = {{fontFamily: 'Verdana', fontSize: '20px', fontWeight: 'bold'}}> OPIS: Super najlepsza rzecz na świecie! </p>
                    </div>
                }
            </div>
        )
    }
}



export default Product
