import './index.css';
import React from 'react';

import image1 from './placeholders/image1.png';
import image2 from './placeholders/image2.png';
import smolim1 from './placeholders/smol_1.png';
import smolim2 from './placeholders/smol 2.png';
import image3 from './placeholders/random1.png';
import image4 from './placeholders/dedic1.png';
import smolim3 from './placeholders/dedidacc.png';
import mid1 from './placeholders/toge.png';
import mid2 from './placeholders/toge1.png';


function Staycation() {
  return (
    <div className="main">
      <section className="hero">
        <div className="concol">
          <div className="rowcon">
            <div className="concol1">
              <p>Staycation Subtitle</p>
              <h1>Secure Payment <br /> Gateway Integration</h1>
              <h3>Hed ut unde omnis iste natus sit volur tatem accus <br /> antium laudan tium totam rem aperiam.</h3>
            </div>
          </div>
          <div className="rowbet">
            <button>
              <h3>PLACEHOLDER</h3></button>
            <div className="col">
              <h3>Reality Features</h3>
              <h3>Quis autem repreh enderit in velit esse nihil <br /> molestiae vel illum dolorem.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="letter">
        <div className="rowcon1">
          <div className="imggr1">
            <img className="big1" src={image1} alt='pic' />
          </div>
          <div className="letterg">
            <p>HJUHBDFBFBAB</p>
            <h1>HFVJHJHDDBNCJDBCHD</h1>
            <h3>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
              illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
              qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
              nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
              iure reprehenderit qu in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</h3>
          </div>
          <div className="imggr2">
            <img className='sm1' src={smolim1} alt='image1' />
            <img className='sm2' src={smolim2} alt='image2' />
            <img className='big2' src={image2} alt='image3' />
          </div>
        </div>
      </section>

      <section className="category">
        <div className="cattitle">
          <h1>MKDLFMMICVRKVR</h1>
          {/* arrow */}
        </div>
        <div className="colbgroup">
          <div className="colbutton">
            <div className="rand">
              <img src={image3} alt="wah" />
              <div className="colb">
                <h4>RANDOM</h4>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>FKLAGM</button>
              </div>
            </div>
            <div className="rand">
              <img src={image3} alt="wah1" />
              <div className="colb">
                <h4>RANDOM</h4>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>FKLAGM</button>
              </div>
            </div>
          </div>
          <div className="colbutton2">
            <div className="rand">
              <img src={image3} alt="wah2" />
              <div className="colb">
                <h4>RANDOM</h4>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>FKLAGM</button>
              </div>
            </div>
            <div className="rand">
              <img src={image3} alt="wah3" />
              <div className="colb">
                <h4>RANDOM</h4>
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>FKLAGM</button>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="dedicat">
        <div className="rowd">
          <div className='dedi'>
            <p>FAFANA</p>
            <h3>NFJNJANIONFV</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className='imggr2'>
            <img className='big4' src={image4} alt="" />
            <img className='sm3' src={smolim3} alt="" />
          </div>
          <div className='colcon2'>
            <ul className="bullet">
              <li>MKDMFCKAMN</li>
              <li>MKDMFCKAMN</li>
              <li>MKDMFCKAMN</li>
              <li>MKDMFCKAMN</li>
              <li>MKDMFCKAMN</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="togetoge">
        <div className="concol">
          <div className="group">
            <img src={mid1} alt="" />
            <h3>NFJNJANIONFV</h3>
            <p>Sed ut unde omnis iste natus sit volur tatem accus antium laudan tium totam rem aperiam eaque ipsa ab
              illo inventore veritatis et architecto vitae dicta sunt explicabo.</p>
            <img src={mid2} alt="" />
          </div>

        </div>
      </section>
    </div>
  );
}

export default Staycation;