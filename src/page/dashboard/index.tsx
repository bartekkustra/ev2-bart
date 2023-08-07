import { Box as MuiBox, Button, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from "../../components/Header"
import StatBox from '../../components/StatBox'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'

// import linechart too for stats

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return <MuiBox m='20px'>
    <MuiBox display='flex' justifyContent='space-between' alignItems='center'>
      <Header title="Dashboard" subtitle="Welcome to the Dashboard" />
    </MuiBox>
    <MuiBox mb='20px'>
      <Button sx={{
        backgroundColor: colors.blueAccent[700],
        color: colors.grey[100],
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '10px 20px',
      }}>
        <DownloadOutlinedIcon sx={{ marginRight: '10px' }} />
        Download Reports
      </Button>
    </MuiBox>
    <MuiBox display='grid' gridTemplateColumns='repeat(12, minmax(0, 1fr))' gap='30px'>
      {/* Row #1 */}
      <MuiBox
        gridColumn="span 3"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>
      <MuiBox
        gridColumn="span 3"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>
      <MuiBox
        gridColumn="span 3"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>
      <MuiBox
        gridColumn="span 3"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>

      {/* Row #2 */}
      <MuiBox
        gridColumn="span 8"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>
      <MuiBox
        gridColumn="span 4"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>

      {/* Row #3 */}
      <MuiBox
        gridColumn="span 4"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>
      <MuiBox
        gridColumn="span 4"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>
      <MuiBox
        gridColumn="span 4"
        bgcolor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox title='Total Transactions' subtitle='Last 24 hours' icon={<PointOfSaleIcon sx={{ fontSize: '50px' }} />} progress={0.5} increase={20} />
      </MuiBox>
    </MuiBox>
  </MuiBox>
}

export default Dashboard
