import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <NewSkillForm />
    </div>
  );
}


