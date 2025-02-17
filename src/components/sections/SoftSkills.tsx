import { Dictionary } from "@/dictionaries/types";

type SoftSkill = {
    name: string;
    description: string;
};

type SoftSkillsProps = {
    dictionary: Dictionary;
};

const LanguageSkill = ({ name, level, description }: { 
    name: string; 
    level: string; 
    description: string; 
}) => (
    <div className="flex items-center justify-between">
        <div>
            <span className="font-medium">{name}</span>
            <span className="text-sm text-muted-foreground ml-2">({description})</span>
        </div>
        <span className="text-sm font-mono bg-primary/10 px-2 py-0.5 rounded">
            {level}
        </span>
    </div>
);

export function SoftSkills({ dictionary }: SoftSkillsProps) {
    const SOFT_SKILLS: SoftSkill[] = [
        {
            name: dictionary.sections.soft.teamwork.name,
            description: dictionary.sections.soft.teamwork.description
        },
        {
            name: dictionary.sections.soft.communication.name,
            description: dictionary.sections.soft.communication.description
        },
        {
            name: dictionary.sections.soft.quickLearner.name,
            description: dictionary.sections.soft.quickLearner.description
        },
        {
            name: dictionary.sections.soft.attentionToDetail.name,
            description: dictionary.sections.soft.attentionToDetail.description
        }
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">{dictionary.sections.soft.title}</h2>
            <div className="space-y-4">
                {SOFT_SKILLS.map((skill) => (
                    <div key={skill.name} className="p-4 rounded-lg border bg-card">
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            {skill.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="p-4 rounded-lg border bg-card">
                <h3 className="font-semibold">{dictionary.sections.soft.foreignLanguages.name}</h3>
                <p className="mt-1 mb-3 text-sm text-muted-foreground">
                    {dictionary.sections.soft.foreignLanguages.description}
                </p>
                <div className="space-y-2">
                    {Object.values(dictionary.sections.soft.foreignLanguages.languages).map((lang) => (
                        <LanguageSkill
                            key={lang.name}
                            name={lang.name}
                            level={lang.level}
                            description={lang.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
} 