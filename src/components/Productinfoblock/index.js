import React from 'react'

//images
import Productspecsicon from "../../assets/images/specs-icon.png"

const index = () => {
  return (
    <div className='info-block'>
      <div className='info-heading'>
        <img src={Productspecsicon} alt="info" />
        <h2>詳細・スペック</h2>
      </div>
      <hr />
      <div className='info-box'>
        <div className='single-block'>
          <h4>商品説明</h4>
          <p>シンプルで頑丈な当社オリジナルの天然木すのこベッド「バノン」。公的検査機関で静止耐荷重350kgをクリアした頑丈設計のすのこベッドです! 頑丈さの秘密は厚さ3cmの極太フレームとすのこ床板を支える極太の横桟です。どちらも一般的なベッドのそれより太く設計されました!</p>
        </div>
        <div className='single-block'>
          <h4>サイズ(約)</h4>
          <p>ベッド外寸：幅80×長さ180×高さ31.5cm</p>
          <p>各脚タイプ高さ別床面高：5.5/11.5/25.5/31.5cm</p>
        </div>
        <div className='single-block'>
          <h4>材 質</h4>
          <p>天然木パイン材(ラッカー塗装)、天然木積層合板</p>
        </div>
        <div className='single-block'>
          <h4>耐荷重(約)</h4>
          <p>350kg</p>
        </div>
      </div>
    </div>
  )
}

export default index