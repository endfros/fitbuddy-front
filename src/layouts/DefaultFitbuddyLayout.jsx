import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer";

export const DefaultLayout = (props) => {
    return (
      <>
        <Navbar/>
          <main className="bg-gray-900 p-8">
            <div>{props.children}</div>
          </main>
        <Footer/>
      </>
    );
  };