import {HashConnect} from "hashconnect";

let hashconnect=new HashConnect();

let appMetadata={
    name:'dApp Example',
    description:'Example of hedera wallet',
    icon:'https://absolute.url/to/icon.png%27'
}

export const pairHashpack=async()=>{
    let initData=await hashconnect.init(appMetadata,"testnet",false);
    console.warn(initData);

    hashconnect.foundExtensionEvent.once((walletMetadata)=>{
        console.log(walletMetadata);
        hashconnect.connectToLocalWallet(initData.pairingString,walletMetadata)
    })

    hashconnect.pairingEvent.once((pairingData)=>{
        console.log('wallet paired !');
        console.log(pairingData);
    })
    return initData;
}