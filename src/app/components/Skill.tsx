interface SkillProps {
  title: string;
  items: string[];
}

export default function Skill({ title, items }: SkillProps) {
  return (
    <div className="bg-foreground rounded-2xl max-sm:max-w-36 max-sm:min-w-16 max-md:max-w-60 max-md:min-w-60 md:max-w-96 md:min-w-96 md:h-96 mt-7 max-md:ml-2 md:ml-10 sm:p-1 md:p-2 lg:p-4 flex flex-col overflow-hidden">
      <h3 className="text-bigText w-fit sm:text-lg md:text-xl lg:text-2xl mx-auto pt-3">{title}</h3>
      <ul className="text-offwhite mt-4 flex flex-col justify-between flex-grow overflow-y-auto">
        {items.map((item, index) => (
          <li key={index} className="flex-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}
