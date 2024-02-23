export default function Page({params}: {params: {walletId: string}}){
    return(
        <div>page {params.walletId}</div>
    );
}