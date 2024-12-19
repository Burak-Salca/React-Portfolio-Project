
import { Route, Switch, Link } from 'react-router-dom';
import MainPage from "./pages/MainPage";

function App() {
  return (
   <div className="bg-[#FFFFFF] text-black dark:bg-[#252128] dark:text-[#FFFFFF]">
      <Switch>
        <Route exact path= "/">
          <MainPage/>
        </Route>
      </Switch>
   </div>
  )
}

export default App
