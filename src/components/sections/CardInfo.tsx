import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Dictionary } from "@/dictionaries/types";

type CardInfoProps = {
    dictionary: Dictionary;
};

export function CardInfo({ dictionary }: CardInfoProps) {
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
                </div>
                
                <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{dictionary.card.email}</span>
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