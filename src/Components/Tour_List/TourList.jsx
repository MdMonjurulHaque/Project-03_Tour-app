import React, { useCallback, useState } from "react";
import "./tourList.css";
const TourList = ({ id, name, desc, image, price, removeTour}) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article>
      <div className="article-container">
        <div>
          <h1>{name}</h1>
          <p>
            {readMore ? desc : `${desc.substring(0, 150)}...`}
            <button onClick={() => setReadMore(!readMore)} className="readMoreButton">
              {readMore ? "show less" : "  read more"}
            </button>
          </p>
        </div>
        <div>
          <img src={image} alt={name} height={500} />
          <p className="price">{price}</p>
        </div>
      </div>
      <div className="btn">
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};

export default TourList;
