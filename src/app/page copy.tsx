

export default function HomePage() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="@container">
            <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                style={{
                  backgroundImage: 'url("/mwero-passport.png")',
                  // 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoxaV5VKyXCrfn1vub5dA-y00GsB0ugB66dDKpNo_Kl3LCwRFV7YqUxAVoX9PzWIv_6gJm5Ux4scpwRO9dAiqE4oVoedMnw26K4Qe6TTnct9UNi4I8KUXbUKCa5fk1KVllT_NmbeXWZqHtqi9eTdhwe5i6IsI6fvI-0dOkMLcmvPriuXd6l6qixM8QI2sSSLuh-bnV_mEcME8PAfxMYlCfxYZFcot62lrIewUPt16IZwZbGxaZwe-bMRen3tWqOqNS1wzCHO_EnmDC")',
                }}
              ></div>
              <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Mwero Abdalla
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Full-Stack Developer
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#327fcc] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">View Projects</span>
                </button>
              </div>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            About Me
          </h2>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
            I&apos;m a full-stack developer with a passion for creating innovative
            and user-friendly web applications. With a strong foundation in both
            front-end and back-end technologies, I enjoy tackling complex
            challenges and delivering high-quality solutions. My goal is to
            build impactful digital experiences that meet the needs of users and
            drive business success.
          </p>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Skills
          </h2>
          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                JavaScript
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                React
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                Node.js
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                Express.js
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                PostgreSQL
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                MongoDB
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                HTML
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                CSS
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                Git
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                REST APIs
              </p>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Projects
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUk2zQskx92sfJQMergczXqYWQHR7n07vQ8RMg1m37PHSwjXrAXPp5gz33Tgzxj8bYozNn4MSQuLgoL4HXCSHNNbGBzXZFS2n3ssEmc4yp7AZEdsIQ-TOHBxo8vcyDq6owwOrw6A7SJfZj-JM1GLnWW5RupE1EYjTJiG3E476LIkutSeq-H7LBa0VZveCcT-2gLweKpACzdzKjXgynpoKdBudQcUPvUdGtgjMlgN-s8Y6M7apLNCmITUhqueCj9xV-BqYCyt-j3N_C")',
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  E-commerce Platform
                </p>
                <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                  A full-featured e-commerce platform with user authentication,
                  product management, and payment integration.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJRXBDUc2H7CIbKRfbtMqKR5ncn0LxbppxWmmZNJ6NT06vomkWI1W3hjb6c5XtCu7IkFq7Cpo-A_XsC_ehqnodra2QE5hN9emUL03vCj_qryw0tBBZnBhX8quJA9knMWfRsioQtqwuyuUssNp2UZt0V1CzBWBuka0EBjepV8ybe0EQpwhskjmW7dKbWd0dYBG2hpqAq6LOBUOOtYlrI6Nl7KmLfUoLmDlTyzdPRk9HDfsGcNIo1gwX-Wg5_IpFXfJpRHUH2S5ahyWI")',
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Social Media App
                </p>
                <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                  A social media application with user profiles, posts, and
                  real-time updates.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVKtTNsDdJA_tlCGqKX7KI13-hMNR2UdIsATvI86WIPAx6wjinh6t7yscgUxJWNaGgXLqalUz8Yc-m7C7v5IvyvOjbh759ukcGSUyxtnUBp3RwE_nmbR7-ptpuO_v49CKQ7_JZOMGRxI59qRwce5g7hiuMv5TvYNF7OQszmhOrGt6E0-vR7Pzl5YX8ePOv08u3QaD8TI6jHRT0TStJQEdUGNR9oNiFZGd_oJiO-m5R3_fR9TTkyB9rtnPznjW1TP1DtvyGvR5UtrH5")',
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Task Management Tool
                </p>
                <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                  A task management tool with project organization, task
                  assignment, and progress tracking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
