import { Footer, Navbar, Welcome } from "./components/index";


const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome />
    </div>
    <Footer/>
  </div>
);

export default App;
