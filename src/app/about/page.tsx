export default function AboutPage() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#121417] dark group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Noto Sans", sans-serif' }}
    >
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                About Me
              </p>
              <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                I'm a full-stack developer with a passion for creating
                innovative and user-friendly web applications. With a strong
                foundation in both front-end and back-end technologies, I bring
                a holistic approach to software development, ensuring seamless
                integration and optimal performance. My goal is to leverage my
                skills and experience to build impactful solutions that meet the
                needs of users and drive business success.
              </p>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Experience
          </h2>
          <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            <div className="flex flex-col items-center gap-1 pt-3">
              <div
                className="text-white"
                data-icon="Briefcase"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                </svg>
              </div>
              <div className="w-[1.5px] bg-[#3f4750] h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">
                Full-Stack Developer at Tech Innovators Inc.
              </p>
              <p className="text-[#a1abb5] text-base font-normal leading-normal">
                2020 - Present
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-[1.5px] bg-[#3f4750] h-2"></div>
              <div
                className="text-white"
                data-icon="Briefcase"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                </svg>
              </div>
              <div className="w-[1.5px] bg-[#3f4750] h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">
                Software Engineer at Creative Solutions Co.
              </p>
              <p className="text-[#a1abb5] text-base font-normal leading-normal">
                2018 - 2020
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 pb-3">
              <div className="w-[1.5px] bg-[#3f4750] h-2"></div>
              <div
                className="text-white"
                data-icon="Briefcase"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">
                Junior Developer at Startup X
              </p>
              <p className="text-[#a1abb5] text-base font-normal leading-normal">
                2016 - 2018
              </p>
            </div>
          </div>
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
                Python
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                Django
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#2b3036] pl-4 pr-4">
              <p className="text-white text-sm font-medium leading-normal">
                SQL
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
            Education
          </h2>
          <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
            <div className="flex flex-col items-center gap-1 pt-3">
              <div
                className="text-white"
                data-icon="GraduationCap"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                </svg>
              </div>
              <div className="w-[1.5px] bg-[#3f4750] h-2 grow"></div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">
                Master of Science in Computer Science, University of Technology
              </p>
              <p className="text-[#a1abb5] text-base font-normal leading-normal">
                2014 - 2016
              </p>
            </div>
            <div className="flex flex-col items-center gap-1 pb-3">
              <div className="w-[1.5px] bg-[#3f4750] h-2"></div>
              <div
                className="text-white"
                data-icon="GraduationCap"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                </svg>
              </div>
            </div>
            <div className="flex flex-1 flex-col py-3">
              <p className="text-white text-base font-medium leading-normal">
                Bachelor of Science in Software Engineering, State University
              </p>
              <p className="text-[#a1abb5] text-base font-normal leading-normal">
                2010 - 2014
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
