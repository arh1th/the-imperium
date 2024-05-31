import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './Pages/IndexPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      50: '#fff8e1',
      100: '#ffecb3',
      200: '#ffe082',
      300: '#ffd54f',
      400: '#ffca28',
      500: '#ffc107',
      600: '#ffb300',
      700: '#ffa000',
      800: '#ff8f00',
      900: '#ff6f00',
      main: '#ffc107',
      A100: '#ffe57f',
      A200: '#ffd740',
      A400: '#ffc400',
      A700: '#ffab00',
      light: '#ffd54f',
      dark: '#ffa000',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      50: '#e1f5fe',
      100: '#b3e5fc',
      200: '#81d4fa',
      300: '#4fc3f7',
      400: '#29b6f6',
      500: '#03a9f4',
      600: '#039be5',
      700: '#0288d1',
      800: '#0277bd',
      900: '#01579b',
      main: '#00b0ff',
      contrastText: 'hsl(210, 14%, 22%)',
      A100: '#80d8ff',
      A200: '#40c4ff',
      A400: '#00b0ff',
      A700: '#0091ea',
      light: '#40c4ff',
      dark: '#0091ea',
    },
    primaryDark: {
      50: 'hsl(210, 14%, 92%)',
      100: 'hsl(210, 14%, 87%)',
      200: 'hsl(210, 14%, 72%)',
      300: 'hsl(210, 14%, 56%)',
      400: 'hsl(210, 14%, 36%)',
      500: 'hsl(210, 14%, 28%)',
      600: 'hsl(210, 14%, 22%)',
      700: 'hsl(210, 14%, 13%)',
      800: 'hsl(210, 14%, 9%)',
      900: 'hsl(210, 14%, 7%)',
      main: 'hsl(210, 14%, 56%)',
    },
    background: {
      default: 'hsl(210, 14%, 7%)',
      paper: 'hsla(210, 14%, 9%, 0.8)',
    },
  },
});

function App() {
  // const lenisRef = React.useRef();

  // React.useEffect(() => {
  //   function update(time) {
  //     lenisRef.current?.lenis?.raf(time * 1000);
  //   }

  //   gsap.ticker.add(update);

  //   return () => {
  //     gsap.ticker.remove(update);
  //   };
  // });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
