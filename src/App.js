import React, { useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import styled from 'styled-components';
import './App.css';
import { AvatarGroup, Avatar } from 'rsuite';


export const Grid = styled.div``;
export const RowGrid = styled.div`display:flex;`;
export const Col = styled.div`flex: ${(props)=>props.size}`;

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
        <h1>
          Konsumräume
          <br/>
          <br/>
          <br/>
          retten leben

        </h1>

      </Element>

      <Element name="section2" className="element">
      <Grid name="flexsection2">
        <p>Die Zahl der Drogentoten ist im letzten Jahr in München erneut dramatisch angestiegen.
          Schon lange ist klar: Konsumräume wie sie in anderen Bundesländern bereits bestehen retten leben! 
          <br/>
          <br/>
In Bayern gibt es aktuell keine Konsumräume bisher nicht, obwohl die Stadt diese bereits seit langem fordert.
2010 und 2018 gab es entsprechende <a href="https://www.muenchen-transparent.de/antraege/5017665"> <i>Stadtratsbeschlüsse.</i></a> 
Auch andere Kommunen in Bayern haben sich immer wieder für Konsumräume eingesetzt. 
  </p>

  <p>
Die nötige Verordnung wurde bei der bayerischen Staatsregierung erbeten.
Diese entschied sich aber trotz positiver Erfahrungswerte dagegen.
wir wollen uns erneut für Drogenkonsumräume in Bayern stark machen und dafür als breites Bündnis eine Petition im bayrischen Landtag einreichen.</p>
</Grid>

      </Element>

      <Element name="section3" className="element">
      <AvatarGroup spacing={1} size={'l'}>
    <Avatar circle src="https://avatars.githubusercontent.com/u/12592949" alt="@superman66" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/8225666" alt="@SevenOutman" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/15609339" alt="@hiyangguo" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/14308293" alt="@MarvelSQ" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/1203827" alt="@simonguo" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/9625224" alt="@theJian" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/15884443" alt="@LeightonYao" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/10924138" alt="@zmhawk" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/2797600" alt="@posebear1990" />
    <Avatar circle src="https://avatars.githubusercontent.com/u/23637144" alt="@Sleaf" />
  </AvatarGroup>
      </Element>

      <button className="scroll-top-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default App;
