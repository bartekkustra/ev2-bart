import { Box as MuiBox, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import ProgressCircle from '../ProgressCircle'
import React from 'react'

const StatBox = ({ title, subtitle, icon, progress, increase }: {
  title: string,
  subtitle: string,
  icon: React.ReactNode,
  progress: number,
  increase: number,
}) => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  
  return (
    <MuiBox width="100%" m="0 30px" p='15px 0'>
      <MuiBox display="flex" justifyContent="space-between">
        <MuiBox sx={{
          '& svg': {
            width: '40px',
          },
        }}>
          {icon}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </MuiBox>
        <MuiBox>
          <ProgressCircle progress={progress} />
        </MuiBox>
      </MuiBox>
      <MuiBox display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </MuiBox>
    </MuiBox>
  );
}

export default StatBox
