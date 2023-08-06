import { Box as MuiBox, Typography, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import Header from '../../components/Header'

const Team = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: any[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
      cellClassName: 'name-column--cell',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Access Level',
      headerAlign: 'center',
      width: 250,
      renderCell: ({ row: { access } }: {row: { access: string }}) => {
        return (
          <MuiBox
            width='60%'
            m='0 auto'
            p='5px'
            display='flex'
            justifyContent='center'
            borderRadius='4px'
            bgcolor={
              access === 'admin'
                ? colors.redAccent[600]
                : access === 'manager'
                  ? colors.blueAccent[600]
                  : colors.greenAccent[600]
            }
          >
            {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
            {access === 'manager' && <SecurityOutlinedIcon  />}
            {access === 'user' && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>{access}</Typography>
          </MuiBox>
        )
      }
    }
  ]

  return (
    <MuiBox m='20px'>
      <Header title="Team" subtitle='Managing the Team Members'/>
      <MuiBox
        m='40px 0 0 0'
        height='75vh'
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none'
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          }
        }}
      >
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
        />
      </MuiBox>
    </MuiBox>
  )
}

export default Team
