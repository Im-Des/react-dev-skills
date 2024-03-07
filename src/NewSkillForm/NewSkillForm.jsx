import { useState } from 'react'

export default function NewSkillForm({}) {
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState({
        name: '',
        level: '1'
    });
    function handleChange(e){
        const { name, value } = e.target;
        setNewSkill({
            ...newSkill,
            [name]: value
        });
    };

    function handleSubmit(e){
		e.preventDefault(); // stops the browser from making http requests
		// you'll always have this line of code for onSubmit handleres

        setSkills([...skills, newSkill]); // update skill list

        setNewSkill({
            name: '',
            level: '1'
        }); // reset form
    }
		// call the prop function to lift state to app
		// handleNewSkill(newSkill); // not sure if i need this for the new method
    
    
    return (
        <div>
        <form onSubmit={handleSubmit} className='NewSkillForm'>
            <label>Skill</label>
            <input type="text" name="name" value={newSkill.name} onChange={handleChange}/>

            <label>Level</label>
            <select name="level" value={newSkill.level} onChange={handleChange}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>

            <button type="submit">ADD SKILL</button>
        </form>
        <ul>
        {skills.map((skill, index) => (
            <li key={index} className="SkillListItem">{skill.name} - {skill.level}</li>
        ))}
    </ul>
    </div>
    );
};


