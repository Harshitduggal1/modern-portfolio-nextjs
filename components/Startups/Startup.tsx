import React from "react";
import SectionHeading from "../SectionHeading";
import { MrrCard } from "../mrr-card";

const startupData = [
  {
    name: "QuantumLeap",
    description: "Pioneering quantum computing solutions for complex problems",
    mrr: 85000,
    iconName: "Quantum",
    status: "success",
    data: [
      { month: "Aug", mrr: 12000 },
      { month: "Sep", mrr: 15000 },
      { month: "Oct", mrr: 18000 },
      { month: "Nov", mrr: 22000 },
      { month: "Dec", mrr: 25000 },
      { month: "Jan", mrr: 27000 },
      { month: "Feb", mrr: 30000 },
      { month: "Mar", mrr: 32000 },
      { month: "Apr", mrr: 34000 },
      { month: "May", mrr: 36000 },
      { month: "Jun", mrr: 38000 },
      { month: "Jul", mrr: 40000 },
    ],
  },
  {
    name: "BioFusion",
    description: "Integrating biotechnology with AI for innovative health solutions",
    mrr: 70000,
    iconName: "Bio",
    status: "success",
    data: [
      { month: "Aug", mrr: 15000 },
      { month: "Sep", mrr: 20000 },
      { month: "Oct", mrr: 25000 },
      { month: "Nov", mrr: 30000 },
      { month: "Dec", mrr: 32000 },
      { month: "Jan", mrr: 35000 },
      { month: "Feb", mrr: 37000 },
      { month: "Mar", mrr: 40000 },
      { month: "Apr", mrr: 42000 },
      { month: "May", mrr: 44000 },
      { month: "Jun", mrr: 46000 },
      { month: "Jul", mrr: 48000 },
    ],
  },
  {
    name: "GreenWave",
    description: "Sustainable energy solutions with AI-driven optimization",
    mrr: 95000,
    iconName: "Energy",
    status: "success",
    data: [
      { month: "Aug", mrr: 20000 },
      { month: "Sep", mrr: 25000 },
      { month: "Oct", mrr: 30000 },
      { month: "Nov", mrr: 35000 },
      { month: "Dec", mrr: 40000 },
      { month: "Jan", mrr: 45000 },
      { month: "Feb", mrr: 50000 },
      { month: "Mar", mrr: 55000 },
      { month: "Apr", mrr: 60000 },
      { month: "May", mrr: 65000 },
      { month: "Jun", mrr: 70000 },
      { month: "Jul", mrr: 75000 },
    ],
  },
  {
    name: "NeuroNet",
    description: "Advancing neural networks for next-gen AI applications",
    mrr: 80000,
    iconName: "Brain",
    status: "success",
    data: [
      { month: "Aug", mrr: 18000 },
      { month: "Sep", mrr: 22000 },
      { month: "Oct", mrr: 26000 },
      { month: "Nov", mrr: 30000 },
      { month: "Dec", mrr: 34000 },
      { month: "Jan", mrr: 38000 },
      { month: "Feb", mrr: 42000 },
      { month: "Mar", mrr: 46000 },
      { month: "Apr", mrr: 50000 },
      { month: "May", mrr: 54000 },
      { month: "Jun", mrr: 58000 },
      { month: "Jul", mrr: 60000 },
    ],
  },
  {
    name: "DataVision",
    description: "Transforming data insights into actionable strategies",
    mrr: 55000,
    iconName: "Data",
    status: "failed",
    data: [
      { month: "Aug", mrr: 5000 },
      { month: "Sep", mrr: 7000 },
      { month: "Oct", mrr: 9000 },
      { month: "Nov", mrr: 10000 },
      { month: "Dec", mrr: 12000 },
      { month: "Jan", mrr: 15000 },
      { month: "Feb", mrr: 18000 },
      { month: "Mar", mrr: 20000 },
      { month: "Apr", mrr: 22000 },
      { month: "May", mrr: 24000 },
      { month: "Jun", mrr: 25000 },
      { month: "Jul", mrr: 26000 },
    ],
  },
  {
    name: "EcoSense",
    description: "AI-driven solutions for smart environmental management",
    mrr: 62000,
    iconName: "Eco",
    status: "failed",
    data: [
      { month: "Aug", mrr: 7000 },
      { month: "Sep", mrr: 9000 },
      { month: "Oct", mrr: 12000 },
      { month: "Nov", mrr: 14000 },
      { month: "Dec", mrr: 16000 },
      { month: "Jan", mrr: 18000 },
      { month: "Feb", mrr: 20000 },
      { month: "Mar", mrr: 22000 },
      { month: "Apr", mrr: 24000 },
      { month: "May", mrr: 26000 },
      { month: "Jun", mrr: 28000 },
      { month: "Jul", mrr: 30000 },
    ],
  },
  {
    name: "RoboAssist",
    description: "Automated robotic solutions for industrial efficiency",
    mrr: 70000,
    iconName: "Robot",
    status: "failed",
    data: [
      { month: "Aug", mrr: 8000 },
      { month: "Sep", mrr: 12000 },
      { month: "Oct", mrr: 15000 },
      { month: "Nov", mrr: 20000 },
      { month: "Dec", mrr: 22000 },
      { month: "Jan", mrr: 25000 },
      { month: "Feb", mrr: 28000 },
      { month: "Mar", mrr: 30000 },
      { month: "Apr", mrr: 32000 },
      { month: "May", mrr: 34000 },
      { month: "Jun", mrr: 36000 },
      { month: "Jul", mrr: 38000 },
    ],
  },
  {
    name: "AeroInnovate",
    description: "Advanced aeronautics and space exploration technologies",
    mrr: 90000,
    iconName: "Rocket",
    status: "failed",
    data: [
      { month: "Aug", mrr: 10000 },
      { month: "Sep", mrr: 15000 },
      { month: "Oct", mrr: 20000 },
      { month: "Nov", mrr: 25000 },
      { month: "Dec", mrr: 30000 },
      { month: "Jan", mrr: 35000 },
      { month: "Feb", mrr: 40000 },
      { month: "Mar", mrr: 45000 },
      { month: "Apr", mrr: 50000 },
      { month: "May", mrr: 55000 },
      { month: "Jun", mrr: 60000 },
      { month: "Jul", mrr: 65000 },
    ],
  },
];

