"use client";

export default function SectionCard({ image, text }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[80%] bg-white p-10 rounded-2xl shadow-sm flex gap-10">
        <img src={image} className="w-[200px] object-contain" alt="" />
        <div className="text-gray-700 leading-relaxed text-[15px] whitespace-pre-line">
          {text}
        </div>
      </div>
    </div>
  );
}
