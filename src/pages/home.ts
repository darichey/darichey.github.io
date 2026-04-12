import { layout } from "../layout.js";

export function renderHome(): string {
  return layout(
    "David Richey",
    `<div>
      <div>
        <p>
          <strong>Hey, I'm David!</strong> I'm a software engineer interested in
          programming languages and functional programming.
        </p>
        <p>
          I recently graduated from UT Dallas where I earned a degree in Computer
          Science with a minor in Mathematics. I have a passion for teaching, and
          sometimes I like to <a href="/blog">write a bit about what I'm learning</a>.
        </p>
        <p>Online, I often go by Panda.</p>
      </div>
      <div>
        <img src="/img/david.jpeg" alt="Picture of me" width="160" />
      </div>
    </div>`
  );
}
