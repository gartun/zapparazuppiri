import { useState } from "react";

const TaxRow = ({ 
    num,
    id,
    title,
    handleCopy,
    handleDelete,
    handleUpdate
}) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(title);
  const [number, setNumber] = useState(num);

  const handleUpdateLocally = () => {
    setEditing(false);
    handleUpdate(id, name, number);
  }

  return (
    <tr>
      <td>
        {editing ? (
            <input 
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          ): title}
      </td>
      <td>
        {editing ? (
            <input
              type="number"
              value={number}
              onChange={e => setNumber(e.target.value)}
            />
          ) : num
        }
      </td>
      <td>
        <button 
          className="action-btn"
          onClick={() => handleCopy(num)}
          disabled={editing}
        >
          Kopyala
        </button>
      </td>
      
      <td>
        {
          editing ? (
            <button
              className="action-btn"
              onClick={handleUpdateLocally}
            >
              Kaydet
            </button>
          ) : (
            <button
              className="action-btn edit-btn"
              onClick={() => setEditing(true)}
            >
              Düzenle
            </button>
          )
        }
        
      </td>

      <td>
        <button
          className="action-btn btn-danger"
          onClick={() => handleDelete(id)}
          disabled={editing}
        >
          Sil
        </button>
      </td>
    </tr>
  );
};

export default TaxRow;
