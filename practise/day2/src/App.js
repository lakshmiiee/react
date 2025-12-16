// Create a simple React component that displays a list of your favorite foods. 
// Add a button next to each food that, when clicked, shows a message saying "I love [food name]!" below the list. 
// The message should update to show the last clicked food. The initial message should show "Select a food that you love!".

function Food(){

  function handleClick(foodName){
    document.getElementById('demo').innerHTML="I love " + foodName ;
  }

  let favfood=["biriyani","mandhi","porotta","beef"];
  return(
        <div className="d-flex justify-content-center align-items-center pt-5 bg-dark vh-100">
      <div className="card col-sm-4 p-4">
        
        <ul className="list-group list-group-flush mb-3">
      
      {favfood.map((item)=>{return <li className="list-group-item d-flex justify-content-between align-items-center">{item} <button className="btn btn-primary btn-sm ms-2 " onClick={()=>handleClick(item)}>Click me</button></li> })}
      </ul>
      <p id="demo" className="text-center fw-bold">Select a food that you love!"</p>
    </div>
    </div>
   


  );
}
export default Food;