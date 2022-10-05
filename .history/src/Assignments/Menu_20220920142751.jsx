import React from "react";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();
  const redirectPage = () => {
    history.push({pathName: })
  };

  return (
    <div>
      <ul>
        <li>
          <div>HomePage</div>
        </li>
        <li>
          <div>Bài tập 2</div>
        </li>
        <li>
          <div>Bài tập 3</div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
