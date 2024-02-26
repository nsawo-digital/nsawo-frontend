import { Wallet } from "@/types/Wallet";

export function convertToCrypto(amount: number, wallet: Wallet): number {
    const cryptStanding = wallet.digitalCurrency.worthInDollars;
    const realValue = amount / cryptStanding;
    return realValue;
}

export function convertFromCrypto(amount: number, wallet: Wallet): number {
    const cryptStanding = wallet.digitalCurrency.worthInDollars;
    const realValue = amount * cryptStanding;
    return realValue;
}
