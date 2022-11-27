import React from 'react';
import ChatBot from 'react-simple-chatbot';
import {Segment} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const steps = [
  {
    id:'Greet',
    message:'Hello,Welcome to our shop! How can we help you?',
    trigger:'Ask name'
  },
  {
    id:'Ask name',
    message:'Enter your name',
    trigger:'waiting'
  },
  {
    id:'waiting',
    user:true,
    trigger:'name'
  },
  {
    id:'name',
    message:'Hi {previousValue}, Which category you are facing issues?',
    trigger:'issues'
  },
  {
    id:'issues',
    options:[
      {value:'Men',label:'Men',trigger:"Men"},
      {value:'Women',label:'Women',trigger:"Women" },
      {value:'Kids',label:'Kids',trigger:"Kids"},
      {value:'Electronics Items',label:'Electronics Itemsds',trigger:"Electronics Items"},
      {value:'Home Decor',label:'Home Decor',trigger:"Home Decor"},
      {value:'Accesories',label:'Accesories',trigger:"Accesories"},
    ]
  },
    {
      id:'Men',
      message:'Thanks for telling your issues.',
      end:true

    },
    {
      id:'Women',
      message:'Thanks for telling your issues.',
      end:true
    },
    {
      id:'Kids',
      message:'Thanks for telling your issues.',
      end:true
    },
    {
      id:'Electronics Items',
      message:'Thanks for telling your issues.',
      end:true
    },
    {
      id:'Home Decor',
      message:'Thanks for telling your issues.',
      end:true
   },
  {
     id:'Accesories',
      message:'Thanks for telling your issues.',
      end:true
}

    ];

function App() {

  
    
  return(
  <>
  <Segment floated="left">
    <ChatBot steps={steps} />
    </Segment>
    
    </>
  );
  }
  export default App;
