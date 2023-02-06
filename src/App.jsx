import { Bar } from './components/Bar/Bar';
import { News } from './components/News/News';
import { Header } from './components/Header/Header';
import { Travel } from './components/Travel/Travel';
import { Grid } from './components/Grid/Grid';
import { Depoimento } from './components/Depoimento/Depoimento';
import { WithUs } from './components/WithUs/WithUs';
import { About } from './components/About/About';
import { Cadastro } from './components/Cadastro/Cadastro';




function App() {
  return (
    <div className="App">
        <Bar/>
        <Header/>
        <News/>
        <Travel/>
        <Grid/>
        <Depoimento/>
        <WithUs/>
        <About/>
        <Cadastro/>
    </div>
  );
}

export default App;
