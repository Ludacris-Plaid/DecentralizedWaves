const { header } = require("express/lib/request");

const main = async() => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying smart ethereum contracts with account: ", deployer.address);
    console.log("Ethereum  wallet balance: ETH", accountBalance.toString());

    const Token =await hre.ethers.getContractFactory("WavePortal");
    const portal = await Token.deploy();
    await portal.deployed();

    console.log("LinkPortal address: ", portal.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0); 
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();
