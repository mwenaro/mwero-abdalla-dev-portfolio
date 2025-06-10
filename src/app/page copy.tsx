import { FC } from "react";
import { Button } from "@/components/ui/button";

import Head from "next/head";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Stitch Design</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700;900&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-1 justify-center  py-5">
        <section className="flex max-w-[960px] flex-1 flex-col">
          <div className="flex flex-col gap-6 py-10 md:flex-row md:gap-8">
            <div
              className="aspect-video w-full rounded-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoxaV5VKyXCrfn1vub5dA-y00GsB0ugB66dDKpNo_Kl3LCwRFV7YqUxAVoX9PzWIv_6gJm5Ux4scpwRO9dAiqE4oVoedMnw26K4Qe6TTnct9UNi4I8KUXbUKCa5fk1KVllT_NmbeXWZqHtqi9eTdhwe5i6IsI6fvI-0dOkMLcmvPriuXd6l6qixM8QI2sSSLuh-bnV_mEcME8PAfxMYlCfxYZFcot62lrIewUPt16IZwZbGxaZwe-bMRen3tWqOqNS1wzCHO_EnmDC")',
              }}
            ></div>
            <div className="flex flex-col justify-center gap-6">
              <h1 className="text-4xl font-black tracking-tight md:text-5xl">
                Mwero Abdalla
              </h1>
              <h2 className="text-sm md:text-base">Full-Stack Developer</h2>
              <Button className="h-12 bg-[#327fcc] px-5 text-base font-bold text-white">
                View Projects
              </Button>
            </div>
          </div>

          <section className="px-4 pt-5">
            <h2 className="text-[22px] font-bold tracking-tight pb-3">
              About Me
            </h2>
            <p className="text-base">
              I'm a full-stack developer with a passion for creating innovative
              and user-friendly web applications. With a strong foundation in
              both front-end and back-end technologies, I enjoy tackling complex
              challenges and delivering high-quality solutions. My goal is to
              build impactful digital experiences that meet the needs of users
              and drive business success.
            </p>
          </section>

          <section className="px-4 pt-5">
            <h2 className="text-[22px] font-bold tracking-tight pb-3">
              Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "JavaScript",
                "React",
                "Node.js",
                "Express.js",
                "PostgreSQL",
                "MongoDB",
                "HTML",
                "CSS",
                "Git",
                "REST APIs",
              ].map((skill) => (
                <div
                  key={skill}
                  className="flex h-8 items-center rounded-xl bg-[#2b3036] px-4 text-sm font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>
        </section>

       
      </div>
    </>
  );
};

export default Home;
