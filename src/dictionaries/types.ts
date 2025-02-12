type Dictionary = {
    card: {
        name: string;
        profession: string;
        location: string;
        phone: string;
        email: string;
        about: string;
        linkedin: {
            url: string;
            text: string;
        };
    };
    sections: {
        tech: {
            title: string;
            categories: {
                programming: string;
                databases: string;
                devops: string;
            }
        };
        soft: {
            title: string;
            teamwork: {
                name: string;
                description: string;
            };
            communication: {
                name: string;
                description: string;
            };
            quickLearner: {
                name: string;
                description: string;
            };
            foreignLanguages: {
                name: string;
                description: string;
                languages: {
                    czech: {
                        name: string;
                        level: string;
                        description: string;
                    };
                    english: {
                        name: string;
                        level: string;
                        description: string;
                    };
                    german: {
                        name: string;
                        level: string;
                        description: string;
                    };
                };
            };
        };
    };
};

export type { Dictionary };