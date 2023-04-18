import { Stack } from "react-bootstrap";
import Navigator from "./Components/Nav"; 
import Images from "./Components/Images"
// import ThemeProvider from 'react-bootstrap/ThemeProvider'
// import Navigator1 from "./Components/Nav2";
const App=()=>{
  return (
    <Stack gap={4}>
    <Navigator />
    <Images/>
    </Stack>
  );
}

export default App;
