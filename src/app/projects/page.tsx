import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight">
                Projects
              </p>
              <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                Explore a selection of my recent projects, showcasing my skills
                in full-stack development. Each project includes a brief
                description, technologies used, and links to live demos and
                repositories.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfWQ1XSV2-qOWdzL3bkk1XpIdTh4_BibIDoxgtMl5t19GZL5aKF__4mKM19ma-v9DYrCW8UPqZA8Z25nZEji1oK65AdEda_CE7gIQCpk7HMz8evaW-XmjN3T5lxMnYg8CwUFDRp5NJOeMCbJwA-C04-8FMTFpbWq_xotIKjQ-Vc9uJfSBa0q-wXP_pay6V6gT6K_DqTXz6oxQnPY9bboG0ffcIDkVGZKx1a-Y1MhDHi3aER1CsA8tCDFf7cGPPMyvGO59tAJa_W0IE");',
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
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg1iEvOEJOPhwPYIRxKaN5YdM29EyWYk833NRr_0EWTM0D53tLwGp5mAQvDx3CeBRkfiTMl9HbfPltAI6ghJ8xlsmRiXD9blJB8bYy6jYpdcfVt2Xd1qHjrfAebhUuMdCtI1ueWrpWc4IRsuwiIudrIcobR5Qrh7plYCdg0zbQt9CjhsFXSa4TF5QWZJXwPxZQBLNCBuxpgeN2VMZ5sFn_8du_WMgXswA_9c7FBqrqZDXP-NZ17SGDXsVfGKla7epL3zjrk3Xl1abp");',
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Social Media App
                </p>
                <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                  A social media application with user profiles, posts,
                  comments, and real-time updates.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjWoUsXGx8D_vgvBLnLfXSsda1ICbwl8lH3BxnTzKkPWvfxyMc0rLV8vs6B5jXpk4R-ZEtpYuTfP3X9U1LWjEdgvG6fh17bFIBEnDf-vqAJY5VsxtTjwuSY3kWZaLibUeYJ-hhU-Hr4dqyVT2OJ4VqIKB9RMzp9ErkCOoTruKTXu7ACJw91KKoxpBqtk1XykoQN_SE3abrdSExkI_bL3q1ye9H1q4LjEkWrdzsbGBx-CA4m3G1lLjKcKyIyiow7JdVC-If8tXnSNoK");',
                }}
              ></div>
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Task Management System
                </p>
                <p className="text-[#a1abb5] text-sm font-normal leading-normal">
                  A task management system with user roles, project assignments,
                  and progress tracking.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#327fcc] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Live Demo</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2b3036] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Repository</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#327fcc] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Live Demo</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2b3036] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Repository</span>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 max-w-[480px] justify-center">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#327fcc] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Live Demo</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2b3036] text-white text-sm font-bold leading-normal tracking-[0.015em] grow">
                <span className="truncate">Repository</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
