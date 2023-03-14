export const Button = (props) =>{
    return (
      <button onClick = {props.btnClick}>
         {props.btnText}
       </button>
    )
   }