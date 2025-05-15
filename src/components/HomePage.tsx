
const HomePage = ({ onStart }: { onStart: () => void }) => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        inset: 0,
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Welcome to accent-ui</h1>
      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1.25rem",
          borderRadius: "0.5rem",
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
        onClick={onStart}
      >
        Get Started
      </button>
    </div>
  );
}

export default HomePage;