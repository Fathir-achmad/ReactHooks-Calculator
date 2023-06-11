import { useState } from "react"; //--- Tempalate untuk import method bawaan useState
import { List } from "./ListUser";
import Hello from "./data";

function App() {
  const [value,setValue] = useState(0)
  //--- Ini penampung dari set
  const [num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(0)

    
  function getnum1(input) {
    // console.log(input);
    setNum1(input.target.value)
  }
  function getnum2(input) {
    setNum2(input.target.value);
  }

  function add() {
    setValue(parseInt(num1) + parseInt(num2)) //--- Harus dirubah dari string ke number
  }
  //----- Karena dibawah input type dapetnya pasti string bisa di buktiin di console log di inspect di web
  function min() {
    setValue(parseInt(num1) - parseInt(num2))
  }
  function multiply() {
    setValue(parseInt(num1) * parseInt(num2))
  }
  function divide() {
    setValue(parseInt(num1) / parseInt(num2))
  }
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <br />
      <input type="number" name="num1" onChange={getnum1}/>
      {/* Segala yg di type hasilnya string */}
      <input type="number" name="num2" onChange={getnum2}/>
      <button onClick={add}>+</button>
      <button onClick={min}>-</button>
      <button onClick={multiply}>*</button>
      <button onClick={divide}>/</button>
      <h1> Hasil = {value}</h1>

      <List />
      <Hello />
    </div>
  );
}

export default App;
