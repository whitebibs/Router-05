import {Routes, Route} from "react-router-dom"
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import {GithubUser} from "./GithubUser"
import {PageNotFound} from "./NotFound"

export function App() {
  return (
<Routes>
  <Route path="/" element={<Welcome name="Bianca"/>}/>
  <Route path="/counter" element={<Counter/>}/>
  <Route path= "users" element={<GithubUser/>}/>
  <Route path = "*" element= {<PageNotFound/>} />
</Routes>
  
  )
}

//<Route path = "*" element={<Navigate to="/counter"/>}/>
