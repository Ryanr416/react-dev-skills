import "./NewSkillForm.css";
import { useState } from "react";
import SkillListItem from "./SkillListItem";


export default function NewSkillForm({addSkill}) {


  const [skill, setSkills] = useState ({
    name: "",
    level: ""
  });


  const [errorMessage, setErrorMessage] = useState('')


   function handleChange(e) {
    console.log(e.target.value);
    setSkills ({
      ...skill,
      [e.target.name]: e.target.value
    })

  }
   function handleSubmit(e){
    e.preventDefault();

  addSkill(skill)

  setErrorMessage('');

  setSkills({
    name: '',
    level: '1'
  });


    if(skill.name === '')

    return setErrorMessage('Please Enter a Skill')
   }


     return (
      
      <ul className="NewSkillForm">
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Skill
          <input type="text" name="Skill" value={skill.name} onChange={handleChange} />{" "}
        </label>
        <label>Level  
            <select name="level" onChange={handleChange}>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
                
            </select>
            <button className="skill-button">Add Skill</button>
        </label>
      </form>
      </ul>
      
  //  );
     )
     };
