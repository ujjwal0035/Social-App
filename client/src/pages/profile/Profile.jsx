import './profile.css';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                    <img
                        className="profileCoverImg"
                        src={`${PF}myavatar.jpg`}
                        alt=""
                    />
                    <img
                        className="profileUserImg"
                        src={`${PF}person/0.png`}
                        alt=""
                    />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Ujjwal Gupta</h4>
                        <span className="profileInfoDesc">Hello my friends!</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed username="Ujjwal"/>
                    <Rightbar profile/>
                </div>
                </div>
            </div>
        </>
    );
};

export default Profile;