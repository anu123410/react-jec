import { useState } from "react";
import { ImCompass } from "react-icons/im";

const reactionArray = [
  "🤍",
  "💗",
  "💛",
  "💔",
  "💙",
  "💜",
  "🤎",
  "🧡",
  "💚",
  "🖤",
  "💕",
  "❤️"
];

function ArrayTask() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h2>
        Likes: {count}{" "}
        {
          count < reactionArray.length
            ? reactionArray[count]
            : reactionArray[reactionArray.length - 1]
        }
      </h2>

      <ImCompass
        size={40}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default ArrayTask;