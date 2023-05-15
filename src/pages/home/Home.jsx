import "./Home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/widget"
import Feaatured from "../../components/featured/featured"
import Chart from "../../components/chart/chart"
import Table from "../../components/table/table"

 const Home = () => {
  return (
    <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <Navbar />
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>
      <div className="charts">
          <Feaatured/>
          <Chart/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transactions</div>
        <Table/>
      </div>
    </div>
  </div>
  )
}

export default Home
