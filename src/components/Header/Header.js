import "./header.css";
import { DateContext } from "../../App";

export default function Header() {
  return (
    <DateContext.Consumer>
      {(obj) => (
        <div className="header">
          <h1> Current time is: {obj.time}</h1>
        </div>
      )}
    </DateContext.Consumer>
  );
}
