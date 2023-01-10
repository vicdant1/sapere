import { Button, Typography } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sapere | Organizando o seu presente</title>
      </Head>
      <Button variant='contained' size="large" color="primary">Hello</Button>
      <Button variant='contained' size="large" color="secondary">Hello</Button>

      <Typography variant='myVariant'>
        Test
      </Typography>
      <main>
      </main>
    </>
  )
}
