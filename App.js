import React from 'react';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import BookmarkManager from './BookmarkManager';
import Calendar from './Calendar';
import FacultySearch from './FacultySearch';

function App() {
  return (
    <div className="App">
      <HomePage />
      <UserProfile />
      <BookmarkManager />
      <Calendar />
      <FacultySearch />
    </div>
  );
}

export default App;
