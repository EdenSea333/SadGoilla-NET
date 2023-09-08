import { Alert, Button, Snackbar } from "@mui/material";
// import { useAtom } from "jotai";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import web3 from "web3";
// import { metamaskWalletAddressAtom } from "../../../../../stores/pages/priateSale";
// import { changeNetwork } from "../../../../../utils/changeNetwork";
// import AlertDialog from "../../../../organism/AlertDialog";
import abiJson from "../../../data/contractABI.json";
import { changeNetwork } from "../../../utils/changeNetwork";

interface Props {
  BusdAmount?: string;
  onPurchase?: () => void;
}

const prefferedChainId =
  process.env.NEXT_PUBLIC_METAMASK_CHAIN === "main" ? "1" : "4";

const Actions: FunctionComponent<Props> = ({
  BusdAmount = "0.0999",
  onPurchase,
}) => {
  const router = useRouter();
  const currentNetworkRef = useRef<string>();
  //   const [walletAddress, setWalletAddress] = useState(metamaskWalletAddressAtom);
  const [walletAddress, setWalletAddress] = React.useState("");
  const [currentNetwork, setCurrentNetwork] = useState("");
  const [showDialog, setShowDialog] = useState<
    "CHANGE_CHAIN" | "INSTALL_METAMASK"
  >();
  console.log("currentNetwork: ", currentNetwork);

  const changeChain = (chainId: string) => {
    setCurrentNetwork(parseInt(chainId, 16).toString());
    console.log("currentNetwork: ", chainId);
  };

  useEffect(() => {
    const ethereum = (window as any).ethereum;
    if (ethereum) {
      currentNetworkRef.current = ethereum?.networkVersion;
      changeChain(`0x${Number(ethereum.networkVersion).toString(16)}`);
      ethereum.on("chainChanged", changeChain);
      console.log(
        "Init chain",
        `0x${Number(ethereum.networkVersion).toString(16)}`
      );
    }
  }, []);

  const connectToMetamask = async () => {
    const ethereum = (window as any).ethereum;
    setCurrentNetwork(ethereum.networkVersion);
    if (ethereum && ethereum.isMetaMask) {
      console.log("MetaMask is installed!");
      await changeToMainNetwork();
      getWalletAddress();
    } else {
      setShowDialog("INSTALL_METAMASK");
    }
  };

  const getNetworkId = async () => {
    const Web3 = new web3((window as any).ethereum);
    const currentChainId = await Web3.eth.net.getId()
    return currentChainId
  }

  const changeToMainNetwork = async () => {
    const currentChainId = await getNetworkId();
    const web3obj = new web3((window as any).ethereum);
    if(currentChainId !== 1) {
      try {
        await (web3obj.currentProvider as any).request({
          method: 'wallet_switchEthereumChain',
            params: [{ chainId: web3obj.utils.toHex(1) }],
          });
      } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
          alert('add this chain id')
        }
      }
    }
  };

  const getWalletAddress = async () => {
    const ethereum = (window as any).ethereum;
    if (ethereum && ethereum.isMetaMask && ethereum.isConnected) {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    }
  };

  const BuyNft = async () => {
    // const web3Obj = new web3(
    //   "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    // );

    const web3Obj = new web3((window as any).ethereum);
    const contract = new web3Obj.eth.Contract(
      abiJson.abi as any,
      "0x73B1e4D6D331Ad6dB75d9A5D5a0cd4d8Df37715a"
    );
    console.log(contract, walletAddress);
    const ethValue = web3Obj.utils.toWei("0.0999","ether");
    await contract.methods.mint().send({from: walletAddress, value: ethValue});
    // const a = await contract.methods.balanceOf("0x5aDBE839ED0685cDA80F757F1A9AaA7Ad42b600a").call();
    // console.log("result", a);
    console.log("Successfully Minted"); 
  };

  if (!walletAddress || currentNetwork !== prefferedChainId) {
    return (
      <>
        <Button
          variant="contained"
          color="warning"
          sx={{ marginLeft: "8px" }}
          onClick={connectToMetamask}
        >
          Connect
        </Button>
      </>
    );
  }

  return (
    <>
      <Button
        variant="contained"
        color="error"
        sx={{ marginLeft: "8px" }}
        onClick={BuyNft}
      >
        Purchase
      </Button>
    </>
  );
};

export default Actions;
