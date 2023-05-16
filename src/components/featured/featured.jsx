import "./featured.scss"
import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from "@mui/icons-material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"


const featured = () => {
  return (
    <div className='featured'>
      
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert font-size="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={3}/>
        </div>
        <p className="title">Total Sales  Made Today</p>
        <p className="title">$ 420</p>
        <p className="desc">Some description here like this: Loem ipsum dolor sit amet</p>
        {/*  */}
        <div className="summary">
          <div className="item">
            <div className="itemTitle"> Target </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small"/>
              <div className="resultAmont"> $25k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Income </div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small"/>
              <div className="resultAmont"> $24.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle"> Last Month </div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small"/>
              <div className="resultAmont"> $26.4k</div>
            </div>
          </div>
          </div>
      </div>

    </div>
  )
}

export default featured