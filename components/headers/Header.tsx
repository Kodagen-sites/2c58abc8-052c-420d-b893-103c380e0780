import HeaderSplitEdges from "./HeaderSplitEdges";

// Single-variant router for this build. The variation manifest rolled
// "split-edges"; only that header ships, so we render it directly.
export default function Header() {
  return <HeaderSplitEdges />;
}
