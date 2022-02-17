import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const Work = ({ frontmatter, content }) => {
  return (
    <main className="px-12 md:px-24 py-24">
      <div className="mb-16 text-2xl font-sans">
        <Link href={"/"}>&#8592; Home</Link>
      </div>
      <div>
        <h1 className="text-6xl">{frontmatter.title}</h1>
        <div className="mt-8 grid grid-cols-2">
          <img src={frontmatter.image} className="w-full" />
          <img src={frontmatter.image2} className="w-full" />
        </div>
        <h2 className="mt-8 text-4xl font-sans">{frontmatter.desc}</h2>
      </div>
      <div className="mt-16 text-2xl font-sans">
        <ReactMarkdown children={content} />
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync("works");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`works/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default Work;
