export default function SkillCard({ skill }) {
  return (
    <div className="bg-white dark:bg-white-800 p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-3">
        <i className={`${skill.icon} ${skill.color} text-2xl mr-3`} />
        <h3 className="font-medium">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-indigo-600 h-2 rounded-full" 
          style={{ width: skill.level }}
        />
      </div>
    </div>
  );
}