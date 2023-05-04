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
		const packageObjectId = "0xb7fe00dac09a53cdaa0edfd4000e726bd4afc58834048104750515f57e0675e9";
		tx.moveCall({
			target: `${packageObjectId}::capy_item::sell`,
			arguments: [tx.pure("")],
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


			<div className='container-mint-1'>

			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className='container-mint'>

				{/* инфа о кошеле */}
				{/* <button onClick={handleClick}>Вывести в консоль инфу о подключенном кошеле</button> */}



				<button className='mint-btn' onClick={handleSignAndExecuteTxBlock}>Mint</button>




			</div>
		</>
	);
}

export default Mint;
