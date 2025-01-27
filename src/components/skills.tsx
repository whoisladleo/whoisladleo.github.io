import Title from "./title";
import { PageTitle, Skill } from "@/data/do";

export default function Skills({
    title,
    skills
}: {
    title: PageTitle,
    skills: Skill[]
}) {
    return (
    <div className="min-h-screen pt-20" id="skills">
        <Title data={title}/>
        <div className="grid grid-cols-1 pl-6 pb-6 md:grid-cols-2 lg:grid-cols-3 gap-2 md:p-12">
            {skills.map((skill, index) => (
                <div className="p-2 md:p-4" key={index}>
                    <div className="flex items-center gap-4">
                        {skill.icon}
                        <h3 className="text-base md:tracking-wide md:text-xl">{skill.name}</h3>
                    </div>
                </div> 
            ))}
      </div>
    </div>
    );
}