import style from "./HomePage.module.css";
import SideBar from "../../Components/sidebar/SideBar";
import SearchBar from "../../Components/SearchBar";
import WhatsNew from "../../Components/WhatsNew";
import Tweets from "../../Components/Tweets";
import FollowList from "../../Components/FollowList";

export default function HomePage() {
  return (
    <>
      <div className={style.MainContainer}>
        <div className={style.LsideBar}>
          <SideBar />
        </div>
        <div className={style.MidDiv}>
          <h1>HomePage</h1>
          <Tweets />
        </div>
        <div className={style.RsideBar}>
          <SearchBar />
          <WhatsNew />
          <FollowList />
        </div>
      </div>
    </>
  );
}
