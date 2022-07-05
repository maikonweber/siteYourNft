import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import yourNFT from '../artifacts/contracts/ERC721Mint.sol/yourNFT.json';

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();


const contractAddress = '0x65362F57F973671516aBD894d2e7455ba297c6a7'
const contracts =  new ethers.Contract(contractAddress, yourNFT.abi, signer);




function NFTimage({ tokenId, getCount } ) {
     const contentId =  ''
     const metadataURI = `${contentId}/${tokenId}.png`
     const imageURI =  `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`

}


const mintToken = async ( ) => {
     const connection = contracts.connect(signer)
     console.log(connection)
     const addr = connection.address;
     const result = await contracts.mint(addr, 1)
     await result.wait();
}


function WalletBalance () {
     const [balance, setBalance ] = useState();
     const [totalMinted, setTotalMinted] = useState(0);

     const getCount = async ( ) => {
       const count = await contracts.count();
       console.log(count)
       setTotalMinted(parseInt(count));
     }


     useEffect(() => {
          console.log(contracts)
     getCount();
     }, [])
   
     const getBalance = async () => {
          const [ account ] = await window.ethereum.request({ method:'eth_requestAccounts'})
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const balance = await provider.getBalance(account)
          setBalance(ethers.utils.formatEther(balance));  
     }

     return (
          <div> 
               <div>
                    <h5>
                         "Your Balance : {balance}"                         
                    </h5>
                    <button onClick={()=> { getBalance()}}> Show My Balance </button>
               </div>
               <div>
                    <div>
                         <h5>
                              ID
                         </h5>
                         <button onClick={() => mintToken()}>
                              mint
                         </button>
                    </div>
               </div>
          </div>
     )

};

export default WalletBalance;