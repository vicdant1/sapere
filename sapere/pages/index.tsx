import { Button, Typography } from "@mui/material";
import Head from "next/head";
import { OverridedButton } from "../components/OverridedButton/OverridedButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sapere | Organizando o seu presente</title>
      </Head>
      <Button variant="contained" size="large" color="primary">
        Hello
      </Button>
      <Button 
        variant="contained"
        size="large"
        sx={{
          p: 2,
          m: 4,
          mt: 7
        }}
        color="secondary">
        Hello
      </Button>

        {/* Accessing intra-colors */}
      <Button variant="contained" sx={{backgroundColor: "myCustomColor.superLight"}}>text data</Button>

      <Button variant="contained" sx={{backgroundColor: "myCustomColor.superDark", border: 5, borderColor: "primary.main"}}>SX Prop</Button>
        
      <OverridedButton variant="contained">Overrided Button</OverridedButton>

      <Typography variant="myVariant">Test</Typography>
      <main></main>
    </>
  );
}
