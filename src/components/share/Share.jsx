import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from "@mui/icons-material"

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            { <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" /> }
            <input placeholder="What's in your mind Safak?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
            <div className="shareOptions">
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                <div className="shareOption">
                    <span className="shareOptionText">Photo or Video</span>
                </div>
            </div>
            <div className="shareOptions">
                <Label htmlColor="blue"  className="shareIcon"/>
                <div className="shareOption">
                    <span className="shareOptionText">Tag</span>
                </div>
            </div>
            <div className="shareOptions">
                <Room htmlColor="green"  className="shareIcon"/>
                <div className="shareOption">
                    <span className="shareOptionText">Location</span>
                </div>
            </div>
            <div className="shareOptions">
                <EmojiEmotions htmlColor="goldenrod"  className="shareIcon"/>
                <div className="shareOption">
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="sidebarButton">Show More</button>

        </div>
      </div>
    </div>
  );
}

export default Share;