export default function Startup() {
  const successfulStartups = startupData.filter(
    (startup) => startup.status === "success",
  );
  const failedStartups = startupData.filter(
    (startup) => startup.status === "failed",
  );
  return (
    <div className="mt-20 px-6 lg:mt-40 lg:px-3">
      <SectionHeading
        heading="Innovative Startups (demo)"
        subheading="Exploring breakthrough technologies in AI & beyond 🌟, Innovate, Adapt, Succeed!"
      />
      <div className="3xl:max-w-[1440px] mx-auto grid max-w-[83rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[1100px]">
        {successfulStartups.map((startup, index) => (
          <div
            key={startup.name}
            className={
              index === 1 || index === 2 || index === 5
                ? "sm:col-span-2"
                : "sm:col-span-1"
            }
          >
            <MrrCard
              name={startup.name}
              description={startup.description}
              mrr={startup.mrr}
              data={startup.data}
              iconName={startup.iconName}
              status={startup.status as "success" | "failed"}
            />
          </div>
        ))}
      </div>

      {failedStartups.length > 0 && (
        <>
          <h2 className="mb-6 mt-12 text-center text-2xl font-bold text-red-500">
            Failed Startups
          </h2>
          <div className="3xl:max-w-[1440px] mx-auto grid max-w-[83rem] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[1100px]">
            {failedStartups.map((startup, index) => (
              <div
                key={startup.name}
                className={
                  index % 6 === 0 || index % 6 === 3
                    ? "md:col-span-2"
                    : "md:col-span-1"
                }
              >
                <MrrCard
                  name={startup.name}
                  description={startup.description}
                  mrr={startup.mrr}
                  data={startup.data}
                  iconName={startup.iconName}
                  status={startup.status as "success" | "failed"}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}