import React from "react";

import "./Article.css"

const Article = props => {
  const direction = (props.alignment === "left" ? "row" : "row-reverse");
  const ColTextPaddingStyle = (direction === "row" ? { paddingLeft: "5.5rem" } : { paddingRight: "5.5rem" });
  return (
    <div className="Article">
      <div className="Row" style={{ flexDirection: direction }}>
        <div className="Col">
          <img src={props.img} alt={props.imageAlt} className="ArticleImage" />
        </div>
        <div className="Col ColText" style={ColTextPaddingStyle}>
          <h2>{props.SectionTitle}</h2>
          <p>{props.children}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;