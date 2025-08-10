import Product from './Product.jsx';
// function Producttab(){
//     return ( 
//      <>
// <Product  />
// <Product />
//     </>   
//     );
// }


// function Producttab({title, price}){
//     return ( 
//      <>
// < Product title="phone" price={100} />
// <Product  title="laptop" price={200} />
//     </>   
//     );
// }

// Passing arrays as props
// function Producttab({title, price}){
//     let options=["vivo","17k","Camera is good"];
//     return ( 
//      <>
// < Product title="phone" price={100}  features={options}/>
// <Product  title="laptop" price={200} />
//     </>   
//     );
// }

//Rendering Arrays
// function Producttab({title, price}){
//     let options=[<li>vivo</li>,<li>17k</li>,<li>camera is good</li>];
//     return ( 
//      <>
// < Product title="phone" price={100}  features={options}/>
// <Product  title="laptop" price={200} />
//     </>   
//     );
// }

// conditionals 
function Producttab({title,idx}){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    };
    return ( 
     <div style={styles}>
        
<Product title="phone" idx={0}/>
<Product title="Laptop" idx={1} />
<Product title="watch" idx={2}/>
<Product title="Apple" idx={3}/>
    </div>   
    );
}


export default Producttab;