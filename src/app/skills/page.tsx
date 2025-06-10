export default function SkillsPage() {
  return (
    <div className="layout-container flex h-full grow flex-col">
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                Skills
              </p>
              <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                A comprehensive overview of my technical and soft skills,
                showcasing my proficiency in various technologies and
                methodologies.
              </p>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Programming Languages
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="AngularLogo"
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
                  <path d="M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                JavaScript
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="AngularLogo"
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
                  <path d="M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                TypeScript
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="PaypalLogo"
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
                  <path d="M220.12,93.54a55.8,55.8,0,0,0-20.19-16.18A56,56,0,0,0,144,24H84A16,16,0,0,0,68.48,36.12l-36,144A16,16,0,0,0,48,200h27.5l-3,12.12A16,16,0,0,0,88,232h31.5A16,16,0,0,0,135,219.88L144,184h32a56,56,0,0,0,44.14-90.46ZM48,184,84,40h60a40,40,0,0,1,39.3,32.49A57,57,0,0,0,176,72H120a16,16,0,0,0-15.53,12.12L79.52,184H48ZM183,88.62c-.08.36-.15.72-.24,1.08A39.94,39.94,0,0,1,144,120H112l8-32h56A40.07,40.07,0,0,1,183,88.62Zm31.76,49.08A39.94,39.94,0,0,1,176,168H144a16,16,0,0,0-15.52,12.12l-9,35.88H88l20-80h36a55.9,55.9,0,0,0,54-41.39,40.2,40.2,0,0,1,9.48,8.77A39.73,39.73,0,0,1,214.78,137.7Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                PHP
              </h2>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Front-End Development
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="AngularLogo"
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
                  <path d="M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                HTML
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="CodepenLogo"
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
                  <path d="M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7.05l104,56a8,8,0,0,0,7.58,0l104-56A8,8,0,0,0,240,160V96A8,8,0,0,0,235.79,89ZM224,146.61,189.45,128,224,109.39Zm-51.43-27.7L136,99.22V53.39L215.13,96Zm-44.57,24L100.3,128,128,113.09,155.7,128Zm-8-89.52V99.22L83.43,118.91,40.87,96Zm-88,56L66.55,128,32,146.61Zm51.43,27.7L120,156.78v45.83L40.87,160ZM136,202.61V156.78l36.57-19.69L215.13,160Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                CSS
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="CodesandboxLogo"
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
                  <path d="M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                React
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="AngularLogo"
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
                  <path d="M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Next.js
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="RedditLogo"
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
                  <path d="M248,104a32,32,0,0,0-52.94-24.19c-16.75-8.9-36.76-14.28-57.66-15.53l5.19-31.17,17.72,2.72a24,24,0,1,0,2.87-15.74l-26-4a8,8,0,0,0-9.11,6.59L121.2,64.16c-21.84.94-42.82,6.38-60.26,15.65a32,32,0,0,0-42.59,47.74A59,59,0,0,0,16,144c0,21.93,12,42.35,33.91,57.49C70.88,216,98.61,224,128,224s57.12-8,78.09-22.51C228,186.35,240,165.93,240,144a59,59,0,0,0-2.35-16.45A32.16,32.16,0,0,0,248,104ZM184,24a8,8,0,1,1-8,8A8,8,0,0,1,184,24Zm40.13,93.78a8,8,0,0,0-3.29,10A43.58,43.58,0,0,1,224,144c0,16.53-9.59,32.27-27,44.33C178.67,201,154.17,208,128,208s-50.67-7-69-19.67C41.59,176.27,32,160.53,32,144a43.75,43.75,0,0,1,3.14-16.17,8,8,0,0,0-3.27-10A16,16,0,1,1,52.94,94.59a8,8,0,0,0,10.45,2.23l.36-.22C81.45,85.9,104.25,80,128,80h0c23.73,0,46.53,5.9,64.23,16.6l.42.25a8,8,0,0,0,10.39-2.26,16,16,0,1,1,21.07,23.19ZM88,144a16,16,0,1,1,16-16A16,16,0,0,1,88,144Zm96-16a16,16,0,1,1-16-16A16,16,0,0,1,184,128Zm-16.93,44.25a8,8,0,0,1-3.32,10.82,76.18,76.18,0,0,1-71.5,0,8,8,0,1,1,7.5-14.14,60.18,60.18,0,0,0,56.5,0A8,8,0,0,1,167.07,172.25Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Redux
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="AngularLogo"
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
                  <path d="M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Bootstrap
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="CodepenLogo"
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
                  <path d="M235.79,89l-104-56a8,8,0,0,0-7.58,0l-104,56A8,8,0,0,0,16,96v64a8,8,0,0,0,4.21,7.05l104,56a8,8,0,0,0,7.58,0l104-56A8,8,0,0,0,240,160V96A8,8,0,0,0,235.79,89ZM224,146.61,189.45,128,224,109.39Zm-51.43-27.7L136,99.22V53.39L215.13,96Zm-44.57,24L100.3,128,128,113.09,155.7,128Zm-8-89.52V99.22L83.43,118.91,40.87,96Zm-88,56L66.55,128,32,146.61Zm51.43,27.7L120,156.78v45.83L40.87,160ZM136,202.61V156.78l36.57-19.69L215.13,160Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Tailwind CSS
              </h2>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Back-End Development
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="AngularLogo"
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
                  <path d="M227.08,64.62l-96-40a7.93,7.93,0,0,0-6.16,0l-96,40a8,8,0,0,0-4.85,8.44l16,120a8,8,0,0,0,4.35,6.1l80,40a8,8,0,0,0,7.16,0l80-40a8,8,0,0,0,4.35-6.1l16-120A8,8,0,0,0,227.08,64.62ZM200.63,186.74,128,223.06,55.37,186.74,40.74,77,128,40.67,215.26,77ZM121,84.12l-40,72a8,8,0,1,0,14,7.76L106,144H150l11,19.88a8,8,0,1,0,14-7.76l-40-72a8,8,0,0,0-14,0ZM141.07,128H114.93L128,104.47Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Node.js
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="MessengerLogo"
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
                  <path d="M181.66,106.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32,0L112,123.31,85.66,149.66a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0L144,132.69l26.34-26.35A8,8,0,0,1,181.66,106.34ZM232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.52a8,8,0,0,1,6.54.67A88,88,0,0,0,216,128Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Express
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="StackOverflowLogo"
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
                  <path d="M216,152.09V216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152.09a8,8,0,0,1,16,0V208H200V152.09a8,8,0,0,1,16,0Zm-128,32h80a8,8,0,1,0,0-16H88a8,8,0,1,0,0,16Zm4.88-53,77.27,20.68a7.89,7.89,0,0,0,2.08.28,8,8,0,0,0,2.07-15.71L97,115.61A8,8,0,1,0,92.88,131Zm18.45-49.93,69.28,40a8,8,0,0,0,10.93-2.93,8,8,0,0,0-2.93-10.91L119.33,67.27a8,8,0,1,0-8,13.84Zm87.33,13A8,8,0,1,0,210,82.84l-56.57-56.5a8,8,0,0,0-11.32,11.3Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                MongoDB
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="StackOverflowLogo"
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
                  <path d="M216,152.09V216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152.09a8,8,0,0,1,16,0V208H200V152.09a8,8,0,0,1,16,0Zm-128,32h80a8,8,0,1,0,0-16H88a8,8,0,1,0,0,16Zm4.88-53,77.27,20.68a7.89,7.89,0,0,0,2.08.28,8,8,0,0,0,2.07-15.71L97,115.61A8,8,0,1,0,92.88,131Zm18.45-49.93,69.28,40a8,8,0,0,0,10.93-2.93,8,8,0,0,0-2.93-10.91L119.33,67.27a8,8,0,1,0-8,13.84Zm87.33,13A8,8,0,1,0,210,82.84l-56.57-56.5a8,8,0,0,0-11.32,11.3Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                SQL
              </h2>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Tools &amp; Technologies
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="GithubLogo"
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
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Git
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="GithubLogo"
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
                  <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                GitHub
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="AmazonLogo"
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
                  <path d="M248,168v32a8,8,0,0,1-16,0V187.31l-2.21,2.22C226.69,192.9,189.44,232,128,232c-62.84,0-100.38-40.91-101.95-42.65A8,8,0,0,1,38,178.65C38.27,179,72.5,216,128,216s89.73-37,90.07-37.36a3.85,3.85,0,0,1,.27-.3l2.35-2.34H208a8,8,0,0,1,0-16h32A8,8,0,0,1,248,168ZM160,94.53V84A36,36,0,0,0,91.92,67.64a8,8,0,0,1-14.25-7.28A52,52,0,0,1,176,84v92a8,8,0,0,1-16,0v-6.53a52,52,0,1,1,0-74.94ZM160,132a36,36,0,1,0-36,36A36,36,0,0,0,160,132Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                AWS
              </h2>
            </div>
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="FigmaLogo"
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
                  <path d="M184,96a40,40,0,0,0-24-72H88A40,40,0,0,0,64,96a40,40,0,0,0,1.37,65A44,44,0,1,0,136,196V160a40,40,0,1,0,48-64Zm0-32a24,24,0,0,1-24,24H136V40h24A24,24,0,0,1,184,64ZM64,64A24,24,0,0,1,88,40h32V88H88A24,24,0,0,1,64,64Zm24,88a24,24,0,0,1,0-48h32v48H88Zm32,44a28,28,0,1,1-28-28h28Zm40-44a24,24,0,1,1,24-24A24,24,0,0,1,160,152Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Figma
              </h2>
            </div>
          </div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            Project Management
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-1 gap-3 rounded-lg border border-[#3f4750] bg-[#1d2125] p-4 items-center">
              <div
                className="text-white"
                data-icon="Kanban"
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
                  <path d="M216,48H40a8,8,0,0,0-8,8V208a16,16,0,0,0,16,16H88a16,16,0,0,0,16-16V160h48v16a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V56A8,8,0,0,0,216,48ZM88,208H48V128H88Zm0-96H48V64H88Zm64,32H104V64h48Zm56,32H168V128h40Zm0-64H168V64h40Z"></path>
                </svg>
              </div>
              <h2 className="text-white text-base font-bold leading-tight">
                Agile Methodologies
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
