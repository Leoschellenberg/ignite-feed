import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyles } from "@/styles";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import * as S from "./styles/styles";
import Post from "./components/Post";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
        <Header />
        <S.Wrapper>
          <Sidebar />
          <main>
            <Post />
          </main>
        </S.Wrapper>
       
    </ThemeProvider>
  );
}

export default App;
