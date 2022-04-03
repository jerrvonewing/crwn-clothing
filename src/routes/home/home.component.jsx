import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

//Name:     Home
//Type:     Functional Component
//Input:    None
//Output:   <Directory> wrapped in a <Div>
//Purpose:  Pass along the Directory component and the categories array
const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};

export default Home;
