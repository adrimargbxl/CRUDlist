export interface ProjectType {
  id: string;
  name: string;
  enterprise: string;
  collaborators: {
    name: string;
    email: string;
    image?: string;
  }[];
}

export interface CollaboratorType {
  name: string;
  email: string;
  image?: string;
}
