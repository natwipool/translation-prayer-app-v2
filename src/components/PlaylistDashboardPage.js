import React from 'react';
import { Link } from 'react-router-dom';
import PlaylistList from './PlaylistList';

const PlaylistDashboardPage = () => (
  <div>
    <div className="page-header">
      <div className="content-container-body">
        <h2 className="page-header__title">บทสวดมนต์ของฉัน</h2>
        <button className="button">
          <Link to="/create">+ สร้างรายการ</Link>
        </button>
      </div>
    </div>
    
    <PlaylistList />
  </div>
);

export default PlaylistDashboardPage;
