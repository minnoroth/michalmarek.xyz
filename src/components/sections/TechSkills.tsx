import type { Dictionary } from "@/dictionaries/types";

type TechSkillsProps = {
	dictionary: Dictionary;
};

export function TechSkills({ dictionary }: TechSkillsProps) {
	return (
		<div className="h-full flex flex-col justify-center">
			<h2 className="text-lg font-serif font-semibold tracking-wide mb-3">
				{dictionary.sections.tech.title}
			</h2>

			<div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs">
				{/* Frontend */}
				<div>
					<h3 className="font-medium text-foreground mb-1.5">
						{dictionary.sections.tech.categories.frontend}
					</h3>
					<ul className="space-y-0.5 text-muted-foreground">
						<li>React / Next.js</li>
						<li>TypeScript</li>
						<li>Tailwind CSS</li>
						<li>Material UI</li>
					</ul>
				</div>

				{/* Backend */}
				<div>
					<h3 className="font-medium text-foreground mb-1.5">
						{dictionary.sections.tech.categories.backend}
					</h3>
					<ul className="space-y-0.5 text-muted-foreground">
						<li>Java / Spring Boot</li>
						<li>GraphQL</li>
						<li>REST API</li>
					</ul>
				</div>

				{/* Databases */}
				<div>
					<h3 className="font-medium text-foreground mb-1.5">
						{dictionary.sections.tech.categories.databases}
					</h3>
					<ul className="space-y-0.5 text-muted-foreground">
						<li>PostgreSQL</li>
						<li>Elasticsearch</li>
					</ul>
				</div>

				{/* DevOps */}
				<div>
					<h3 className="font-medium text-foreground mb-1.5">
						{dictionary.sections.tech.categories.devops}
					</h3>
					<ul className="space-y-0.5 text-muted-foreground">
						<li>Docker / K8s</li>
						<li>Git / GitLab CI</li>
						<li>Jira / Bitbucket</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
