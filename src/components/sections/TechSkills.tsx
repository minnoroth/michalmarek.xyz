import type { Dictionary } from "@/dictionaries/types";

type TechSkillsProps = {
	dictionary: Dictionary;
};

export function TechSkills({ dictionary }: TechSkillsProps) {
	return (
		<div className="space-y-6">
			<h2 className="text-2xl font-bold">{dictionary.sections.tech.title}</h2>

			<div className="space-y-4">
				<div>
					<h3 className="font-semibold mb-2">
						{dictionary.sections.tech.categories.programming}
					</h3>
					<ul className="space-y-2 text-sm">
						<li>
							<span className="text-foreground">
								{dictionary.sections.tech.categories.frontend}
							</span>
							<ul className="ml-4 mt-1 space-y-1 text-muted-foreground">
								<li>ReactJS (Next.js)</li>
								<li>Vue.js (Nuxt.js)</li>
								<li>TypeScript</li>
								<li>Material UI</li>
								<li>Figma</li>
							</ul>
						</li>
						<li>
							<span className="text-foreground">
								{dictionary.sections.tech.categories.backend}
							</span>
							<ul className="ml-4 mt-1 space-y-1 text-muted-foreground">
								<li>Java: Spring Boot</li>
								<li>PHP: Symfony</li>
								<li>GraphQL</li>
								<li>REST API</li>
							</ul>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-2">
						{dictionary.sections.tech.categories.databases}
					</h3>
					<ul className="space-y-1 text-sm text-foreground">
						<li>PostgreSQL</li>
						<li>Oracle</li>
						<li>Elasticsearch</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-2">
						{dictionary.sections.tech.categories.devops}
					</h3>
					<ul className="space-y-1 text-sm text-foreground">
						<li>Git</li>
						<li>Gitlab CLI</li>
						<li>Bitbucket</li>
						<li>Jira</li>
						<li>Docker</li>
						<li>Kubernetes</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
