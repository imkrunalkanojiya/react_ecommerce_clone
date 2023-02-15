import React from "react";
import ReactPlayer from "react-player";

//images
import Info1 from "../../assets/images/info1.jpg";
import Info2 from "../../assets/images/info2.jpg";
import Info3 from "../../assets/images/info3.jpg";
import Info4 from "../../assets/images/info4.jpg";
import Info5 from "../../assets/images/info5.jpeg";
import Info6 from "../../assets/images/info6.jpeg";
import Info7 from "../../assets/images/info7.jpeg";
import Info8 from "../../assets/images/info8.jpeg";

const index = () => {
  return (
    <div className="extra-info">
      <div className="video-player">
        <ReactPlayer url="https://youtu.be/ts2LdBBu5UA" width="100%" />
      </div>
      <div className="info-row">
        <div className="col-left">
          <img src={Info1} alt="info" />
        </div>
        <div className="col-right">
          <h3>シンプルで頑丈なすのこベッド ショートセミシングルサイズ</h3>
          <p>
            すのこベッドバノンは天然木無垢材をふんだんに使用し、シンプルながらもナチュラルな優しさと耐荷重350kgの頑丈さを併せ持つ、ありそうで他には無いプレミアムなヘッドレスすのこベッドです。
            ※本ページはフレームのみの販売ページです。
          </p>
        </div>
      </div>
      <div className="info-row-image">
        <div className="images">
          <img src={Info2} alt="info" />
          <img src={Info3} alt="info" />
          <img src={Info4} alt="info" />
        </div>
        <div className="headings">
          <h4>ヘッドレスベッドだからこそ広がるお部屋のアイディア!</h4>
          <p>
            分厚いヘッドが無い分省スペースで、コンパクトだからお部屋の模様替え時にも通常のベッドに比べると移動がラクです!
          </p>
        </div>
      </div>
      <div className="info-row-images">
        <div className="content-images">
          <img src={Info5} alt="info" />
          <img src={Info6} alt="info" />
        </div>
        <div className="heading">
          <h4>他のベッドより太い横桟で耐荷重350kgの頑丈さを実現!</h4>
        </div>
      </div>
      <div className="info-row-images">
        <div className="content-images">
          <img src={Info7} alt="info" />
          <img src={Info8} alt="info" />
        </div>
        <div className="heading">
          <h4>シンプルデザインの木製すのこベッド</h4>
          <p>バノンはヘッドが無いだけで無く、余計な装飾が一切付いていないすっきりとしたフォルムの木製ベッドです。また、すのこベッドならではの優れた通気性でオールシーズン快適な睡眠が期待できます。</p>
        </div>
      </div>
    </div>
  );
};

export default index;
