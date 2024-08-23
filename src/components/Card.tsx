export default function Card({ children }) {
    return (
      <div className="drop-shadow-lg rounded-md bg-white overflow-hidden">
        {children}
      </div>
    );
  }