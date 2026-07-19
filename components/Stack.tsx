import React from "react"
import { SiTableau, SiPython, SiTailwindcss, SiMysql, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbBrandNextjs } from "react-icons/tb"


const stackItems = [
  { id: 1, name: 'Tableau', icon: SiTableau, color: '#E97627' },
  { id: 2, name: 'Next.js', icon: TbBrandNextjs, color: '#000000' },
  { id: 3, name: 'Python', icon: SiPython, color: '#3776AB' },
  { id: 4, name: 'Java', icon: FaJava, color: '#007396' },
  { id: 5, name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { id: 6, name: 'SQL', icon: SiMysql, color: '#00758F' },
  { id: 7, name: 'Git', icon: SiGit, color: '#F05032' },
];

export const Stack = () => {
    return(
      <section className="border-y border-[#f4f1e8]/10 bg-[#f4f1e8]/[0.025] py-16 sm:py-20" id="stack">
        <div className="mx-auto max-w-[1200px] px-4 text-center sm:px-6">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.3em] text-[#d8ff63]">Toolbox</p>
            <h2 className="mb-8 text-4xl font-black tracking-tight text-[#f4f1e8] sm:text-5xl">My Stack</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-5">
                {stackItems.map((item) => (
                  <div 
                    key={item.id}
                    className="flex min-w-0 flex-col items-center justify-center rounded-2xl border border-[#f4f1e8]/10 bg-[#0b0d0a]/45 p-3 transition hover:border-[#d8ff63]/45 sm:p-5"
                    >
                      <div className="mb-3 rounded-2xl bg-[#f4f1e8]/8 p-4 sm:mb-4 sm:p-5">
                          {React.createElement(item.icon, {
                            className: "h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24",
                            style: {color: item.color}
                          })}
                      </div>
                      <p className="font-semibold text-[#cfd3c8]">{item.name}</p>
                  </div>
                ))}
            </div>
        </div>
      </section> 
    );
}
