import {Keypair} from "@solana/web3.js";


// Genrate new keypair


const keypiar = Keypair.generate();

console.log(`You've generated a new Solana wallet:
${keypiar.publicKey.toBase58()}`);

