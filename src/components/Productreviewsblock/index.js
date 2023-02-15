import React from 'react'

//images
import Reviewicon from "../../assets/images/comments-icon.png"

//Components
import Productcommentblock from "../Productcommentbox/index" 

const index = () => {
  return (
    <div className='review-block'>
        <div className='review-heading'>
            <img src={Reviewicon} alt="icon" />
            <h2>お客様の声</h2>
        </div>
        <hr />
        <div className='review-box'>
            <Productcommentblock name="A様" date="2022年03月12日" rating="5" desc="女性1人でも組み立てがとても簡単だったので大変助かりました。ご家族やご友人に手伝って貰えたら5分ぐらいで組み立て終わると思います！寝返りをうっても、ベッドの上に立っても、軋む事がないので安心して眠れます。"/>
        </div>
        <div className='review-box'>
            <Productcommentblock name="jgmatsu様" date="2022年03月11日" rating="5" desc="フレームの組み立てには心配しましたが全く簡単でした。 工具もいらないし一部のユーザーの評価にあった不良な個所も無く短時間でできました。"/>
        </div>
        <div className='review-box'>
            <Productcommentblock name="マッキー様" date="2022年03月10日" rating="5" desc="しっかりとした作りで、組み立ても簡単でした。シンプルですが私はそれがかえって良かったです。値段も手頃で大満足しています！"/>
        </div>
        <div className='review-box'>
            <Productcommentblock name="古賀様" date="2022年03月10日" rating="5" desc="インターネットでフレームを購入するのは初めてだったのでかなり心配だったが、いざ届いて組み立ててみると本当に丈夫で驚いた。ただすのこの列が一つだけずれていてそこだけが気になった。総じて価格の割にはクオリティは高いように感じられ、フレームはある程度価格を抑えたいと思う人には一考の余地がある商品だと思う。"/>
        </div>
    </div>
  )
}

export default index