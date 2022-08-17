import KatsudonLeaderboard from "./Katsudon Leaderboard";
import KatsudonML from "./Katsudon ML";
import TheGoldenHouse from "./The Golden House";

export default function Projects() {
  return (
    <div>
      <div
        className="section-title"
        style={{ textAlign: "center", color: "#6CFF7B" }}
      >
        Every project is a chance to grow!
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        <TheGoldenHouse />
        <KatsudonLeaderboard />
        <KatsudonML />
      </div>
    </div>
  );
}
