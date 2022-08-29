import{
    Routes, Route
} from 'react-router-dom';
import { Landing } from './landing';
import { Profile } from './myprofile';


const routes = (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/myprofile" element={<Profile/>}/>
    </Routes>
)



export default routes