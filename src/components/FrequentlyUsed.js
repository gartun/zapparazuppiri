import React from 'react'

const nums = [
  {
    id: 1,
    title: "DRT Bağımsız",
    taxNo: 2910010976
  },
  {
    id: 11,
    title: "DRT Yeminli",
    taxNo: 3130025213
  },
  {
    id: 2,
    title: "PwC Yeminli Mali Müşavirlik",
    taxNo: 6290044193
  },
  {
    id: 3,
    title: "Kuzey YMM ve Bağımsız",
    taxNo: 6010277204
  },
  {
    id: 4,
    title: "Güney Bağımsız Denetim",
    taxNo: 4350303260
  },
  {
    id: 5,
    title: "KPMG Bağımsız Denetim",
    taxNo: 5890269940
  },
  {
    id: 6,
    title: "Kpmg Yeminli",
    taxNo: 9530010848
  },
  {
    id: 7,
    title: "Denge Bağımsız Denetim",
    taxNo: 2910012995
  },
  {
    id: 8,
    title: "PwC Bağımsız Denetim",
    taxNo: 1460022405
  },
  {
    id: 9,
    title: "Arkan yeminli mali",
    taxNo: "0790344892"
  }
];

const FrequentlyUsed = ({ handleCopy }) => {
  return (
    <section>
      <h2>sık kullanılanlar</h2>
      {
        nums.map(obj => (
          <li key={obj.id} style={{ padding: "0.5em"}}>
            {obj.title}-{obj.taxNo}-<button className="action-btn" onClick={() => handleCopy(obj.taxNo)}>Kopyala</button>
          </li>
        ))
      }
    </section>
  )
}


export default FrequentlyUsed;

