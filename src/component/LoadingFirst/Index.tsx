import "./Index.css";
function LoadingFirst() {
  return (
    <div
      className={
        "p-6 max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4"
      }
    >
      <div className={`dc-loading`}></div>
    </div>
  );
}

export default LoadingFirst;
