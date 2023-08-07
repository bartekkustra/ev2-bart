import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom'

import Dashboard from "./page/dashboard"
import Sidebar from "./page/global/Sidebar"
import Topbar from "./page/global/Topbar"

import Tests from './page/tests'
import Team from "./page/team"
import Contacts from "./page/contacts"
import Form from './page/form'
import FAQ from "./page/faq"
import LineChart from "./page/linechart"
// import Bar from "./page/bar"
// import Pie from "./page/pie"

function App() {
  const { theme, colorMode } = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/tests' element={<Tests />} />
              <Route path='/team' element={<Team />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/form' element={<Form />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/line' element={<LineChart />} />
              {/* <Route path='/bar' element={<Bar />} /> */}
              {/* <Route path='/pie' element={<Pie />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
