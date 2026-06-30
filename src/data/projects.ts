export type ProjectType = "AI" | "Full Stack" | "Frontend" | "Backend";
export type OriginType = "Personal" | "Learning" | "Assignment" | "Confidential";

export interface ProjectLinks {
    live?: string;
    github?: string;
    youtube?: string;
    article?: string;
}

export interface Project {
    title: string;
    description: string;

    tags: string[];

    projectTypes: ProjectType[];
    origin: OriginType;

    featured: boolean;
    confidential?: boolean;

    links: ProjectLinks;

    gradient: string;
    emoji: string;
}