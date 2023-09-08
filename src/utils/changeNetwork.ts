import { BinanceNetworks } from "./binanceNetworks";

export const changeNetwork = async (
  networkName: "ethMain" | "test" | "main",
  onError: (e: string) => void
) => {
  try {
    const ethereum = (window as any).ethereum;
    if (!ethereum) {
      throw new Error("No ethereum found");
    }
    if (ethereum) {
      const res = await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...BinanceNetworks[networkName],
          },
        ],
      });
      return res;
    }
  } catch (e: any) {
    console.error("Change network error: ", e);
    onError(e.message);
  }
};

export const checkIsInMainNetwork = () => {
  if ((window as any)?.ethereum?.networkVersion === "1") {
    return true;
  }
  return false;
};
