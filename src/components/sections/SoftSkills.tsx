import type { Dictionary } from "@/dictionaries/types";

type SoftSkillsProps = {
	dictionary: Dictionary;
};

export function SoftSkills({ dictionary }: SoftSkillsProps) {
	const skills = [
		dictionary.sections.soft.teamwork.name,
		dictionary.sections.soft.communication.name,
		dictionary.sections.soft.quickLearner.name,
		dictionary.sections.soft.attentionToDetail.name,
	];

	const languages = Object.values(
		dictionary.sections.soft.foreignLanguages.languages
	);

	return (
		<div className="h-full flex flex-col justify-center">
			<h2 className="text-lg font-serif font-semibold tracking-wide mb-3">
				{dictionary.sections.soft.title}
			</h2>

			<div className="grid grid-cols-2 gap-x-6 gap-y-3">
				{/* Soft Skills */}
				<div>
					<h3 className="font-medium text-foreground mb-2 text-xs">
						{dictionary.sections.soft.personalTraits}
					</h3>
					<ul className="space-y-1.5">
						{skills.map((skill) => (
							<li
								key={skill}
								className="text-xs text-muted-foreground flex items-center gap-2"
							>
								<span className="w-1 h-1 rounded-full bg-primary/40" />
								{skill}
							</li>
						))}
					</ul>
				</div>

				{/* Languages */}
				<div>
					<h3 className="font-medium text-foreground mb-2 text-xs">
						{dictionary.sections.soft.foreignLanguages.name}
					</h3>
					<div className="space-y-1.5">
						{languages.map((lang) => (
							<div
								key={lang.name}
								className="flex items-center justify-between text-xs"
							>
								<span className="text-muted-foreground">{lang.name}</span>
								<span className="font-mono text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded">
									{lang.level}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
