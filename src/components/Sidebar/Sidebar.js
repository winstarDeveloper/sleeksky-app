import "./sidebar.css";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <button className="btn" onClick={() => props.clickHandler()}>
        Click Here
      </button>
    </div>
  );
}
