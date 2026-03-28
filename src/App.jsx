const programs = [
  {
    title: "Web Development",
    description:
      "Build responsive websites and modern web applications with current tools and frameworks."
  },
  {
    title: "Data & AI",
    description:
      "Learn to process data, train smart models, and apply AI techniques to real-world problems."
  },
  {
    title: "Cybersecurity",
    description:
      "Understand digital threats, security fundamentals, and best practices for safe systems."
  }
];

const highlights = [
  "Hands-on workshops in web development, AI, and cybersecurity.",
  "Mentorship from experienced lecturers and industry professionals.",
  "Community events, hackathons, and innovation challenges."
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-fitSky font-body text-slate-800">
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 animate-float rounded-full bg-fitTeal/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 animate-float rounded-full bg-fitBlue/20 blur-3xl [animation-delay:1.3s]" />

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 reveal [animation-delay:120ms]">
        <div className="font-display text-2xl font-extrabold text-fitBlue">FIT UP</div>
        <a
          href="#join"
          className="rounded-full bg-fitBlue px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-900"
        >
          Join Now
        </a>
      </header>

      <main className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 pb-20 pt-8 md:grid-cols-2 md:pt-16">
        <section className="reveal [animation-delay:220ms]">
          <p className="mb-3 inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-sm font-semibold text-fitBlue shadow-sm">
            FIT UP 2026
          </p>
          <h1 className="font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            FIT UP - Falcuty of Information Technology
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            A vibrant learning hub for future tech leaders. Explore practical projects, connect with peers,
            and grow your digital skills with a supportive community.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#programs"
              className="rounded-full bg-fitTeal px-6 py-3 font-semibold text-white transition hover:bg-teal-600"
            >
              Explore Programs
            </a>
            <a
              href="#about"
              className="rounded-full border border-fitBlue px-6 py-3 font-semibold text-fitBlue transition hover:bg-fitBlue hover:text-white"
            >
              Learn More
            </a>
          </div>
        </section>

        <section className="reveal rounded-3xl bg-white/90 p-8 shadow-xl shadow-slate-300/40 backdrop-blur [animation-delay:320ms]">
          <h2 className="font-display text-2xl font-bold text-fitBlue">Why FIT UP?</h2>
          <ul className="mt-6 space-y-4 text-slate-700">
            {highlights.map((item) => (
              <li className="flex items-start gap-3" key={item}>
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-fitTeal" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <section id="programs" className="mx-auto w-full max-w-6xl px-6 pb-20 reveal [animation-delay:420ms]">
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <article
              className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              key={program.title}
            >
              <h3 className="font-display text-xl font-semibold text-fitBlue">{program.title}</h3>
              <p className="mt-3 text-slate-600">{program.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="join" className="mx-auto w-full max-w-6xl px-6 pb-20 reveal [animation-delay:520ms]">
        <div className="rounded-3xl bg-fitBlue px-8 py-10 text-white md:flex md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold">Ready to level up with FIT UP?</h2>
            <p className="mt-2 max-w-2xl text-blue-100">
              Be part of a dynamic tech community and take your first step toward an exciting IT career.
            </p>
          </div>
          <a
            href="#"
            className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-fitBlue transition hover:bg-blue-50 md:mt-0"
          >
            Register Today
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
