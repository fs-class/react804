import { Route, Routes, NavLink, Outlet, useParams} from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  );
}

const contents = [
  { id: 1, title: 'HTML', description: 'HTML is ...' },
  { id: 2, title: 'JS', description: 'JS is ...' },
  { id: 3, title: 'React', description: 'React is ...' },
];


function Topic() {
  const params = useParams();
  console.log('params', params, params.topic_id);
  const topic_id = params.topic_id;
  let selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  }
  for(let i=0; i<contents.length; i++) {
    if(contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  );
}


function Topics() {
  const lis = [];
  for (let i = 0; i < contents.length; i++) {
    lis.push(<li key={contents[i].id}><NavLink to={`${contents[i].id}`}>{contents[i].title}</NavLink></li>)
  }

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {/* <li><NavLink to="1">HTML</NavLink></li>
        <li><NavLink to="2">JS</NavLink></li>
        <li><NavLink to="3">React</NavLink></li> */}
        {lis}
      </ul>
      {/* 여기서 자식 라우트 컴포넌트가 렌더링 됨 */}
      <Outlet />
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}


function App() {
  return (
    <div>
      <h1>React Router DOM example</h1>
      <ul>
        {/* <li><a href="/">Home</a></li>
        <li><a href="/topics">Topics</a></li>
        <li><a href="/contact">Contact</a></li> */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topics</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics" element={<Topics />}>
          <Route path="/topics/:topic_id" element={<Topic />}></Route>
          {/* <Route path="1" element={"HTML is ..."}></Route>
          <Route path="2" element={"JS is ..."}></Route>
          <Route path="3" element={"React is ..."}></Route> */}
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={"Not found"}></Route>
      </Routes>


    </div>
  );
}

export default App;
