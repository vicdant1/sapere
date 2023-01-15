import { Box, Typography } from '@mui/material'
import React from 'react'

interface TaglabelProps {
  displayText: string,
  color: string
}

export const Taglabel = ({displayText, color}:TaglabelProps) => {
  return (
    <Box 
      sx={{backgroundColor: color, color: "#FFF"}}
      borderRadius={3}
      width={40}
      p={0.5}>
        <Typography noWrap variant='body2' align="center">
          {displayText}
        </Typography>
    </Box>
  )
}
