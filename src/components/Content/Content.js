import "./content.css";

export default function Content({ clicktimes }) {
  return (
    <div className="content">
      {clicktimes.map((time) => (
        <p> You clicked at {time}</p>
      ))}
    </div>
  );
}
