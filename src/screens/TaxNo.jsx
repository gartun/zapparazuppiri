import { useState } from "react";

import useStorage from "../hooks/useStorage";
import TaxInput from "../components/TaxInput";
import TaxRow from "../components/TaxRow";
import FrequentlyUsed from "../components/FrequentlyUsed";

const TaxNo = () => {
  const {numbers, setNumbers} = useStorage();
  const [showIsCopied, setShowIsCopied] = useState(false);

  const handleAdd = (name, num, blockNum) => {
    
    for(let i = 0; i < numbers.length; i++) {
      const currObj = numbers[i];

      if(currObj.title === name) {
        alert("aynı isimde bir kayıt mevcut!");
        return "same name";
      }

      if(currObj.num === num) {
        alert("aynı vergi numarasına sahip bir kayıt mevcut!");
        return;
      }
    }

    const additionalName = blockNum ? ` (${blockNum})` : "";
    const newArr = [ 
      ...numbers,
      {
        id: name,
        title: name + additionalName,
        num,
      }
    ];

    localStorage.setItem("newtaxno", JSON.stringify(newArr));

    setNumbers(newArr);
  };

  const handleCopy = (no) => {
    const textarea = document.createElement("textarea");
    textarea.innerText = no;
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    const success = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (success) {
      setShowIsCopied(true);
      setTimeout(() => setShowIsCopied(false), 850);
    }
  };

  const handleDelete = (key) => {
    const conf = window.confirm(`${key} kaydını silmek üzeresiniz...`);

    if (!conf) return;

    const newArr = numbers.filter((obj) => obj.id !== key);

    localStorage.setItem("newtaxno", JSON.stringify(newArr));

    setNumbers(newArr);
  };

  const handleClearAll = () => {
    const conf = window.confirm("tüm kayıtları silmek üzeresiniz...");

    if (!conf) return;

    localStorage.removeItem("newtaxno");
    setNumbers([]);
  };

  const handleUpdate = (key, name, num) => {
    const newArr = numbers.map(obj => {
      if(obj.id === key) {
        return {
          id: name,
          title: name,
          num
        }
      }

      return obj;
    });

    localStorage.setItem("taxno", JSON.stringify(newArr));
    setNumbers(newArr);
  }

  return (
    <div className="tax-screen">
      <TaxInput handleAdd={handleAdd} />
      <div className={`copy ${showIsCopied ? "show" : ""}`}>
        <p>Kopyalandı!</p>
      </div>
      <div className="table-wrapper">
        <table className="tax-table">
          <thead>
            <tr>
              <th>İsim</th>
              <th>Vergi No</th>
              <th colSpan="3">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {numbers.length > 0 &&
              numbers.map((obj) => (
                <TaxRow 
                  key={obj.id}
                  id={obj.id}
                  title={obj.title}
                  num={obj.num}
                  handleDelete={handleDelete}
                  handleCopy={handleCopy}
                  handleUpdate={handleUpdate}
                />
              ))}
          </tbody>
        </table>
      </div>
      {numbers.length > 0 && (
        <button className="action-btn btn-danger" onClick={handleClearAll}>
          Hepsini Temizle
        </button>
      )}
      <FrequentlyUsed handleCopy={handleCopy} />
    </div>
  );
};

export default TaxNo;
