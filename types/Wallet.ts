import { User } from "./User";

export interface Wallet {
    id: string;
    user_id: string;
    name: string;
    digital_currency_id: string;

    digitalCurrency: DigitalCurrency;
    user: User
}

export interface DigitalCurrency{
    id: string;
    abbreviation: string;
    name: string;
    worth_in_dollars: number;
    logo: string;

    wallets: Wallet[];
}

export function createWallet(UserId: string){
    return UserId;
}

export function deposit(wallet_id: string, amount: number){

}

export function withdraw(wallet_id: string, amount: number){

}