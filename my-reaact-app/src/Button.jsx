

function Button() {

  const onButtonClicked = (e)=>{
    console.log(e);
    e.target.textContent = "OUCH!";
  };

  return(
    <>
      <button onDoubleClick={(e) => onButtonClicked(e)}>Click me!</button>
    </>
  );
}

export default Button;