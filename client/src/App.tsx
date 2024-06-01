import { Footer, Navbar, Services, Welcome } from "./components/index";


const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar/>
      <Welcome />
    </div>
    <Services />
    <Footer/>
  </div>
);

export default App;
