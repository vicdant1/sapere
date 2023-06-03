import { useTheme } from '@emotion/react';
import { Box, Grid, Theme, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  const theme = useTheme() as Theme;
  return (
    <>
      <Box sx={{
        width: "100vw",
        backgroundColor: theme.palette.primary.light,
        minHeight: "150px",
        mt: 4,
        p: 2,
        color: theme.palette.primary.contrastText
      }}>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Typography variant="overline">
              Produtos
            </Typography>

            <ul>
              <li>Geração de documentos</li>
              <li>Gerência de aluguel</li>
              <li>Notificações automáticas</li>
              <li>Cálculo de impostos</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="overline">
              Produtos
            </Typography>

            <ul>
              <li>Geração de documentos</li>
              <li>Gerência de aluguel</li>
              <li>Notificações automáticas</li>
              <li>Cálculo de impostos</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="overline">
              Produtos
            </Typography>

            <ul>
              <li>Geração de documentos</li>
              <li>Gerência de aluguel</li>
              <li>Notificações automáticas</li>
              <li>Cálculo de impostos</li>
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="overline">
              Produtos
            </Typography>

            <ul>
              <li>Geração de documentos</li>
              <li>Gerência de aluguel</li>
              <li>Notificações automáticas</li>
              <li>Cálculo de impostos</li>
            </ul>
          </Grid>
        </Grid>
        
      </Box>

      <Box sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.light,
          p: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
      }}>
        <Image src="/logo_trovato_simplified.png" alt="logo trovato" width={50} height={56}/>
      </Box>
    </>
  )
}
