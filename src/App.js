import "./App.css";

import { useState } from "react";
import useGenerateRandomColor from "./useGenerateRandomColor";

import NewComment from "./NewComment";

function App() {
  const [text, setText] = useState();
  const [comments, setComments] = useState([]);
  const { color, generateColor } = useGenerateRandomColor();

  const handleChange = (e) => setText(e.target.value);

  const submitComment = () => {
    generateColor();
    let spam = text.replace(/viagra|XXX/gi, "***");
    setComments([{ comment: spam, color: color }].concat(comments));
    setText("");
    console.log(comments);
  };

  return (
    <div className="App">
      <div>
        <h3>Новые комментарии:</h3>
        {comments.length !== 0
          ? comments.map((item, index) => (
              <NewComment
                key={index}
                comment={item.comment}
                color={item.color}
              />
            ))
          : ""}
      </div>
      <div>
        <h3 className="title">Оставить комментарий</h3>
        <textarea name="text" value={text} onChange={handleChange}></textarea>
        <p>
          <button onClick={submitComment}>Отправить</button>
        </p>
      </div>
    </div>
  );
}

export default App;
