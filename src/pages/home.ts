import { layout } from "../layout.js";

export function renderHome(): string {
  return layout(
    { title: "David Richey", path: "/" },
    `<div>
      <p>
        <strong>Hey, I'm David!</strong> I'm a software engineer interested in
        programming languages and functional programming. Since earning my degree
        in Computer Science at the University of Texas at Dallas, I have spent
        the last few years working on developer tools like IDE tooling and, most
        recently, AI-powered developer tools.
      </p>
      <p>Online, I often go by Panda.</p>
    </div>`
  );
}
