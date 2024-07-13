import Skill from "../components/Skill";

export default function Skills() {
  const generalSkills = [
    "Computers (i.e. How they Work, How to Build One e.t.c)",
    "Intermediate Computer Science Theory",
    "Data Structures",
    "Algorithms",
    "Object-Oriented Programming (OOP)",
  ];

  const webSkills = [
    "HTML/CSS",
    "Typescript",
    "React",
    "JavaScript",
    "Node.js + Express.js",
    "MongoDB + mongoose",
    "TailWind"
  ];
  const programmingSkills = [
    "C (Intermediate)",
    "C++ (Advanced)",
    "C# (Advanced)",
    "Python (Intermediate)",
    "Java (Intermediate)",
    "JS + TS (Advanced)",
    "Kotlin (Basic)",
    "Lua (Basic)",
    "Ruby (Intermediate)",
  ];
  const otherSkills = [
    "Adobe Photoshop",
    "Adobe Premiere Pro",
    "Adobe Illustrator",
    "Microsoft Word, Excel and PowerPoint",
    "Capcut",
    "Photopea",
    "Git",
    "GitHub",
  ];

  return (
    <div className="min-h-screen w-screen bg-background1 pb-12" id="skillsPage">
      <h1 className="text-5xl text-offwhite text-center py-5">My Skills</h1>

      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col">
          <Skill title="General" items={generalSkills} />
          <Skill title="Web Development" items={webSkills} />
        </div>

        <div className="flex flex-col">
          <Skill title="Programming Languages" items={programmingSkills} />
          <Skill title="Other" items={otherSkills} />
        </div>
      </div>
    </div>
  );
}
