import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';

function App() {

  let [dogs] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">HipDog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        
      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
      
      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>
            <div className="container">
              <div className="row">
                { 
                  dogs.map((a,i)=> {
                    return (
                      <Card dogs={dogs[i]} i={i+1}> </Card>
                    )
                  })
                }
              </div>
            </div>
            </>
        } />
        <Route path="/detail" element={< Detail />} />

        <Route path="/about" element={< About />} >
          <Route path="member" element={<div>회사멤버입니다.</div>} />
          <Route path="location" element={<div>위치정보입니다.</div>} />
        </Route>

        <Route path="*" element={<div>없는 페이지입니다.</div>} />
      </Routes>

    
          {/* <div className="col-md-4">
            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTdfNTcg/MDAxNTgxOTAyNTc5NDI1.4dP54fTUZ9aXBc2iEVZKtY7Ziw1WlEQ_0Fay4keJWikg.wHLViqETwlM03XZhHc2-m5aHdXIBU1xOwJe_cEOSIjEg.JPEG.vita_c1000/6F607E26-02B1-4A61-B64B-EAD45DED3FAE-84365-000018A30AAC27FF_file.jpg?type=w800" width ="80%"/>
            <h4>{dogs[1].title}</h4>
            <p>{dogs[1].content}</p>
            <p>{dogs[1].price}</p>
          </div>
          <div className="col-md-4">
          <img src="https://post-phinf.pstatic.net/MjAxOTEyMThfMyAg/MDAxNTc2NjQ3ODYyNzU4.tkFbDGzvq-Vfk89ecsFoM8-ilZqwo1wry_9-DaUaZLkg.JwE9WTvu7JGNys4gfixOQ-FGeKgSVGeJFEMrrHqjkzMg.JPEG/FB_IMG_1561507597800.jpg?type=w1200" width ="80%"/>
            <h4>{dogs[2].title}</h4>
            <p>{dogs[2].content}</p>
            <p>{dogs[2].price}</p>
          </div> */}
    </div>
  );
};


function Card(props){
  return (
    <div className="col-md-4">
      <img src="https://ilyo.co.kr/contents/article/images/2020/0320/1584669108291841.jpg" width ="80%"/>
      <h4>{props.dogs.title}</h4>
      <p>{props.dogs.content}</p>
      <p>{props.dogs.price}</p>
    </div>
  )
};

function About(){
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}
export default App;
