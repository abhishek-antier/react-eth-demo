import React from 'react';
import { useState, useEffect } from "react";
import Web3 from 'web3';
import AppAuthenticated from './components/AppAuthenticated';

const App = () => {

  const [walletConnected, setWalletConnected] = useState(false);
  const [instruction, setInstruction] = useState("waiting for connection with wallet");

  useEffect(() => {
    const connectWallet = async() => {
      if(!window.ethereum)
       return;
  
       try {
        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
       } catch (error) {
        setInstruction("Wallet connection denied, reload the page to try again!! ");
        return;
       }
       setInstruction("");
       setWalletConnected(true);
    }
    connectWallet();
  }, []);

  return (
    <div>
      { window.ethereum ? 
        (walletConnected ? 
        <AppAuthenticated />
         : instruction
         ) : "Metamast or other EIP-1102/EIP-1193 complian wallet not found !"
    }
    </div>
  )
}

export default App;