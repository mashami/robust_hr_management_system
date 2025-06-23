import React from "react";

interface ScoreCardProps {
  score: number;
  label: string;
  maxScore?: number;
  size?: number;
  strokeWidth?: number;
}

const ScoreCard: React.FC<ScoreCardProps> = ({
  score = 75,
  label = "Potential Fit",
  maxScore = 100,
  size = 56,
  strokeWidth = 5
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const percentage = (score / maxScore) * 100;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-3xl p-1 shadow-sm border border-gray-100 pt-9  mx-auto px-9">
      {/* Circular Progress */}
      <div className="flex justify-center mb-8">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#E8F5E8"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Progress circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#69C620"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[16px] font-bold text-[#7CB342]">
              {score}
            </span>
          </div>
        </div>
      </div>

      {/* Score label */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 font-semibold">
          <span className="text-[#071C50]">Score:</span>
          <span className="text-[#469607]">{label}</span>
        </div>
      </div>

      <div className="text-center">
        <span className="text-[#7D9BE7] text-[12px] cursor-pointer font-semibold underline hover:text-blue-500 transition-all duration-200 ease-in-out">
          Edit
        </span>
      </div>
    </div>
  );
};

export default ScoreCard;
