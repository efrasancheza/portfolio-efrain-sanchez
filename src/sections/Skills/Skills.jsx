import { skills } from './skillsData';
import SkillCard from './SkillCard';

export default function Skills() {
  return (
    <section id="skill"
    className="pt-28 pb-20 mt-20 py-20 bg-gray-900 opacity-80 dark:bg-gray-900 dark:opacity-80">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl text-lime-100 font-bold text-center mb-12">
          Mis <span className="text-lime-100">Habilidades</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}