import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Questions from "./components/Questions";
import Timer from "./components/Timer";
import Welcome from "./components/Welcome";
import { GiPlayerTime } from "react-icons/gi";

function App() {
  const[username,setUserName]=useState(null);
  const [question,setQuestion]=useState(1);
  const [timer,setTimer]=useState(false);
  const [paisa,setPaisa]=useState(0);
  
  useEffect(()=>
  {
    localStorage.getItem("user")&&setUserName(localStorage.getItem("user"));
  })
  const data=[{
    id:100,
    question:"'.MOV' extension refers usually to what kind of file?",
    answers:[{
       option:"Animation/movie file",
       status:true,
    },
  {
    option:"Image file",
    status:false
  },
  {
   option:"Audio file",
   status:false,
 },
{
  option:"MS Office document",
  status:false
}]
  },
  {
    id:101,
    question:"Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
    answers:[{
       option:"Flange",
       status:false,
    },
  {
    option:"Fury",
    status:false
  },
  {
   option:"FRAM",
   status:false,
 },
{
  option:"Flash",
  status:true
}]
  },
  
  {
    id:102,
    question:"'.MPG' extension refers usually to what kind of file?",
    answers:[{
       option:"Image file",
       status:false,
    },
  {
    option:"WordPerfect Document file",
    status:false
  },
  {
   option:"MS Office document",
   status:false,
 },
{
  option:"Animation/movie file",
  status:true
}]
  },
  {
    id:103,
    question:"The words 'Satyameva Jayate' inscribed below the base plate of the emblem of India are taken from",
    answers:[{
       option:"Rigveda",
       status:false,
    },
  {
    option:"Satpath Brahmana",
    status:false
  },
  {
   option:"Mundak Upanishad",
   status:true,
 },
{
  option:"Ramayana",
  status:false
}]
  },
  {
    id:104,
    question:"Which of the following folk dance forms is associated with Gujarat?",
    answers:[{
       option:"Nautanki",
       status:false,
    },
  {
    option:"Garba",
    status:true
  },
  {
   option:"Kathakali",
   status:false,
 },
{
  option:"Bhangra",
  status:false
}]
  },
  {
    id:105,
    question:"The book of Parsis is",
    answers:[{
       option:"Torah",
       status:false,
    },
  {
    option:"Bible",
    status:false
  },
  {
   option:"Zend Avesta",
   status:true,
 },
{
  option:"Gita",
  status:false
}]
  },
  {
    id:106,
    question:"The Rath Yatra at Puri is celebrated in honour of which Hindu deity",
    answers:[{
       option:"Ram",
       status:false,
    },
  {
    option:"Shiva",
    status:false
  },
  {
   option:"Jaganath",
   status:true,
 },
{
  option:"Vishnu",
  status:false
}]
  },
  {
    id:107,
    question:"The Homolographic projection has the correct representation of",
    answers:[{
       option:"Shape",
       status:false,
    },
  {
    option:"Baring",
    status:false
  },
  {
   option:"Area",
   status:true,
 },
{
  option:"Distance",
  status:false
}]
  },
  {
    id:108,
    question:"The National Anthem was first sung in the year",
    answers:[{
       option:"1911",
       status:true,
    },
  {
    option:"1913",
    status:false
  },
  {
   option:"1936",
   status:false,
 },
{
  option:"1935",
  status:false
}]
  },
  {
    id:109,
    question:"Thillana is a format of",
    answers:[{
       option:"Kuchipudi",
       status:false,
    },
  {
    option:"Odissi",
    status:false
  },
  {
   option:"Kathak",
   status:false,
 },
{
  option:"Bharatanatyam",
  status:true
}]
  }]
  const money= useMemo(()=>
  
    [
      {id:1,amount:"2000"},
      {id:2,amount:"4000"},
      {id:3,amount:"6000"},
      {id:4,amount:"10000"},
      {id:5,amount:"12000"},
      {id:6,amount:"14000"},
      {id:7,amount:"16000"},
      {id:8,amount:"18000"},
      {id:9,amount:"20000"},
      {id:10,amount:"30000"},
    ].reverse(),
  [])
    
  useEffect(()=>
  {
   
      {question>1&&setPaisa(money.find((m)=>
        m.id===question-1).amount
  )}
  
  },[money,question])
  const handlebtn =()=>
  {
    setTimer(false);
    setQuestion(1);
    setPaisa(0);
    <Questions 
    key={data.id}
    data={data} 
    setTimer={setTimer}
    setQuestion={setQuestion}
    question={question}
    />  
  }
  return (
    <div className="app">
      {username ?
      <> 
      
      <div className="main">
      <div className="header">Welcome, {username}</div>
      {timer?
      <div className="lost-page">
      <div className="lost-game">You have earned  <span className="bold">&#8377;{paisa}</span>
      </div>
      <button className="lost-btn" onClick={handlebtn}>Play Again</button>
       </div>
      :
      <>
        <div className="top">
        <h3 className="timer"><Timer setTimer={setTimer} question={question} /></h3>
        </div>
        <div className="bottom">
       <Questions 
       key={data.id}
       data={data} 
       setTimer={setTimer}
       setQuestion={setQuestion}
       question={question}
       /> 
        </div>
        </>}
      </div>
      <div className="coins">
        <ul className="coin-list ">
          
          
            {money.map(m=>
              (
                
                <li  key={m.id} className={question===m.id ? "coin-item active" :"coin-item"}
                 >
                  
                <span>{m.id}</span>
                <span> &#8377; {m.amount}</span>
                </li>
              ))}
            
         
         
         
        </ul>
      </div></>:<Welcome setUserName={setUserName}/>}
     
      

    </div>
  );
}

export default App;
