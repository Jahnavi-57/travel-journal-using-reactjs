import './App.css'
import Navbar from "./components/Navbar"
import Travel_card from "./components/TravelCard"
import data from "./data"
function App() {
  const cards=data.map(item=>
    {
      return(
        <Travel_card
          key={item.id}
          {...item}
        />
      )
    }
  )
  return (
    <div>
      <Navbar/>
      <div className="cards-list">{cards}</div>
    </div>
  )
}

export default App
