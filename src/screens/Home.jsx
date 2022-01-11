import { useState } from "react";

import Search from "../components/Search";
import DocList from "../components/DocList";

function Home() {
  const [keyword, setKeyword] = useState(sessionStorage.getItem("turmob-keyword") ?? "");

  return (
    <>
      <Search setKeyword={setKeyword} />
      <DocList keyword={keyword} />
    </>
  )
}

export default Home;