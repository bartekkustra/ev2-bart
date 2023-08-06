import { Box as MuiBox, useTheme } from '@mui/material'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { mockWithStatus } from '../../data/mockData'
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';

import Header from '../../components/Header'

const Tests = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const columns: any[] = [
    { field: 'filename', headerName: 'Filename', flex: 1, hideable: false },
    { field: 'avgDuration', headerName: 'Average Duration', width: 150, renderCell: ({ row }: { row: any }) => {
      const DurationThresholdIcon = ({duration}: {duration: number}) => {
        if (row.avgDuration > 180 * 1000) {
          return <ErrorIcon color='error' />
        }
        if (row.avgDuration > 120 * 1000) {
          return <WarningIcon color='warning' />
        }
        return null
      }
      return (
        <MuiBox display='flex' alignItems='center' gap='5px'>
          <DurationThresholdIcon duration={row.avgDuration} /> {(row.avgDuration / 1000).toFixed(2)}s
        </MuiBox>
      )
    }},
    { field: 'relScore', headerName: 'Reliability', width: 150, renderCell: ({ row }: { row: any }) => {
      const ReliabilityThresholdIcon = ({reliability}: {reliability: number}) => {
        if (row.relScore <= 0.95) {
          return <ErrorIcon color='error' />
        }
        if (row.relScore <= 0.98) {
          return <WarningIcon color='warning' />
        }
        return null
      }
      return (
        <MuiBox display='flex' alignItems='center' gap='5px'>
          <ReliabilityThresholdIcon reliability={row.relScore} /> {(row.relScore * 100).toFixed(0)}%
        </MuiBox>
      )
    }},
    { field: 'hidden', headerName: 'Hidden', width: 150},
  ]

  return (
    <MuiBox m='20px'>
      <Header title="Contacts" subtitle='The list of Contacts for future reference'/>
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
          },
          '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
            color: `${colors.grey[100]} !important`
          },
          '& .Mui-checked': {
            color: `${theme.palette.text.primary} !important`,
          },
          '& .eagleview-data-grid-row-hidden': {
            bgcolor: `${colors.grey[700]}`,
            color: `${colors.grey[300]} !important`,
          }
        }}
      >
        <DataGrid
          checkboxSelection
          // onRowSelectionModelChange={
          //   (ids) => {
          //     console.log(ids)
          //   }
          // }
          // loading={loading}
          rows={mockWithStatus}
          getRowClassName={({row: { hidden }}) => {
            if (hidden) return 'eagleview-data-grid-row-hidden'
            return ''
          }}
          getRowId={(row) => row._id}
          columns={columns}
          initialState={{
            columns: {
              columnVisibilityModel: {
                hidden: false,
              }
            },
            filter: {
              filterModel: {
                items: [
                  { field: 'hidden', operator: 'equals', value: 'false' }
                ]
              }
            },
            sorting: {
              sortModel: [{ field: 'relScore', sort: 'asc' }]
            },
          }}
          slots={{ toolbar: GridToolbar }}
        />
      </MuiBox>
    </MuiBox>
  )
}

export default Tests
