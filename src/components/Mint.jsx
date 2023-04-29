import React from 'react';
import { useWallet } from '@suiet/wallet-kit'
import { TransactionBlock } from "@mysten/sui.js";
import '../styles/mint.css'



const Mint = () => {
	const wallet = useWallet();


	function handleClick(e) {
		e.preventDefault();
		console.log('wallet status', wallet.status)
		console.log('connected wallet name', wallet.name)
		console.log('connected account info', wallet.account)

	}




	// вообщем здесь происходит открытие окна и подписание и тд разбирайся

	async function handleSignAndExecuteTxBlock() {

		// define a programmable transaction


		const tx = new TransactionBlock();
		const packageObjectId = "0xXXX";
		tx.moveCall({
			target: `${packageObjectId}::nft::mint`,
			arguments: [tx.pure("Example NFT")],
		});

		try {
			// execute the programmable transaction
			const resData = await wallet.signAndExecuteTransactionBlock({
				transactionBlock: tx
			});
			console.log('nft minted successfully!', resData);
			alert('Congrats! your nft is minted!')
		} catch (e) {
			console.error('nft mint failed', e);
		}
	}






	return (
		<>
			<div className='container'>
				<h1>Mint Your хуесос here</h1>

				{/* инфа о кошеле */}
				{/* <button onClick={handleClick}>Вывести в консоль инфу о подключенном кошеле</button> */}



				<button className='mint-btn' onClick={handleSignAndExecuteTxBlock}>Mint</button>




			</div>
		</>
	);
}

export default Mint;
