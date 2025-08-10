import './Product.css';
// function Product(){
//     return (
//         <div className="Product">
//             <h1>Product Details</h1>
//             <p>Product Name:</p>
//         </div>
//     );
// }

// function Product(props){
//     return (
//         <div className="Product">
//             <h1>{props.title}</h1>
//             <p>Product Name:</p>
//         </div>
//     );
// }

// function Product({title, price, features}){
//     return (
//         <div className="Product">
//             <h1>{title}</h1>
//             <p>{price/2}</p>
//             <p>{features}</p>
//         </div>
//     );
// }


// Conditionals 
// Method1:

// function Product({title, price}){
//     if(price>10000){
//     return (
//         <div className="Product">
//             <h1>{title}</h1>
//             <p>{price}</p>
//             <p>Discount of 5%</p>
//         </div>
//     );
// }
// else {
//     return (
//         <div className="Product">
//             <h1>{title}</h1>
//             <p>{price}</p>
          
//         </div>
//     );
// }
// }


// Method2:
// function Product({title, price, features}){
//     let isDiscount=price>10000? "Discount 5%":"";
//     return (
//         <div className="Product">
//             <h1>{title}</h1>
//             <p>{price}</p>
//             <p>{isDiscount}</p>
//         </div>
//     );
// }

//Method3
// function Product({title, price, features}){
 
//     return (
//         <div className="Product">
//             <h1>{title}</h1>
//             <p>{price}</p>
//           {price>10000?<p>Discount of 5%</p> :<a href="/">Get Discount</a>}
//         </div>
//     );
// }


//Dynamic Component Styling
// function Product({title, price, }){
//  let styles={backgroundColor:"yellow"};
//     return (
//         <div className="Product" style={styles}>
//             <h1>{title}</h1>
//             <p>{price}</p>
//           {price>10000?<p>Discount of 5%</p> :<a href="/">Get Discount</a>}
//         </div>
//     );
// }


//Activity
import Price from './Price.jsx';
function Product({title,idx}){
let oldPrices=["1000","2000","3000","4000"];
let newPrices=["250","300","350","400"];
let description=[["good","rate:4"],["bad","rate:1"],["excellent","rate:2"],["awesome","rate:5"]];
    return (
        <div className="Product">
          <h4>{title}</h4>
          <p>{description[idx][0]}</p>
          <p>{description[idx][1]}</p>
          <Price oldprice={oldPrices[idx]} newprice={newPrices[idx]} />
        </div>
    );
}


export default Product;