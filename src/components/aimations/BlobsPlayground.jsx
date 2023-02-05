import Blob from "./Blob";

function BlobsPlayground({ children }) {
  return (
    <div className="relative w-full h-full">
      <div className="inset-0 fixed h-full -z-10 blur-3xl p-10 opacity-60">
        <Blob />
        <Blob />
      </div>
      <div className="w-full max-w-5xl mx-auto px-6 z-20">{children}</div>
    </div>
  );
}

export default BlobsPlayground;
