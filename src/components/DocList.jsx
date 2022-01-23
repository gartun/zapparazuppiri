import { Link } from "react-router-dom";

import docs from "../docs";

const DocList = ({ keyword }) => {

  const filteredList = keyword !== "" ?
                         docs.filter(doc => doc.keywords.includes(keyword.toLowerCase())) 
                       : docs;
  const getExcerpt = desc => desc.length < 350 ? desc : `${desc.substring(0, 350)}...`;

  return (
    <div>
      {
        filteredList.length > 0 ? filteredList.map(d => (
          <Link key={d.id} to={`/docs/${d.id}`} className="doc-card">
            <img src={d.img[0]} alt="doc pic" />
            <div>
              <h1 className="doc-title">{d.title}</h1>
              <p>{getExcerpt(d.desc)}</p>
            </div>
          </Link>
        )) : <h1 style={{fontSize: "2rem", margin: "2em 0"}}>Eşleşen öğe yok</h1>
      }
    </div>
  )
}

export default DocList;
