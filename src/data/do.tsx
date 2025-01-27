export interface Link { 
    name: string;
    url: string;
}

export interface PortfolioItem { 
    title: string;
    date: string;
    brief: string;
    responsibilities: string[];
}

export interface PageTitle { 
    title: string;
    subtitle: string;
}

export interface Skill { 
    name: string;
    icon: React.ReactElement;
}