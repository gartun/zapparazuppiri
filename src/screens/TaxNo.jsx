import { useState, useEffect } from "react";

import TaxInput from "../components/TaxInput";

const TaxNo = () => {
  const [numbers, setNumbers] = useState({});
  const [showIsCopied, setShowIsCopied] = useState(false);

  useEffect(() => {
    setNumbers(JSON.parse(localStorage.getItem("taxno")) || {});
  }, []);

  const handleAdd = (name, num, blockNum) => {
    if (Object.keys(numbers).includes(name)) {
      alert("aynı isimde bir kayıt mevcut!");
      return;
    }

    if (Object.values(numbers).includes(num)) {
      alert("aynı vergi numarasına sahip bir kayıt mevcut!");
      return;
    }

    const additionalName = blockNum ? `(${blockNum})` : "";
    const newObj = { ...numbers };
    newObj[`${name} ${additionalName}`] = num;

    localStorage.setItem("taxno", JSON.stringify(newObj));

    setNumbers(newObj);
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
    const conf = window.confirm(`${key} kaydını silmek istiyor musunuz?`);

    if (!conf) return;

    const newObj = {};

    const newKeys = Object.keys(numbers).filter((k) => k !== key);

    newKeys.forEach((nK) => {
      newObj[nK] = numbers[nK];
    });

    localStorage.setItem("taxno", JSON.stringify(newObj));

    setNumbers(newObj);
  };

  const handleClearAll = () => {
    const conf = window.confirm("tüm kayıtları silmek istiyor musunuz?");

    if (!conf) return;

    localStorage.removeItem("taxno");
    setNumbers({});
  };

  return (
    <>
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
            {Object.keys(numbers).length > 0 &&
              Object.keys(numbers).map((key) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{numbers[key]}</td>
                  <td>
                    <button
                      className="action-btn"
                      onClick={() => handleCopy(numbers[key])}
                    >
                      Kopyala
                    </button>
                  </td>
                    
                  <td>
                    <button
                      className="action-btn btn-danger"
                      onClick={() => handleDelete(key)}
                    >
                      Sil
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {Object.keys(numbers).length > 0 && (
        <button className="action-btn btn-danger" onClick={handleClearAll}>
          Hepsini Temizle
        </button>
      )}
    </>
  );
};

export default TaxNo;
