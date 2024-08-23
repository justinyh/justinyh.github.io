export default function Container({ children }) {
    return (
      <div className="container mx-auto px-8 lg:px-40">
        {children}
      </div>
    );
  }