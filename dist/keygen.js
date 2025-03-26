"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_js_1 = require("@solana/web3.js");
// Genrate new keypair
const keypiar = web3_js_1.Keypair.generate();
console.log(`You've generated a new Solana wallet:
${keypiar.publicKey.toBase58()}`);
