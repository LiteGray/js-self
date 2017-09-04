import React, {Component} from 'react';
import '../css/goods.css';

// const dataGoods = [
//   {goodsId: 1010101, name: 'SFJ-3335', price: '200', pic: 'img/SFJ-3335.jpg', pic_min: '../img/SFJ-3335-min.jpg'},
//   {goodsId: 1010201, name: 'SFJ-4200', price: '114', pic: 'img/SFJ-4200.jpg', pic_min: 'img/SFJ-4200-min.jpg'},
//   {goodsId: 1010301, name: 'SFJ-3275', price: '129', pic: 'img/SFJ-3275.jpg', pic_min: 'img/SFJ-3275-min.jpg'},
//   {goodsId: 1010401, name: 'SFJ-62779', price: '128', pic: 'img/SFJ-62779.jpg', pic_min: 'img/SFJ-62779-min.jpg'},
//   {goodsId: 1010501, name: 'SFJ-HD078小绣花', price: '134', pic: 'img/SFJ-HD078xiuhua.jpg', pic_min: 'img/SFJ-HD078xiuhua-min.jpg'},
//   {goodsId: 1010601, name: 'SFJ-4187', price: '61', pic: 'img/SFJ-4187.jpg', pic_min: 'img/SFJ-4187-min.jpg'},
//   {goodsId: 1010701, name: 'SFJ-3385', price: '140', pic: 'img/SFJ-3385.jpg', pic_min: 'img/SFJ-3385-min.jpg'},
//   {goodsId: 1010801, name: 'SFJ-HD021', price: '94', pic: 'img/SFJ-HD021.jpg', pic_min: 'img/SFJ-HD021-min.jpg'},
//   {goodsId: 1010901, name: 'SFJ-3391', price: '151', pic: 'img/SFJ-3391.jpg', pic_min: 'img/SFJ-3391-min.jpg'},
//   {goodsId: 1011001, name: 'SFJ-C4369', price: '61', pic: 'img/SFJ-C4369.jpg', pic_min: 'img/SFJ-C4369-min.jpg'},
//   {goodsId: 1011101, name: 'SFJ-1201', price: '72', pic: 'img/SFJ-1201.jpg', pic_min: 'img/SFJ-1201-min.jpg'},
//   {goodsId: 1011201, name: 'SFJ-HD078圆点', price: '139', pic: 'img/SFJ-HD078yuandian.jpg', pic_min: 'img/SFJ-HD078yuandian-min.jpg'},
//   {goodsId: 1020101, name: 'BZ-4183', price: '26', pic: 'img/BZ-4183.jpg', pic_min: 'img/BZ-4183-min.jpg'},
//   {goodsId: 1020201, name: 'BZ-52272', price: '85', pic: 'img/BZ-52272.jpg', pic_min: 'img/BZ-52272-min.jpg'},
//   {goodsId: 1020301, name: 'BZ-4200', price: '17', pic: 'img/BZ-4200.jpg', pic_min: 'img/BZ-4200-min.jpg'},
//   {goodsId: 1020401, name: 'BZ-L2024', price: '68', pic: 'img/BZ-L2024.jpg', pic_min: 'img/BZ-L2024-min.jpg'},
//   {goodsId: 1020501, name: 'BZ-L2088', price: '110', pic: 'img/BZ-L2088.jpg', pic_min: 'img/BZ-L2088-min.jpg'},
//   {goodsId: 1020601, name: 'BZ-HD046', price: '17', pic: 'img/BZ-HD046.jpg', pic_min: 'img/BZ-HD046-min.jpg'},
//   {goodsId: 1020701, name: 'BZ-HD078小绣花', price: '62', pic: 'img/BZ-HD078xiuhua.jpg', pic_min: 'img/BZ-HD078xiuhua-min.jpg'},
//   {goodsId: 1020801, name: 'BZ-S032', price: '168', pic: 'img/BZ-S032.jpg', pic_min: 'img/BZ-S032-min.jpg'},
//   {goodsId: 1020901, name: 'BZ-S005', price: '184', pic: 'img/BZ-S005.jpg', pic_min: 'img/BZ-S005-min.jpg'},
//   {goodsId: 1021001, name: 'BZ-K049', price: '53', pic: 'img/BZ-K049.jpg', pic_min: 'img/BZ-K049-min.jpg'},
//   {goodsId: 1021101, name: 'BZ-L2027', price: '76', pic: 'img/BZ-L2027.jpg', pic_min: 'img/BZ-L2027-min.jpg'},
//   {goodsId: 1021201, name: 'BZ-HD021', price: '48', pic: 'img/BZ-HD021.jpg', pic_min: 'img/BZ-HD021-min.jpg'},
//   {goodsId: 1021301, name: 'BZ-S013', price: '89', pic: 'img/BZ-S013.jpg', pic_min: 'img/BZ-S013-min.jpg'},
//   {goodsId: 1021401, name: 'BZ-K058', price: '51', pic: 'img/BZ-K058.jpg', pic_min: 'img/BZ-K058-min.jpg'},
//   {goodsId: 1021501, name: 'BZ-PB01', price: '74', pic: 'img/BZ-PB01.jpg', pic_min: 'img/BZ-PB01-min.jpg'},
//   {goodsId: 1021601, name: 'BZ-3275', price: '59', pic: 'img/BZ-3275.jpg#', pic_min: 'img/BZ-3275-min.jpg#'},
//   {goodsId: 1021701, name: 'BZ-S017', price: '44', pic: 'img/BZ-S017.jpg', pic_min: 'img/BZ-S017-min.jpg'},
//   {goodsId: 1021801, name: 'BZ-K048', price: '75', pic: 'img/BZ-K048.jpg', pic_min: 'img/BZ-K048-min.jpg'},
//   {goodsId: 1021901, name: 'BZ-62294', price: '36', pic: 'img/BZ-62294.jpg', pic_min: 'img/BZ-62294-min.jpg'},
//   {goodsId: 1022001, name: 'BZ-CM601', price: '41', pic: 'img/BZ-CM601.jpg', pic_min: 'img/BZ-CM601-min.jpg'},
//   {goodsId: 1030101, name: 'ZB-L2024', price: '208', pic: 'img/ZB-L2024.jpg', pic_min: 'img/ZB-L2024-min.jpg'},
//   {goodsId: 1030201, name: 'ZB-HD078小绣花', price: '185', pic: 'img/ZB-HD078xiuhua.jpg', pic_min: 'img/ZB-HD078xiuhua-min.jpg'},
//   {goodsId: 1030301, name: 'ZB-HD118', price: '128', pic: 'img/ZB-HD118.jpg', pic_min: 'img/ZB-HD118-min.jpg'},
//   {goodsId: 1030401, name: 'ZB-C2868', price: '56', pic: 'img/ZB-C2868.jpg', pic_min: 'img/ZB-C2868-min.jpg'},
//   {goodsId: 1030501, name: 'ZB-52838', price: '165', pic: 'img/ZB-52838.jpg', pic_min: 'img/ZB-52838-min.jpg'},
//   {goodsId: 1030601, name: 'ZB-CM601', price: '145', pic: 'img/ZB-CM601.jpg', pic_min: 'img/ZB-CM601-min.jpg'},
//   {goodsId: 1030701, name: 'ZB-HD021', price: '134', pic: 'img/ZB-HD021.jpg', pic_min: 'img/ZB-HD021-min.jpg'},
//   {goodsId: 1030801, name: 'ZB-C3465', price: '88', pic: 'img/ZB-C3465.jpg', pic_min: 'img/ZB-C3465-min.jpg'},
//   {goodsId: 1040101, name: 'ZQ-L2024', price: '137', pic: 'img/ZQ-L2024.jpg', pic_min: 'img/ZQ-L2024-min.jpg'},
//   {goodsId: 1040201, name: 'ZQ-L2027', price: '145', pic: 'img/ZQ-L2027.jpg', pic_min: 'img/ZQ-L2027-min.jpg'},
//   {goodsId: 1040301, name: 'ZQ-HD021', price: '93', pic: 'img/ZQ-HD021.jpg', pic_min: 'img/ZQ-HD021-min.jpg'},
//   {goodsId: 1040401, name: 'ZQ-7801', price: '97', pic: 'img/ZQ-7801.jpg', pic_min: 'img/ZQ-7801-min.jpg'},
//   {goodsId: 1050101, name: 'YD-4200', price: '39', pic: 'img/YD-4200.jpg', pic_min: 'img/YD-4200-min.jpg'},
//   {goodsId: 1050201, name: 'YD-3275', price: '62', pic: 'img/YD-3275.jpg', pic_min: 'img/YD-3275-min.jpg'},
//   {goodsId: 1050301, name: 'YD-HD118', price: '55', pic: 'img/YD-HD118.jpg', pic_min: 'img/YD-HD118-min.jpg'},
//   {goodsId: 1050401, name: 'YD-62779', price: '65', pic: 'img/YD-62779.jpg', pic_min: 'img/YD-62779-min.jpg'},
//   {goodsId: 1060101, name: 'CD-L2024', price: '27', pic: 'img/CD-L2024.jpg', pic_min: 'img/CD-L2024-min.jpg'},
//   {goodsId: 1060201, name: 'CD-3335', price: '22', pic: 'img/CD-3335.jpg', pic_min: 'img/CD-3335-min.jpg'},
//   {goodsId: 1060301, name: 'CD-HD078小绣花', price: '19', pic: 'img/CD-HD078xiuhua.jpg', pic_min: 'img/CD-HD078xiuhua-min.jpg'},
//   {goodsId: 1060401, name: 'CD-52838', price: '27', pic: 'img/CD-52838.jpg', pic_min: 'img/CD-52838-min.jpg'},
//   {goodsId: 1060501, name: 'CD-7814', price: '21', pic: 'img/CD-7814.jpg', pic_min: 'img/CD-7814-min.jpg'},
//   {goodsId: 1060601, name: 'CD-HD118', price: '18', pic: 'img/CD-HD118.jpg', pic_min: 'img/CD-HD118-min.jpg'},
//   {goodsId: 1060701, name: 'CD-C3869', price: '9', pic: 'img/CD-C3869.jpg', pic_min: 'img/CD-C3869-min.jpg'},
//   {goodsId: 1060801, name: 'CD-CM601', price: '18', pic: 'img/CD-CM601.jpg', pic_min: 'img/CD-CM601-min.jpg'},
//   {goodsId: 1070101, name: 'PD-L042', price: '124', pic: 'img/PD-L042.jpg', pic_min: 'img/PD-L042-min.jpg'},
//   {goodsId: 1070201, name: 'PD-3385', price: '79', pic: 'img/PD-3385.jpg', pic_min: 'img/PD-3385-min.jpg'},
//   {goodsId: 1070301, name: 'PD-S024', price: '75', pic: 'img/PD-S024.jpg', pic_min: 'img/PD-S024-min.jpg'},
//   {goodsId: 1070401, name: 'PD-XH007', price: '114', pic: 'img/PD-XH007.jpg', pic_min: 'img/PD-XH007-min.jpg'}
// ];

class GoodsList extends Component {
  render() {
    const {goodsId, name, price, pic_min} = this.props;

    return (
      <li>
        <dl>
          <dt><img src={pic_min} alt="" className="picGoods-min" /></dt>
          <dd>
            <em style={{display: 'none'}}>{goodsId}</em>
            <span>{name}</span>
            <b>RMB {price}</b>
            <a href="#" className="get-btn cartAdd">添加到购物袋</a>
          </dd>
        </dl>
      </li>
    )
  }
}

class Goods extends Component {
  render() {
    const {dataGoods} = this.props;
    // let dataGoodTmp = Object.assign([], {...dataGoods});
    const list = dataGoods.map(e => {
      return <GoodsList key={e.goodsId} {...e} />;
    });

    return (
      <section>
        <div className="autoWidth banner"></div>
        <ul className="autoWidth lists">
          {list}
        </ul>
      </section>
    )
  }
}

export {Goods};