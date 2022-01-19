import { useState, useRef } from "react";

const TaxInput = ({ handleAdd }) => {
  const [blockNum, setBlockNum] = useState("");
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const inpRef = useRef();

  const handleAddLocally = (e) => {
    e.preventDefault();

    handleAdd(name, num, blockNum);

    setName("");
    setNum("");
    inpRef.current.focus();
  };

  return (
    <>
      <div style={{ marginBottom: "1em" }}>
        <label>Blok numarası: </label>
        <input
          type="number"
          value={blockNum}
          onChange={e => setBlockNum(e.target.value)}
        />
      </div>
      <form style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "5px" }}>
        <div>
          <label>İsim ve Adres:* </label>
          <input
            ref={inpRef}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Vergi No:* </label>
          <input
            type="number"
            value={num}
            onChange={(e) => setNum(e.target.value)}
          />
        </div>
        <button disabled={!name || !num} onClick={handleAddLocally}>
          kaydet
        </button>
      </form>
    </>
  );
};

export default TaxInput;
