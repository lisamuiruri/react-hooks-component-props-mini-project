import React from "react";

function Article({ title, date, preview }) {
  const displayDate = date || "January 1, 1970"; // Default date if not provided

  return (
    <article>
      <h3>{title}</h3>
      <small>{displayDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;