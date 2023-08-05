import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from 'react-router-dom'

import Dashboard from "./page/dashboard"
import Sidebar from "./page/global/Sidebar"
import Topbar from "./page/global/Topbar"
// import Team from "./page/team"
// import Invoice from "./page/invoices"
// import Contacts from "./page/contacts"
// import Bar from "./page/bar"
// import Form from "./page/form"
// import Line from "./page/line"
// import Pie from "./page/pie"
// import FAQ from "./page/faq"

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
              {/* <Route path='/team' element={<Team />} /> */}
              {/* <Route path='/invoice' element={<Invoice />} /> */}
              {/* <Route path='/contacts' element={<Contacts />} /> */}
              {/* <Route path='/bar' element={<Bar />} /> */}
              {/* <Route path='/form' element={<Form />} /> */}
              {/* <Route path='/line' element={<Line />} /> */}
              {/* <Route path='/pie' element={<Pie />} /> */}
              {/* <Route path='/faq' element={<FAQ />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
