import { useParams } from 'react-router-dom';
import docs from "../docs";

const Document = () => {
  const { id } = useParams();
  const doc = docs.find(d => d.id === +id);

  return (
    <div>
      <h1 className="doc-title">{ doc.title }</h1>
      <p className="doc-par">{ doc.desc }</p>
      <p className="doc-par"><strong>Örnek Fotoğraflar</strong></p>
      {
        doc.img.map(img => (
          <img key={img} className="doc-img" src={ img } alt="doc-pic" />
        ))
      }
    </div>
  )
}

export default Document;
