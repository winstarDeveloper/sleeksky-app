import { DateContext } from "../../App";

export default function Footer() {
  return (
    <DateContext.Consumer>
      {(obj) => (
        <div className="footer">
          <p>You clicked {obj.clicks} times</p>
        </div>
      )}
    </DateContext.Consumer>
  );
}
