import React from 'react';
import { useWallet } from '@suiet/wallet-kit'
import { TransactionBlock } from "@mysten/sui.js";





const Mint = () => {
	const wallet = useWallet();


	function handleClick(e) {
		e.preventDefault();
		console.log('wallet status', wallet.status)
		console.log('connected wallet name', wallet.name)
		console.log('connected account info', wallet.account)

	}




	// не ворк

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
				<button onClick={handleClick}>Вывести в консоль инфу о подключенном кошеле</button>
				<button onClick={handleSignAndExecuteTxBlock}>Минт</button>


				{/* не ворк */}
				{/* <button onClick={handleSignAndExecuteTxBlock}>кнопка минта хз ворк не</button> */}

			</div>
		</>
	);
}

export default Mint;
