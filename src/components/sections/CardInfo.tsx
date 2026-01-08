"use client";

import {
	CopyCheck,
	CopyPlus,
	Linkedin,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Dictionary } from "@/dictionaries/types";

type CardInfoProps = {
	dictionary: Dictionary;
};

type CopiedState = {
	phone: boolean;
	email: boolean;
};

export function CardInfo({ dictionary }: CardInfoProps) {
	const [copied, setCopied] = useState<CopiedState>({
		phone: false,
		email: false,
	});

	const handleCopy = async (text: string, type: keyof CopiedState) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopied((prev) => ({ ...prev, [type]: true }));
			setTimeout(() => {
				setCopied((prev) => ({ ...prev, [type]: false }));
			}, 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	return (
		<div className="h-full flex flex-col justify-center">
			{/* Header with avatar and name */}
			<div className="flex items-center gap-4">
				<Avatar className="h-16 w-16 border-2 border-border/50 shadow-sm">
					<AvatarImage
						src="/images/avatar.jpg"
						alt={dictionary.card.name}
						className="object-cover"
					/>
					<AvatarFallback className="text-lg font-serif">MM</AvatarFallback>
				</Avatar>
				<div>
					<h2 className="text-xl font-serif font-semibold tracking-wide">
						{dictionary.card.name}
					</h2>
					<p className="text-sm text-muted-foreground tracking-wide">
						{dictionary.card.profession}
					</p>
				</div>
			</div>

			{/* About text */}
			<p className="mt-4 text-sm text-muted-foreground leading-relaxed">
				{dictionary.card.about}
			</p>

			{/* Contact details - compact grid */}
			<div className="mt-4 grid grid-cols-1 gap-2 text-sm">
				<div className="flex items-center gap-2 text-muted-foreground">
					<MapPin className="h-3.5 w-3.5 flex-shrink-0" />
					<span>{dictionary.card.location}</span>
				</div>

				<div className="flex items-center gap-2">
					<Phone className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
					<span className="text-muted-foreground">{dictionary.card.phone}</span>
					<button
						type="button"
						onClick={() => handleCopy(dictionary.card.phone, "phone")}
						className="p-0.5 hover:bg-muted rounded transition-colors ml-auto"
						aria-label="Copy phone number"
					>
						{copied.phone ? (
							<CopyCheck className="h-3.5 w-3.5 text-green-600" />
						) : (
							<CopyPlus className="h-3.5 w-3.5 text-primary/60 hover:text-primary" />
						)}
					</button>
				</div>

				<div className="flex items-center gap-2">
					<Mail className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
					<span className="text-muted-foreground truncate">{dictionary.card.email}</span>
					<button
						type="button"
						onClick={() => handleCopy(dictionary.card.email, "email")}
						className="p-0.5 hover:bg-muted rounded transition-colors ml-auto"
						aria-label="Copy email"
					>
						{copied.email ? (
							<CopyCheck className="h-3.5 w-3.5 text-green-600" />
						) : (
							<CopyPlus className="h-3.5 w-3.5 text-primary/60 hover:text-primary" />
						)}
					</button>
				</div>

				<a
					href={dictionary.card.linkedin.url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
				>
					<Linkedin className="h-3.5 w-3.5 flex-shrink-0" />
					<span>{dictionary.card.linkedin.text}</span>
				</a>
			</div>
		</div>
	);
}
