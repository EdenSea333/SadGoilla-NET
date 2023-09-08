import { Box, Grow, Skeleton, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import React, { FunctionComponent, useEffect, useState } from "react";
import ReactSign from "react-sign";
import web3 from "web3";
import abiJson from "../src/data/contractABI.json";
import Actions from "../src/components/pages/mint/Actions";
interface Props {
  children: React.ReactNode;
}

const Mint: FunctionComponent<Props> = ({ children }) => {
  const [isIn, setIsIn] = useState(false);
  const [mintValue, setMinValue] = useState(undefined);

  const getMintValue = async () => {
    const web3Obj = new web3(
      "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
    );
    const contract = new web3Obj.eth.Contract(
      abiJson.abi as any,
      "0x73B1e4D6D331Ad6dB75d9A5D5a0cd4d8Df37715a"
    );
    const total_supply = await contract.methods.totalSupply().call();
    setMinValue(900-total_supply);
  };

  useEffect(() => {
    getMintValue();
  }, []);

  return (
    <Box
      width="100%"
      minHeight="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        position="relative"
        alignItems={"center"}
        width="100%"
        minHeight="100vh"
      >
        <Toolbar />
        <Box
          marginBottom="2rem"
          borderRadius="20px"
          boxShadow="#e2e7eb91 0px 0px 10px"
          overflow="hidden"
          width="300px"
          height="300px"
          position="relative"
        >
          <Image
            src="/images/Untitled-1.gif"
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </Box>
        <ReactSign id="react-sign-big-banner" onEnter={() => setIsIn(true)} />
        <Grow in={isIn} timeout={isIn ? 1000 : undefined}>
          <Stack flex={1} alignItems="center" justifyContent="center">
            <Typography variant="h5" marginBottom="1rem">
              A GANG OF Sad Gorilla NFTs collection
            </Typography>
            <Actions BusdAmount="0.0999" onPurchase={() => getMintValue()} />
            <Typography
              sx={{ display: "flex", flexDirection: "row" }}
              variant="h6"
              marginBottom="1rem"
              marginTop="1rem"
            >
              REMAINING:{" "}
              <Box component="span" marginLeft="5px">
                {mintValue ?? <Skeleton width="50px" variant="text" />}
              </Box>
            </Typography>
          </Stack>
        </Grow>
        <Box position="relative" minHeight="300px" width="100%">
          <Image
            src="/images/gorilla_bord_.png"
            alt=""
            objectFit="cover"
            layout="fill"
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Mint;
