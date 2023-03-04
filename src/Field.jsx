import Tile from "./Tile";

export let tiles = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

export default function Field() {
  return (
    <div className="field">
      <div className="row">
        <Tile className="bb br" index="0" />
        <Tile className="bb br bl" index="1" />
        <Tile className="bb bl" index="2" />
      </div>
      <div className="row">
        <Tile className="bb bt br" index="3" />
        <Tile className="bb bt br bl" index="4" />
        <Tile className="bb bt bl" index="5" />
      </div>
      <div className="row">
        <Tile className="bt br" index="6" />
        <Tile className="bt br bl" index="7" />
        <Tile className="bt bl" index="8" />
      </div>
    </div>
  );
}
