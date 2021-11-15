import "./App.css";
import axios from "axios";
export * from "react-router";
// import {Switch} from "react-router"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter,Route, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
function App(){
  return (
  <BrowserRouter>
   <div className="app" style={{backgroundImage:"url(./ques1.png"}}>
    <Header/>
    <Switch>
<Route path='/' exact>
    <Home />
    </Route>
    
    <Route path='/quiz' >
    <Quiz />
    </Route>
    <Route path='/result' >
      <Result/>
    </Route>
    </Switch>
  </div>
  <Footer />
  </BrowserRouter>
  );
}
export default App;
