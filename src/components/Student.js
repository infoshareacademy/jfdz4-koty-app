import React from 'react'

class Product extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    }

    fetch(
      process.env.PUBLIC_URL + '/data/products.json'
    ).then(
      response => response.json()
    ).then(
      products => this.setState({
        products: products
      })
    )
  }

  render() {
    console.log(this.props.match, this.state)

    const productId = parseInt(this.props.match.params.productId, 10)
    const product = this.state.products.find(
      product => product.id === productId
    )

    return (
      <div>
        <h1>
          Product:
          {' '}
          {
            product ?
              product.name :
              null
          }
        </h1>

        <ul>
          {
            product ?
              product.price.map(
                (grade, index) => (
                  <li key={index}>{price}</li>
                )
              ) : null
          }
        </ul>


        <h3>Average</h3>
        <p>
          {
            product ?
              product.price.reduce(
                (total, next) => total + next.value, 0
              ) / product.grades.length :
              null
          }
        </p>
      </div>
    )
  }
}

export default Product