import "./systemLoader.css";

export default function SystemLoader() {
  return (
    <div className={"loadingOverlay"} dir="ltr">
      <div className={"wavingText"}>
        <span>R</span>
        <span>A</span>
        <span>W</span>
        <span>A</span>
        <span>N</span>
        <span>A</span>
      </div>
    </div>
  );
}
