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
            <div>
                <h1> {product.name} </h1>
                <img src={product.image}/>
                <p> Ocena klientów: {product.price}</p>
                <p> OPIS: </p>
                <p> Super najlepsza rzecz na świecie! </p>

            </div>
        )

    }
}

export default Product