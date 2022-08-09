import logo from './logo.svg';
import './App.css';
import Info from './Component/Info'
import About from './Component/About'
import Interest from './Component/Interest'
import Footer from './Component/Footer'



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App(){
  return (
    <div className = "container">
      <Info/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  )
}
export default App;
