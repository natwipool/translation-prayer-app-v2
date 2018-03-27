import React from 'react';

const AboutPage = () => (
  <div>
    <div className="page-header">
      <div className="content-container-body">
        <h2 className="page-header__title">เกี่ยวกับ</h2>
      </div>
    </div>
    <div className="content-container-body">
      <img className="cover-image" src="/images/about.jpg" />
      <div className="text-container">
        <h4>ขอขอบคุณ</h4>
        <p>
          ข้อมูลและไฟล์เสียงบทสวดมนต์จาก{' '}
          <a href="https://http://wimutti.org/" title="wimutti">
            เว็บไซต์ wimutti.org
          </a>
        </p>
        <p>
          Icons made by{' '}
          <a
            href="https://www.flaticon.com/authors/zlatko-najdenovski"
            title="Zlatko Najdenovski"
          >
            Zlatko Najdenovski
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>{' '}
          is licensed by{' '}
          <a
            href="http://creativecommons.org/licenses/by/3.0/"
            title="Creative Commons BY 3.0"
            target="_blank"
          >
            CC 3.0 BY
          </a>
        </p>
        <br />
        <h4>ติดต่อสอบถามได้ที่</h4>
        <p>
          Facebook Page <a href="https://web.facebook.com/สวดมนต์-2068899220053295/">สวดมนต์</a>
        </p>
        <p>
          Email <a href="mailto:natwipool@gmail.com">natwipool@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
