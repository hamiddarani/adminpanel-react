import React from "react";
import {Provider} from "react-redux"
import store from "./redux/store";

import {Routes , Route} from 'react-router-dom';
import AdminLayout from "./pages/AdminLayout";

// Admin Pages
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import AllUsers from "./pages/AllUsers";
import ShowUser from "./pages/ShowUser";
import EditUser from "./pages/EditUser";
import Dashboard from "./pages/Dashboard";
import Payments from "./pages/Payments";
import Config from "./pages/Config";
import Posts from "./pages/Posts";
import AllPosts from "./pages/AllPosts";
import CreatePost from "./pages/CreatePost";
import ShowPost from "./pages/ShowPost";
import EditPost from "./pages/EditPost";

// end of Admin Pages

function App() {
  return (
    <Provider store={store}>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/users" element={<Users />}>
                  <Route path="/" element={<AllUsers />} />
                  <Route path="/create" element={<CreateUser />} />
                  <Route path="/:id" element={<ShowUser />} />
                  <Route path="/:id/edit" element={<EditUser />} />
              </Route>
              <Route path="/posts" element={<Posts />}>
                  <Route path="/" element={<AllPosts />} />
                  <Route path="/create" element={<CreatePost />} />
                  <Route path="/:id" element={<ShowPost />} />
                  <Route path="/:id/edit" element={<EditPost />} />
              </Route>
              <Route path="/payments" element={<Payments />}/>
              <Route path="/configs" element={<Config />}/>
          </Route>
      </Routes>
    </Provider>
  );
}

export default App;
