import React from 'react'

const App = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [instruction, setInstruction] = useState("waiting for connection with wallet");

  return (
    <div>
      { window.ethereum ? 
        (walletConnected ? <h1>Connected</h1> : instruction)
        : "Metamast or other EIP-1102/EIP-1193 complian wallet not found !"
    }
    </div>
  )
}

export default App;