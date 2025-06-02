import { useState } from "react";
import produce from "immer";

const UpdateArray = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick1 = () => {
    //Add
    setTags([...tags, "sad"]);
    //Remove
    setTags(tags.filter((tag) => tag !== "happy"));
    //Update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  const handleClick = () => {
    // setBugs(
    //   bugs.map((bugs) => (bugs.id === 1 ? { ...bugs, fixed: true } : bugs))
    // );
    //draft is proxy object that records that changes we are going to apply
    setBugs(produce(draft =>{
        const bug=draft.find(bug => bug.id ===1);
        if(bug) bug.fixed = true;

    }))
  };
  return (
    <div>{bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed':'New'}</p>)}
      <button onClick={handleClick}>Fix Bug 1</button>
    </div>
  );
};

export default UpdateArray;
