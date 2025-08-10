function doSomething(event){
    console.log("HEllO!");
    
    console.log(event);
}
function bye(){
    console.log("BYE!");
}
export default function Button(){
    return (
        <>
       <button onClick={doSomething}>Click me!</button>
       <p onMouseOver={bye}>done</p>
       </>
    );
}