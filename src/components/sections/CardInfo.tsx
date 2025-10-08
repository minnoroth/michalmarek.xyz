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
		<div>
			<div className="flex items-center space-x-4">
				<Avatar className="h-20 w-20">
					<AvatarImage
						src="/images/avatar.jpg"
						alt={dictionary.card.name}
						className="object-cover"
					/>
					<AvatarFallback>MM</AvatarFallback>
				</Avatar>
				<div>
					<h2 className="text-2xl font-bold">{dictionary.card.name}</h2>
					<p className="text-muted-foreground">{dictionary.card.profession}</p>
				</div>
			</div>

			<div className="mt-6 space-y-4">
				<p className="text-sm text-muted-foreground">{dictionary.card.about}</p>

				<div className="flex items-center space-x-2">
					<MapPin className="h-4 w-4" />
					<span className="text-sm">{dictionary.card.location}</span>
				</div>

				<div className="flex items-center space-x-2">
					<Phone className="h-4 w-4" />
					<span className="text-sm">{dictionary.card.phone}</span>
					<button
						type="button"
						onClick={() => handleCopy(dictionary.card.phone, "phone")}
						className="p-1 hover:bg-accent rounded transition-colors"
						aria-label="Copy phone number"
					>
						{copied.phone ? (
							<CopyCheck className="h-4 w-4 text-green-600" />
						) : (
							<CopyPlus className="h-4 w-4 text-blue-500" />
						)}
					</button>
				</div>

				<div className="flex items-center space-x-2">
					<Mail className="h-4 w-4" />
					<span className="text-sm">{dictionary.card.email}</span>
					<button
						type="button"
						onClick={() => handleCopy(dictionary.card.email, "email")}
						className="p-1 hover:bg-accent rounded transition-colors"
						aria-label="Copy email"
					>
						{copied.email ? (
							<CopyCheck className="h-4 w-4 text-green-600" />
						) : (
							<CopyPlus className="h-4 w-4 text-blue-500" />
						)}
					</button>
				</div>

				<a
					href={dictionary.card.linkedin.url}
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center space-x-2 text-sm hover:text-primary transition-colors"
				>
					<Linkedin className="h-4 w-4" />
					<span className="text-sm">{dictionary.card.linkedin.text}</span>
				</a>
			</div>
		</div>
	);
}
