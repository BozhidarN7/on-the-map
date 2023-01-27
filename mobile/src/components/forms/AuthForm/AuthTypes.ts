interface AuthData {
    email: string;
    password: string;
}

export interface LoginData extends AuthData {}

export interface RegisterData extends AuthData {
    firstName: string;
    lastName: string;
    repeatPassword: string;
}
