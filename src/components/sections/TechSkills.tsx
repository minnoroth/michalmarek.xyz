import { Dictionary } from "@/dictionaries/types";

type TechSkillsProps = {
    dictionary: Dictionary;
};

export function TechSkills({ dictionary }: TechSkillsProps) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">{dictionary.sections.tech.title}</h2>
            
            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold mb-2">{dictionary.sections.tech.categories.programming}</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <span className="text-foreground">JavaScript</span>
                            <ul className="ml-4 mt-1 space-y-1 text-muted-foreground">
                                <li>Vue.js (Nuxt.js)</li>
                                <li>ReactJS (Next.js)</li>
                            </ul>
                        </li>
                        <li>
                            <span className="text-foreground">Java</span>
                            <ul className="ml-4 mt-1 space-y-1 text-muted-foreground">
                                <li>Spring Boot</li>
                            </ul>
                        </li>
                        <li>
                            <span className="text-foreground">PHP</span>
                            <ul className="ml-4 mt-1 space-y-1 text-muted-foreground">
                                <li>Symfony</li>
                            </ul>
                        </li>
                        <li className="text-foreground">TypeScript</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">{dictionary.sections.tech.categories.databases}</h3>
                    <ul className="space-y-1 text-sm text-foreground">
                        <li>PostgreSQL</li>
                        <li>Oracle</li>
                        <li>LDAP</li>
                        <li>Active Directory (AD)</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-2">{dictionary.sections.tech.categories.devops}</h3>
                    <ul className="space-y-1 text-sm text-foreground">
                        <li>Git</li>
                        <li>Gitlab CLI</li>
                        <li>Docker</li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 