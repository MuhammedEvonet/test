import './widget.scss';
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Person2Outlined } from '@mui/icons-material';

 const widget = () => {
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">Users</span>
            <span className="counter">21312</span>
            <span className="link">See All Users</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                20%
            </div>
            <PersonOutlinedIcon className="icon"/>
        </div>
    </div>
  )
}
export default widget;