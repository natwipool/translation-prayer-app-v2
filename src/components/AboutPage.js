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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tempus nisl odio, in sollicitudin nunc lacinia et. Sed molestie, nibh
          consectetur pulvinar pulvinar, urna ligula mattis tellus, quis
          molestie orci lectus eget libero. Curabitur ac ex turpis. Curabitur
          ante nunc, semper sed imperdiet quis, vehicula eget eros. Fusce id
          fermentum dolor. Ut gravida mauris enim, non placerat eros blandit
          nec. Nulla malesuada urna ut felis maximus, at luctus lectus
          hendrerit. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Pellentesque ultricies quam quis elit ultricies, ut ultrices
          sapien fermentum.
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
      </div>
    </div>
  </div>
);

export default AboutPage;
