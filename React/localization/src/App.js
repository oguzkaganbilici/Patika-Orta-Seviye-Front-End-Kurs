import './App.css';
import {IntlProvider, FormattedMessage, FormattedNumber} from "react-intl"
import { useEffect, useState } from 'react';

function App() {
  const defaultLang = localStorage.getItem("language") ? localStorage.getItem("language") : navigator.language;
  const messages = {
    "tr-TR":{
      title:"Merhaba Dunya",
      describe:"{count} yeni mesajiniz var"
  },
  "en-US":{
    title:"Hello World",
    describe:"you have {count} new messages"
  }
}

  const [lang,setLang] = useState(defaultLang);

  useEffect(()=>{
    localStorage.setItem("language", lang)
  },[lang])
  return (
    <div className="App">
      <IntlProvider messages={messages[lang]} locale={lang}>
        <FormattedMessage id="title"/>
        <p><FormattedMessage id='describe' values={{count:5}}/></p>
        <br/>
        <br/>

        <button onClick={()=>setLang("tr-TR")}>TR</button>
        <button onClick={()=>setLang("en-US")}>Eng</button>
      </IntlProvider>
    </div>
  );
}

export default App;
