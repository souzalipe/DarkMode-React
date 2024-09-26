import { useState } from 'react';
import { ThemeProvider } from "styled-components"; // componente que envolve a aplicação e modifica o estilo 
import { GlobalStyles } from './GlobalStyles'; // local aonde pegas os estilos de lightTheme e darkTheme e aplica
import { lightTheme, darkTheme } from './Theme/Theme'; // arquivos que possuem os estilhos centrais que o Globalstyle deve setar 
import Header from './Components/Header';
import styled from 'styled-components';


const ToggleButton = styled.button`
  background: ${({ theme }) => theme.button};
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 5px;
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header/>
        <div className='App'>
          <h1>Hello World Dark</h1>
          <ToggleButton onClick={toggleTheme}>
            Toggle Theme
          </ToggleButton>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
