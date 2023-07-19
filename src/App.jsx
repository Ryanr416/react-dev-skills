import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import { useState  } from "react";

import "./styles.css";

const skillsArray = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
];

export default function App() {

const [skills, setSkills] = useState(skillsArray);

console.log(skills)


function addSkill(skillsFromTheForm){
  console.log(skillsFromTheForm, ' Skills from the form');

  setSkills([
    skillsFromTheForm,
    ...skills
 ])
}







  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills} />
      <NewSkillForm addSkill={addSkill} />
    </div>
  );
}


