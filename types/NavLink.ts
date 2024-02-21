export interface NavLink {
    pathName: string;
    name: string;
    sublinks?: NavLink[];
}

export const apiUrl = process.env.APP_API_URL;
export const secretKey = process.env.SECRET_KEY;