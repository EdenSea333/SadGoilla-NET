import { createTheme, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import Head from "next/head";
import Layout from "../src/components/pages/app/Layout";
import "../src/styles/globals.css";
import { themeOptions } from "../src/utils/theme";

const theme = createTheme(themeOptions);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sad Gorilla</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={{ backgroundColor: "red" }} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
