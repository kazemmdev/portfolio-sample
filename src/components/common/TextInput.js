import React from "react";

function TextInput({ type = "text", error, ...props }) {
  return (
    <div>
      <input
        type={type}
        {...props}
        className="w-full h-14 px-4 py-0 mb-4 bg-white border-[2px] border-[#d2d2d2] border-solid rounded-2xl outline-none
         focus:border-slate-400 active:border-slate-500 transition-all ease-in-out duration-200"
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default TextInput;
