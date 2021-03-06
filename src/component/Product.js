import React from 'react';

class Product extends React.Component {
  render(){
    const {color, department, productName, price, productAdjective, productMaterial, product} = this.props.details
    return(
      <div className="productsDetails">
        <table className="productsTable">
          <tr>
            <td width="10%" onChange={this.handleChange}>{color}</td>
            <td width="10%">{department}</td>
            <td width="25%">{productName}</td>
            <td width="8%">${price}</td>
            <td width="10%">{productAdjective}</td>
            <td width="10%">{productMaterial}</td>
            <td width="10%">{product}</td>
            <td className="edit-btn" onClick={()=> this.props.editProduct(productName)}><button>Edit</button></td> 
            <td className="delete-btn" onClick={()=> this.props.deleteProduct(productName)}><button>Delete</button></td>
          </tr>
        </table>
      </div>
    ) 
  }
}

export default Product;