"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  FaBaby,
  FaChild,
  FaUserGraduate,
  FaUserTie,
  FaCrown,
} from "react-icons/fa";

const skillLevels = [
  { value: "BEGINNER", label: "Beginner", icon: FaBaby },
  { value: "INTERMEDIATE", label: "Intermediate", icon: FaChild },
  { value: "ADVANCED", label: "Advanced", icon: FaUserGraduate },
  { value: "EXPERT", label: "Expert", icon: FaUserTie },
  { value: "MASTER", label: "Master", icon: FaCrown },
];

export default function SkillFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSkills = searchParams.getAll("skills");

  const handleSkillChange = (skill: string, isChecked: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    const skills = params.getAll("skills");

    if (isChecked && !skills.includes(skill)) {
      params.append("skills", skill);
    } else if (!isChecked) {
      const updatedSkills = skills.filter((s) => s !== skill);
      params.delete("skills");
      updatedSkills.forEach((s) => params.append("skills", s));
    }

    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="flex flex-col space-y-2 my-2">
      {skillLevels.map((skill) => (
        <label
          key={skill.value}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="relative flex items-center">
            <input
              type="checkbox"
              id={`skill-${skill.value}`}
              checked={currentSkills.includes(skill.value)}
              onChange={(e) => handleSkillChange(skill.value, e.target.checked)}
              className="w-4 h-4 opacity-0 absolute"
            />
            <div
              className={`w-4 h-4 border rounded flex items-center justify-center ${
                currentSkills.includes(skill.value)
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-300"
              }`}
            >
              {currentSkills.includes(skill.value) && (
                <svg
                  className="w-3 h-3 text-white fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
              )}
            </div>
          </div>
          <span className="flex items-center text-sm text-gray-700">
            {React.createElement(skill.icon, {
              className: `w-5 h-5 mr-2 ${
                currentSkills.includes(skill.value)
                  ? "text-blue-500"
                  : "text-gray-400"
              }`,
            })}
            <span
              className={
                currentSkills.includes(skill.value) ? "font-semibold" : ""
              }
            >
              {skill.label}
            </span>
          </span>
        </label>
      ))}
    </div>
  );
}
