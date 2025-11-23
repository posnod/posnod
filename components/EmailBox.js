"use client";

export default function EmailBox() {
  return (
    <div className="mt-10 flex justify-center">
      <div className="flex bg-white px-5 py-3 rounded-full items-center w-[420px] 
                  border border-gray-300 shadow-md">
        <input
          type="text"
          placeholder="Email"
          className="bg-transparent w-full outline-none text-sm"
        />
        <button className="bg-purple-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow">
          ➜
        </button>
      </div>
    </div>
  );
}
