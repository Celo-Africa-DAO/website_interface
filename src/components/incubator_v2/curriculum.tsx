import * as React from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

export default function Curriculum() {
  const [pathAnimation, setPathAnimation] = React.useState(false);
  const [hoveredNode, setHoveredNode] = React.useState<number | null>(null);
  const [currentWeek, setCurrentWeek] = React.useState<number>(0);

  const programStartDate = new Date("2025-10-15");

  React.useEffect(() => {
    setPathAnimation(true);
    const today = new Date();
    const start = new Date(programStartDate);
    const msPerDay = 24 * 60 * 60 * 1000;
    const utcToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const utcStart = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
    const elapsedDays = Math.floor((utcToday - utcStart) / msPerDay);
    if (elapsedDays < 0) {
      setCurrentWeek(-1);
      return;
    }
    const weekIndex = Math.floor(elapsedDays / 7);
    setCurrentWeek(weekIndex);
  }, []);

  const events = [
    {
       id: 0, name: "Welcome Week & Founder Onboarding",
       description: "An introductory week to connect all founders in the cohort."
    },
    { 
      id: 1, name: "Finding Product-Market Fit",
       description: "A deep dive into identifying and validating a genuine need for the product." 
    },
    { 
      id: 2, name: "Fintech Founder Session", 
      description: "Building Scalable Fintech Solutions in Emerging Markets" 
    },
    { 
      id: 3, name: "Building & Integrating on Celo",
       description: "This session is designed to give founders a comprehensive understanding of the Celo blockchain as a platform for building decentralized applications." 
    },
    { 
      id: 4, name: "Building on Minipay & Leveraging Distribution",
       description: "A specialized session on utilizing Minipay's infrastructure and the broader Celo community to achieve rapid user acquisition and growth." 
    },
    { 
      id: 5, name: "Scaling, BD & Fundraising readiness",
       description: "A comprehensive module on preparing for growth and key partnerships." 
    },
    { 
      id: 6, name: "Legal & Regulatory Frameworks", 
      description: "A session dedicated to navigating the complex legal." 
    },
    { 
      id: 7, name: "Creating a winning Pitch Deck",
       description: "Teach founders to present their business ideas compellingly."
     },
    { 
      id: 8, name: "Demo Day",
       description: "The culmination of the program, where teams will present their progress." 
    },
    // { 
    //   id: 9, name: "Demo Day", 
    //   description: "Founders presenting compelling ideas to potential investors." 
    // },
  ];

  const programCompleted = currentWeek >= events.length;

  const generatePathCoordinates = () => {
    const coordinates = [];
    const totalSteps = events.length;
    const svgWidth = 900;
    const svgHeight = 400;
    const padding = 50;

    for (let i = 0; i < totalSteps; i++) {
      const x = padding + (i / (totalSteps - 1)) * (svgWidth - 2 * padding);
      let y;
      if (i % 3 === 0) y = padding + svgHeight * 0.5;
      else if (i % 3 === 1) y = padding + svgHeight * 0.2;
      else y = padding + svgHeight * 0.3;
      coordinates.push({ x, y });
    }
    return coordinates;
  };

  const pathCoordinates = generatePathCoordinates();

  const generatePathString = () => {
    if (pathCoordinates.length < 2) return "";
    let pathString = `M ${pathCoordinates[0].x} ${pathCoordinates[0].y}`;
    for (let i = 1; i < pathCoordinates.length; i++) {
      const current = pathCoordinates[i];
      const prev = pathCoordinates[i - 1];
      const controlPoint1X = prev.x + (current.x - prev.x) * 0.5;
      const controlPoint1Y = prev.y;
      const controlPoint2X = prev.x + (current.x - prev.x) * 0.5;
      const controlPoint2Y = current.y;
      pathString += ` C ${controlPoint1X} ${controlPoint1Y} ${controlPoint2X} ${controlPoint2Y} ${current.x} ${current.y}`;
    }
    return pathString;
  };

  return (
    <div className="">
      <div className="flex justify-center items-start mx-0 md:mx-32 xl:mx-0">
        <div className="flex flex-col bg-celo-AD-olive-green w-full">
          <div className="flex flex-col gap-4 items-center mt-10">
            <h1 className="font-GT-Alpina text-3xl text-black font-thin">Curriculum Overview</h1>
          </div>

          <div className="relative w-full px-4">
            <div className=" rounded-2xl overflow-x-auto">
              <svg
                width="900"
                height="400"
                viewBox="0 0 900 400"
                className="w-full h-auto min-w-[600px]"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f0f0f0" strokeWidth="0.5" opacity="0.3" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                <path
                  d={generatePathString()}
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="3"
                  strokeDasharray="10,5"
                  strokeLinecap="round"
                  className={`transition-all duration-2000 ${pathAnimation ? "opacity-100" : "opacity-0"}`}
                />

                {!programCompleted && currentWeek >= 0 && (
                  <path
                    d={generatePathString()}
                    fill="none"
                    stroke="#476520"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${(currentWeek / Math.max(1, events.length - 1)) * 2000}, 2000`}
                    className="transition-all duration-1000"
                  />
                )}

                {programCompleted && (
                  <path
                    d={generatePathString()}
                    fill="none"
                    stroke="#476520"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                )}

                {pathCoordinates.map((coord, index) => {
                  const isCompleted = programCompleted ? true : index < currentWeek;
                  const isCurrent = !programCompleted && index === currentWeek;
                  const isHovered = index === hoveredNode;

                  return (
                    <g key={index}>
                      <circle
                        cx={coord.x}
                        cy={coord.y}
                        r={isHovered ? "20" : "15"}
                        fill={isCurrent ? "#476520" : isCompleted ? "#476520" : "#FCFF52"}
                        stroke={isCurrent ? "#476520" : isCompleted ? "#476520" : "#9CA3AF"}
                        strokeWidth="3"
                        className="transition-all duration-300 cursor-pointer"
                        style={{
                          filter: isHovered ? "drop-shadow(0 4px 6px rgba(0,0,0,0.3))" : "",
                          animation: isCurrent ? "pulse 2s infinite" : "",
                        }}
                        onMouseEnter={() => setHoveredNode(index)}
                        onMouseLeave={() => setHoveredNode(null)}
                      />

                      <text x={coord.x} y={coord.y + 5} textAnchor="middle" className="font-bold fill-black pointer-events-none" fontSize="14">
                        {index + 1}
                      </text>

                      <text x={coord.x} y={coord.y + 35} textAnchor="middle" className="font-semibold fill-gray-700" fontSize="12">
                        Week {index + 1}
                      </text>

                      {isCurrent && (
                        <circle cx={coord.x} cy={coord.y} r="25" fill="none" stroke="#476520" strokeWidth="2" strokeDasharray="5,5" className="animate-spin" style={{ animationDuration: "10s" }} />
                      )}
                    </g>
                  );
                })}

                {hoveredNode !== null && (() => {
                  const coord = pathCoordinates[hoveredNode];
                  if (!coord) return null;
                  const x = hoveredNode === 0 ? coord.x + 10 : hoveredNode === events.length - 1 ? coord.x - 220 : coord.x - 140;
                  const y = coord.y - 120;
                  return (
                    <foreignObject
                      x={x}
                      y={y}
                      width="280"
                      height="140"
                      pointerEvents="none"
                    >
                      <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-200 transform transition-all duration-200 ease-in-out">
                        <p className="font-semibold text-sm text-gray-800 mb-2 leading-tight">{events[hoveredNode].name}</p>
                        <p className="text-xs text-gray-600 leading-relaxed">{events[hoveredNode].description}</p>
                      </div>
                    </foreignObject>
                  );
                })()}
              </svg>

              <style>{`
                @keyframes pulse {
                  0%, 100% { transform: scale(1); opacity: 1; }
                  50% { transform: scale(1.1); opacity: 0.8; }
                }
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          </div>

          <div className="flex w-full justify-center items-center pt-4 pb-8">
            <div className="w-full max-w-md">
              <Card className="bg-transparent border-0">
                <CardTitle className="text-center font-bold text-lg">
                  <div className="flex flex-col">
                    {programCompleted ? (
                      <>
                        <p>Program completed</p>
                        <p>{events[events.length - 1].name}</p>
                      </>
                    ) : currentWeek === -1 ? (
                      <>
                        <p>Program hasn&apos;t started</p>
                        <p>Starts {new Date(programStartDate).toLocaleDateString()}</p>
                      </>
                    ) : (
                      <>
                        <p>Week {Math.min(currentWeek + 1, events.length)}</p>
                        <p>{events[currentWeek]?.name}</p>
                      </>
                    )}
                  </div>
                </CardTitle>
                <CardContent className="flex flex-col items-center p-4">
                  {programCompleted ? (
                    <p className="text-center text-sm text-celo-AD-slate-brown">Congratulations! The program has finished.</p>
                  ) : currentWeek === -1 ? (
                    <p className="text-center text-sm text-celo-AD-slate-brown">The program will start on {new Date(programStartDate).toLocaleDateString()}.</p>
                  ) : (
                    <p className="text-center text-sm text-celo-AD-slate-brown">{events[currentWeek]?.description}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
