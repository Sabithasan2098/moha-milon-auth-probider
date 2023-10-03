import { useContext } from "react";
import { ProviderContext } from "../../Context/ContextProviders";

 
const Home = () => {
    const  test  = useContext(ProviderContext)
    console.log(test);
    return (
        <div>
            <h1 className="text-3xl  font-extrabold">Emargensy note: <span className="text-2xl font-normal">{test.name}</span></h1>
          
        </div>
    );
};

export default Home;