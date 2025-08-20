import { useState } from 'react';


// Header 컴포넌트
// props -> {title: 'web'}
function Header(props) {
  return (
    <header>
      <h1>
        <a href="/" onClick={event => {
          event.preventDefault();
          props.onChangeMode();
        }}>{props.title}</a>
      </h1>
    </header>
  );
}

// Nav 컴포넌트
function Nav(props) {

  // const lis = [
  //   <li><a href="/read/1">html</a></li>,
  //   <li><a href="/read/2">css</a></li>,
  //   <li><a href="/read/3">javascript</a></li>,
  // ]

  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}><a id={t.id} href={"/read/" + t.id} onClick={event => {
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}

// Article 컴포넌트
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

// Create 컴포넌트
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form onSubmit={event => { 
        // 페이지가 리로드되는 것을 방지
        event.preventDefault();
        console.log('event.target.title.value', event.target.title.value);
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onCreate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" /></p>
        <p><textarea name="body" placeholder="body"></textarea></p>
        <p><input type="submit" value="Create" /></p>
      </form>
    </article>
  );
}

// Update 컴포넌트
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>Update</h2>
      <form onSubmit={event => { 
        // 페이지가 리로드되는 것을 방지
        event.preventDefault();
        console.log('event.target.title.value', event.target.title.value);
        const title = event.target.title.value;
        const body = event.target.body.value;
        props.onUpdate(title, body);
      }}>
        <p><input type="text" name="title" placeholder="title" value={title} onChange={(event) => {
          console.log(event.target.value)
          setTitle(event.target.value);
        }} /></p>
        <p><textarea name="body" placeholder="body" value={body} onChange={(event) => {
          setBody(event.target.value);
        }}></textarea></p>
        <p><input type="submit" value="Update" /></p>
      </form>
    </article>
  );
}


// App 컴포넌트
function App() {
  // const _mode = useState('W');
  // console.log('_mode', _mode);
  // const [변수, 함수] = useState(초깃값);
  // const [변수, set변수] = useState('WELCOME'); (관례적)
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is ...' },
    { id: 2, title: 'css', body: 'css is ...' },
    { id: 3, title: 'javascript', body: 'javascript is ...' },
  ]);

  let content = null;
  let contextControl = null;
  // WELOMCE mode
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, Web"></Article>

    // READ mode
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      // id는 Number(event.target.id)이다.
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title
        body = topics[i].body
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <li><a href="'/update/'+id" onClick={event => { 
        event.preventDefault();
        setMode('UPDATE');
      }}>Update</a></li>

      {/* DELETE button */}
      <li><input type="button" value="Delete" onClick={()=>{
        const newTopics = [];
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }} /></li>
    </>

    // CREATE mode
  } else if (mode === 'CREATE') {
    content = <Create onCreate={(_title, _body) => { 
      const newTopic = { id: nextId, title: _title, body: _body }
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      console.log('newTopics', newTopics);
      setId(nextId);
      setNextId(nextId + 1);
      setMode('READ');
    }}></Create>

    // UPDATE mode
  } else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      // id는 Number(event.target.id)이다.
      console.log(topics[i].id, id);
      if (topics[i].id === id) {
        title = topics[i].title
        body = topics[i].body
      }
    }

    content = <Update title={title} body={body} onUpdate={(title, body) => {
      console.log(title, body);
      const newTopics = [...topics];
      const updatedTopic = { id: id, title: title, body: body }
      for (let i = 0; i < newTopics.length; i++) {
        if (newTopics[i].id === id) {
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');
    }}></Update>
  }
  

  return (
    <div>
      <Header title="Web" onChangeMode={() => {
        // mode = 'WELCOME';
        setMode('WELCOME');
      }}></Header>
      
      <Nav topics={topics} onChangeMode={(_id) => {
        // mode = 'READ';
        setMode('READ');
        setId(_id);
      }}></Nav>

      {/* <Article title="Webcome" body="Hello, Web"></Article> */}
      {/* <Article title={title} body={body}></Article> */}
      {content}
      <ul>
        <li>
          <a href="/create" onClick={event => {
            event.preventDefault();
            setMode('CREATE');
          }}>Create</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}
    
export default App;
