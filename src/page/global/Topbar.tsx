import {
  Box as MuiBox,
  IconButton,
  useTheme
} from '@mui/material'
import { useContext } from 'react'
import styled from '@emotion/styled'
import { ColorModeContext, tokens } from '../../theme'

import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import MuiSearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)

  const TopbarWrapper = styled(MuiBox)`
    display: flex;
    justify-content: space-between;
    padding: 15px;
  `
  const SearchWrapper = styled(MuiBox)`
    background-color: ${colors.primary[400]};
    border-radius: 3px;
    display: flex;
  `

  const SearchInput = styled(InputBase)`
    margin-left: 8px;
    flex: 1;
  `
  const SearchIcon = styled(MuiSearchIcon)`
    height: 100%;
    margin-right: 8px;
    padding: 1px;
  `

  const IconsWrapper = styled(MuiBox)`
    display: flex;
  `


  return (
    <TopbarWrapper display='flex' justifyContent='space-between'>
      {/* Search Box */}
      <SearchWrapper display='flex' bgcolor={colors.primary[400]} borderRadius={3}>
        <SearchInput placeholder='Search' />
        <SearchIcon type='button' />
      </SearchWrapper>

      {/* Icons */}
      <IconsWrapper>
        <IconButton onClick={() => colorMode.toggleColorMode()}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </IconsWrapper>
    </TopbarWrapper>
  )
}

export default Topbar
