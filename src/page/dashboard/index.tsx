import { Box as MuiBox } from '@mui/material'
import Header from "../../components/Header"

const Dashboard = () => {
  return <MuiBox m='20px'>
    <MuiBox display='flex' justifyContent='space-between' alignItems='center'>
      <Header title="Dashboard" subtitle="Welcome to the Dashboard" />
    </MuiBox>
  </MuiBox>
}

export default Dashboard
