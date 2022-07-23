import React, { Component } from 'react'

export default class Databinding extends Component {

  //Phương thức render
  render() {

    const hoTen= 'Huy Phan'
    const tinhDiemTrungBinh =(diemToan,diemVan)=>{
      return (diemToan+diemVan)/2
    }

    return (
      <div>
        Databinding
        <p>Họ tên:{hoTen}</p>
        <p>Điểm trung bình:{tinhDiemTrungBinh(8,2)}</p>
        </div>
    )
  }
}
