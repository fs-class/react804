import styled from 'styled-components';
import './App.css';



// 컴포넌트 생성 + 스타일 지정
// const 컴포넌트명 = styled.태그명`CSS 스타일`;
const StyledButton = styled.button`
  color: white;
  background-color: purple;
`;

// 스타일 확장
// const 컴포넌트명 = styled(Styled컴포넌트)`CSS 스타일`;
const LargeButton = styled(StyledButton)`
  font-size: 50px;
`;


const ReactButton = props => {
  // console.log('props', props);
  // console.log('props.className', props.className);
  const style = {
    color: 'white',
    backgroundColor: 'purple'
  }
  return (
    // <button className='buttonStyle'>
    // <button style={{color: 'white', backgroundColor: 'purple'}}>
    // <button style={style}>
    <button className={props.className} style={style}>
      {props.children}
    </button>
  );
}

const ReactLargeButton = styled(ReactButton)`
  font-size: 50px;
`;

const PrimaryButton = styled.button`
  color: ${props => 
    // console.log('props', props);
    // console.log('props.primary', props.primary);
    // if (props.primary) {
    //   return 'white'
    // } else {
    //   return 'blue';
    // }
    props.primary ? 'white' : 'blue'
  };
  
  background-color: ${props=>props.primary ? 'blue' : 'gray'};
`;


function App() {
  return (
    <div>
      {'Hello!'}
      <ReactButton>React</ReactButton>
      <StyledButton>Styled</StyledButton>
      <LargeButton>Large</LargeButton>
      <ReactLargeButton>React Large</ReactLargeButton>

      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </div>
  );
}

export default App;
