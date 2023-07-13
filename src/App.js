import React, { useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './App.css';

const App = () => {
  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      console.log('scrolling has started');
    });

    Events.scrollEvent.register('end', () => {
      console.log('scrolling has ended');
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 2
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Section 3
            </Link>
          </li>
        </ul>
      </nav>

      <Element name="section1" className="element">
        <h1>Konsumräume <br/>retten <br/>leben</h1>
      </Element>

      <Element name="section2" className="element">
        <p>Die Zahl der Drogentoten ist im letzten Jahr in München erneut dramatisch angestiegen. Schon lange ist klar: Konsumräume wie sie in anderen Bundesländern bereits bestehen retten leben! 

In Bayern gibt es aktuell keine Konsumräume bisher nicht, obwohl die Stadt diese bereits seit langem fordert. 2010 und 2018 gab es entsprechende Stadtratsbeschlüsse. (https://www.muenchen-transparent.de/antraege/5017665)

Auch andere Kommunen in Bayern haben sich immer wieder für Konsumräume eingesetzt. 

Die nötige Verordnung wurde bei der bayerischen Staatsregierung erbeten. Diese entschied sich aber trotz positiver Erfahrungswerte dagegen. 

wir wollen uns erneut für Drogenkonsumräume in Bayern stark machen und dafür als breites Bündnis eine Petition im bayrischen Landtag einreichen.</p>
      </Element>

      <Element name="section3" className="element">
        <h1>Section 3</h1>
      </Element>

      <button className="scroll-top-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default App;
