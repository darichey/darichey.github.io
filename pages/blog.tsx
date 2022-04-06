import type { NextPage } from 'next'

const Blog: NextPage = () => {
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
                <h1 className="title">David's Blog</h1>
                <h3 className="subtitle">Sometimes I write stuff.</h3>
            </div>
        </section>

        <section className="content">
            <p>
                From time to time, like to write about things that I'm learning - or worse, my <i>opinions</i>.
            </p>
            <p>
                Keep in mind that I am by no means an authoritative source on anything I write about.
                I write these posts in order to aid my own learning and in the hope that others can learn from them.
            </p>

            <p>
                I'm currently working on getting asciidoctor working so these posts can look nice. Here's a preview of
                what I plan on posting first &#128522;
            </p>
            <ul>
                <li>Arity of Types</li>
                <li>Trampolines in Java</li>
                <li>String Concatenation in Java</li>
                <li>Subtyping Variance</li>
            </ul>
        </section>
    </div>
  );
}

export default Blog;