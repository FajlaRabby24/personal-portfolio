import Reveal from "../Animation/Reveal";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="max-w-6xl mx-auto px-3 xl:px-0 scroll-mt-24"
    >
      <h1 className="section-title">About me</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        {/* one  */}
        <Reveal className=" md:col-span-8 grid-box">
          <h3 className="grid-box-title">My Programming Journey</h3>
          <p>
            My programming journey started a long time ago, an interesting thing
            is that the reason behind my coming to programming is that I
            actually like programming since the different themes in the code
            editor show the codes in different colors. First I started with HTML
            CSS which I watched on YouTube and then I got interested in
            JavaScript. From then on, I actually got more interested in doing
            something with programming.
          </p>
        </Reveal>

        {/* two  */}
        <Reveal className="bg md:col-span-4 grid-box">
          <h3 className="grid-box-title">How I learned programming</h3>
          <p>
            At first, I learned by watching various playlists on YouTube, but at
            one point I realized that there were very few opportunities to get
            help here, so I thought, let's actually take a course later.
          </p>
        </Reveal>

        {/* four  */}
        <Reveal className="bg2 md:col-span-4  grid-box">
          <h3 className="grid-box-title">
            All the projects I have done so far
          </h3>
          <p>
            I have done more than 3 projects till now — Car Rental App, Recipe
            Book App and authentication system. In each project I have handled
            the frontend and backend myself.
          </p>
        </Reveal>
        {/* three  */}
        <Reveal className="bg2 md:col-span-8 grid-box">
          <h3 className="grid-box-title">The kind of work I like</h3>
          <p>
            I love working on projects where UI/UX is important. I like to
            create minimalist and responsive designs. I am also interested in
            API integration and authentication-related work. At the same time, I
            also love challenging work because there is little interest in work
            that does not have challenges.
          </p>
        </Reveal>
        {/* five  */}
        <Reveal className="bg2 md:col-span-4 row-span-2 grid-box">
          <h3 className="grid-box-title">Future goals</h3>
          <p>
            Although programming is difficult, I enjoy learning it, so I have
            made plans to learn Next.js, TypeScript, Python, and C++ in the
            future. My goal is to create a SaaS app as a full-stack developer.
          </p>
        </Reveal>

        {/* six  */}
        <Reveal className="bg2 md:col-span-4 -6 grid-box">
          <h3 className="grid-box-title">My skills and tools</h3>
          <p>
            I work with the MERN Stack (MongoDB, Express, React, Node.js). I am
            also proficient in Tailwind CSS, Firebase, JWT, and GitHub version
            control. My favorite tools are React and Tailwind CSS.
          </p>
        </Reveal>
        {/* seven  */}
        <Reveal className="bg2 md:col-span-4 -5 grid-box">
          <h3 className="grid-box-title">solve the problem?</h3>
          <p>
            When I encounter a problem, I first look at Google or Stack
            Overflow. Then I look at the documentation. If it doesn't work after
            trying multiple methods, I try to understand it myself by watching
            YouTube or chatGPT.
          </p>
        </Reveal>

        {/* nine  */}
        <Reveal className="bg2 md:col-span-8 grid-box ">
          <h3 className="grid-box-title">What's good without programming?</h3>
          <p>
            Apart from coding, I like to play football, sometimes when I go to
            my village, I play football, and I also use other activities.
            Besides, when I am in the city, most of the time I spend on my
            computer screen to gain knowledge, especially programming related
            knowledge.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
