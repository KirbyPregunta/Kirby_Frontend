export type Gender = {
    id: number;
    description: string;
}

export type Country = {
    id: number;
    description: string;
}

export type User = {
    id: number;
    score: number;
    name: string;
    username: string;
    birthdate: string;
    email: string;
    profilePhoto: string;
    country: Country;
    gender: Gender;
}

export type Game = {
    id: number;
    createdAt: string;
    score: number;
    user: User;
}