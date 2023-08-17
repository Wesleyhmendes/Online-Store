import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Layout from '../components/layout/Layout';

function RoutePage() {
  return (
    <Routes>
      <Route path="/" element={ <App /> } />
      <Route index path="/" element={ <Layout /> } />
    </Routes>
  );
}
export default RoutePage;

//   <Route path="/" element={ <Login /> } />
//   <Route element={ <Layout /> }>
//     <Route index path="/search" element={ <Search /> } />
//     <Route path="/album/:id" element={ <Album /> } />
//     <Route path="/favorites" element={ <Favorites /> } />
//     <Route path="/profile" element={ <Profile /> } />
//     <Route path="/profile/edit" element={ <ProfileEdit /> } />
//   </Route>
//   <Route path="*" element={ <NotFound /> } />
// </Routes>;
