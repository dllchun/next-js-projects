import Feed from "@components/feed.jsx";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="text-center dsec ">
        Prompopia is an open-souce AI prompting tool for modern world to
        discover, create and share creaive prompts
      </p>

      {/* Feed */}
      <Feed />
    </section>
  );
}
