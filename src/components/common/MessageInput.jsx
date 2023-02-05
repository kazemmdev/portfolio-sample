import React from "react";

function MessageInput({ ...props }) {
  return (
    <div>
      <textarea
        rows={4}
        {...props}
        className="w-full min-h-[200px] px-4 py-3 mb-3 bg-white border-[2px] border-[#d2d2d2] border-solid rounded-2xl outline-none
        focus:border-slate-400 active:border-slate-500 transition-all ease-in-out duration-200"
      />
    </div>
  );
}

export default MessageInput;
