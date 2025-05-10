import React from "react";

interface ICard {
  taskInfo: string;
  nextAction?: () => void;
  prevAction?: () => void;
}

const Card: React.FC<ICard> = ({ taskInfo, nextAction, prevAction }) => {
  return (
    <div style={{ padding: '4px', margin: "10px", border: '2px solid black', borderRadius: '4px' }}>
      <div className="textDiv">{taskInfo}</div>
      <div className="btnContainer">
        {prevAction && (
          <button style={{ backgroundColor: "bisque" }} onClick={prevAction}>
            Prev
          </button>
        )}
        {nextAction && (
          <button
            style={{ backgroundColor: "cornflowerblue" }}
            onClick={nextAction}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
