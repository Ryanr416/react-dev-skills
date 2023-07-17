import "./NewSkillForm.css";


export default function NewSkillForm() {
    return (
      <form>
        <label>
          {" "}
          Skill
          <input type="text" name="Skill" />{" "}
        </label>
        <label>Level  
            <select>
                <option value="1"> 1</option>
                <option value="2"> 2</option>
                <option value="3"> 3</option>
                <option value="4"> 4</option>
                <option value="5"> 5</option>
                
            </select>
            <button>Add Skill</button>
        </label>
      </form>
    );
  }
  