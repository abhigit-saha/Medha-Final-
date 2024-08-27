import React from "react";
import Image alt="" from "next/image";
function MyAppsArea() {
  return (
    <div className="bg-white bg-opacity-60 p-8 rounded-2xl shadow-lg">
      <div className="flex flex-col mb-4">
        <div className="text-lg font-bold">My Apps</div>
        <div className="text-xs text-gray-500">
          Explore the variety of useful apps
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg w-fit">
        <div className="grid grid-cols-4 gap-4 justify-items-center">
          {/* Placeholder for Create Quiz */}
          <div className="flex flex-col items-center space-y-1">
            <Image alt="" src="/Create_quiz.svg" className="w-16 h-16" />
            <div className="text-xs font-semibold">Create Quiz</div>
          </div>

          {/* Placeholder for Summarise PDF */}
          <div className="flex flex-col items-center space-y-1">
            <Image alt="" src="/Summarize_pdf.svg" className="w-16 h-16" />
            <div className="text-xs font-semibold">Summarise PDF</div>
          </div>

          {/* Placeholder for Create PPT */}
          <div className="flex flex-col items-center space-y-1">
            <Image alt="" src="/Create_ppt.svg" className="w-16 h-16" />
            <div className="text-xs font-semibold">Create PPT</div>
          </div>

          {/* Placeholder for Summarise Youtube Video */}
          <div className="flex flex-col items-center space-y-1">
            <Image alt="" src="/Summarize_yt.svg" className="w-16 h-16" />
            <div className="text-xs font-semibold">Summarise Youtube Video</div>
          </div>

          {/* Placeholder for Create Flash Cards */}
          <div className="flex flex-col items-center justify-center space-y-1 col-span-1">
            <Image alt="" src="/Create_flash_cards.svg" className="w-16 h-16" />
            <div className="text-xs font-semibold">Create Flash Cards</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAppsArea;
