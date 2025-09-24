import * as React from "react";
import {
  Card,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

export default function Curriculum() {
  const [pathAnimation, setPathAnimation] = React.useState(false);
  const [hoveredNode, setHoveredNode] = React.useState<number | null>(null);
  const [currentWeek, setCurrentWeek] = React.useState(0);

  React.useEffect(() => {
    setPathAnimation(true);
    // Set a fixed current week to avoid hydration issues
    setCurrentWeek(0);
  }, []);

  const events = [
    { id: 0, name: "Finding product-market fit", description: "Assist founders in honing their concepts to address genuine market needs." },
    { id: 1, name: "Crypto Business Model", description: "Guide startups in creating sustainable and scalable business frameworks." },
    { id: 2, name: "Build & integrate with Celo", description: "How do you go about to deploy on Celo mainnet?" },
    { id: 3, name: "Building on Minipay", description: "Leveraging Opera's distribution channel to reach more users." },
    { id: 4, name: "Creating a winning Pitch Deck", description: "Teach founders to present their business ideas compellingly." },
    { id: 5, name: "Scaling, BD & Fundraising readiness", description: "Expanding to new markets, partners and know when ready to receive investment." },
    { id: 6, name: "Customer acquisition", description: "Building a customer base and retention strategies." },
    { id: 7, name: "Legal and Regulatory Framework", description: "Understanding legal structures and regulatory requirements." },
    { id: 8, name: "Tokenomics Advisory Framework", description: "Using Ubestarter Token Launchpad to gain hands-on experience in deploying your token." },
    { id: 9, name: "Demo Day", description: "Founders presenting compelling ideas to potential investors." },
  ];

  const generatePathCoordinates = () => {
    const coordinates = [];
    const totalSteps = events.length;
    const svgWidth = 900;
    const svgHeight = 400;
    const padding = 50;

    for (let i = 0; i < totalSteps; i++) {
      const x = padding + (i / (totalSteps - 1)) * (svgWidth - 2 * padding);
      let y;
      if (i % 4 === 0) y = padding + svgHeight * 0.5;
      else if (i % 4 === 1) y = padding + svgHeight * 0.2;
      else if (i % 4 === 2) y = padding + svgHeight * 0.4;
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

                {currentWeek > 0 && (
                  <path
                    d={generatePathString()}
                    fill="none"
                    stroke="#476520"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${(currentWeek / (events.length - 1)) * 2000}, 2000`}
                    className="transition-all duration-1000"
                  />
                )}

                {pathCoordinates.map((coord, index) => {
                  const isCompleted = index < currentWeek;
                  const isCurrent = index === currentWeek;
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

                {/* Render the hovered tooltip last so it appears on top of nodes */}
                {hoveredNode !== null && (() => {
                  const coord = pathCoordinates[hoveredNode];
                  if (!coord) return null;
                  const x = hoveredNode === 0 ? coord.x + 10 : hoveredNode === events.length - 1 ? coord.x - 160 : coord.x - 100;
                  const y = coord.y - 120;
                  return (
                    <foreignObject
                      x={x}
                      y={y}
                      width="220"
                      height="100"
                      pointerEvents="none"
                    >
                      <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-200 transform transition-all duration-200 ease-in-out">
                        <p className="font-semibold text-sm text-gray-800 mb-2">{events[hoveredNode].name}</p>
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
                    <p>Week {currentWeek + 1}</p>
                    <p>{events[currentWeek].name}</p>
                  </div>
                </CardTitle>
                <CardContent className="flex flex-col items-center p-4">
                  <p className="text-center text-sm text-celo-AD-slate-brown">{events[currentWeek].description}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
