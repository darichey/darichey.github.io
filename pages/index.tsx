import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="main">
        <section className="nav">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="https://github.com/darichey">GitHub</a>
        </section>

        <section className="header">
            <img className="pic" src="/img/david.png" />
            <div className="titles">
                <h1 className="title">Hey, I'm David.</h1>
                <h3 className="subtitle">Sometimes I code stuff.</h3>
            </div>
        </section>

        <section className="content">
            <p>
                I'm a senior at UT Dallas pursuing a degree in Computer Science and minoring in Mathematics.
            </p>

            <p>
                I mostly program on the JVM with Java, Scala, and Kotlin. Recently, I've been learning some Haskell,
                Rust, and TypeScript. I'm interested in functional programming, programming language design, type
                theory, and category theory.
            </p>

            <p>
                I have a passion for teaching, and sometimes I like to write a bit about what I'm learning.
            </p>

            <p>
                Online, I often go by Panda.
            </p>
        </section>

        <section className="links">
            <a href="https://github.com/darichey"><img src="img/github_mark.svg" /></a>
            <a href="https://www.linkedin.com/in/darichey/"><img src="img/linkedin_mark.svg" /></a>
            <a href="mailto:darichey1@gmail.com"><img src="img/mail.svg" /></a>
        </section>
    </div>
  )
}

export default Home
