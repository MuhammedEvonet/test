import "./Home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/widget"

 const Home = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="widgets">
        <Widget />
        <Widget />
        <Widget />
        <Widget />
        <Widget />
      </div>
      <div className="charts">
        charts are here
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        listTitles are here
      </div>
    </div>
  </div>
  )
}

export default Home
