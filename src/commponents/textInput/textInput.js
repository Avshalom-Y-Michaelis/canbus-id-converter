
import "./textInput.css"

export default function TextInput({ title}) {
  return (
    <div className="text-input" >
      <text>{title}</text>
      <input></input>
      
    </div>
  );
}