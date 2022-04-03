import { useState, useRef } from "react";

const TaxInput = ({ handleAdd }) => {
  const [blockNum, setBlockNum] = useState("");
  const [num, setNum] = useState("");
  const [name, setName] = useState("");
  const inpRef = useRef();

  const handleAddLocally = (e) => {
    e.preventDefault();

    const res = handleAdd(name, num, blockNum);

    /*
      After invoking the handleAdd function, we empty the
      both input fields. But if the result returned by that
      function is equal to the string "same name", then we keep
      'num' state unchanged so that the user does not have to
       re-type the whole tax number
    */
    if(res !== "same name") setNum("");
    setName("");

    // set focus back to the name field
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
