import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState(
    "## markdown preview\n" +
      "![image](https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Bengal-Cat.jpg?itok=-n4U6Hsa)"
  );
  return (
    <main>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className="results">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default App;
