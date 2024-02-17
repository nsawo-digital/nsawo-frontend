import { Transaction } from "./Transaction";
import { Wallet } from "./Wallet";

export interface User{
    id: string;
    username?: string;
    email?: string;
    picture_filepath?: string;

    wallets: Wallet[];
    transactions: Transaction[];
}

export interface AuthenticatedUser extends User {
    access_token: string;
}