import React, { useEffect } from 'react';
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import styled from 'styled-components';
import './App.css';
import LineChart from  './graph';
import CaptionDiv from './imagetext'
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
              Thema
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
              unterstützer*innen
            </Link>
          </li>
        </ul>
      </nav>

      <Element name="section1" className="element">
        <div className="flex flex-col">
          <div className="basis-1/2 py-0">
          <p className="font-sans text-8xl font-bold">
          Konsumräume
          </p>
          </div>
          <div className="basis-1/2 py-28">
          <p className="font-sans text-8xl font-bold">
          retten leben
        </p>
          </div>
        </div>
      </Element>

      <Element name="section2" className="element">
        <div className="flex flex-row space-x-20 ml-20 mr-20">
          <div className="flex flex-row  basis-1/2 rounded-xl ">
          <div className="flex flex-col">
        <blockquote className="text-lg font-medium">
        <p>
          Die Zahl der Drogentoten ist im letzten Jahr in München erneut dramatisch angestiegen.
          Schon lange ist klar: Konsumräume wie sie in anderen Bundesländern bereits bestehen retten leben!
          <br/>
          <br/>
In Bayern gibt es aktuell keine Konsumräume bisher nicht, obwohl die Stadt diese bereits seit langem fordert.
2010 und 2018 gab es entsprechende <a href="https://www.muenchen-transparent.de/antraege/5017665"> <i>Stadtratsbeschlüsse.</i></a> 
Auch andere Kommunen in Bayern haben sich immer wieder für Konsumräume eingesetzt. 
  </p>
        </blockquote>
       <br/>
       <br/>

  <p className="text-lg font-medium">
      Die nötige Verordnung wurde bei der bayerischen Staatsregierung erbeten.
      Diese entschied sich aber trotz positiver Erfahrungswerte dagegen.
          wir wollen uns erneut für Drogenkonsumräume in Bayern stark machen und dafür als breites Bündnis eine Petition im bayrischen Landtag einreichen.</p></div> 
          </div>

          <div className="flex basis-1/2 h-60 w-60 mt-35  flex-col bg-slate-100 rounded-xl">
            <LineChart className="basis-2/3"/>
            <div className='mt-2 text-xs text-black italic' > Courtesy: www.Statista.com</div>
            <div>
            <button type="button" className=" basis-1/3 px-6 mt-60 py-3.5 w-80 h-50 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300  text-center dark:bg-gray-800 dark:hover:bg-gray-500 dark:focus:ring-white-800">Jetzt unterschrieben!</button>
              </div>
         </div>
        </div>

      </Element>

      <Element name="section3" className="element">
      <div className='flex basis-full h-full justify-center'>
        <div className='flex ustify-center basis-1/3 h-full flex-col mt-5 m-2 w-20'>
          <CaptionDiv source={require('./images/clara.jpeg')} name="Clara Nitsche" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="Stadträtin, Grüne"/>
          <CaptionDiv source={require('./images/kristina.jpg')} name="Dr. med. Kristina Adorjan" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."   title="Fachärztin f. Psychiatrie"/>
        </div>
        <div className='flex ustify-center basis-1/3 h-full flex-col mt-5 m-2 w-20'>       
         <CaptionDiv source={require('./images/barbara.jpeg')} name="Barbara Likus" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="Stadträtin, SPD"/>
        <CaptionDiv source={require('./images/Andrea_Betz_Diakonie.jpeg')} name="Andrea Betz" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="CEO, Diakonie"/>
         </div>
         <div className='flex ustify-center basis-1/3 h-full flex-col mt-5 m-2 w-20'>       
         <CaptionDiv source={require('./images/stefan.jpeg')} name="Stefan Jagel" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="Stadtrat, Die Linke"/>
         <CaptionDiv source={require('./images/matthias-laub.jpg')} name="Matthias Laub" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."   title="Prof. Dr. Matthias Laub, Hochschule Landshut I University of Applied Sciences"/>
         </div>
      </div>
      </Element>

      {/* <Element name="section4" className="lastsection">
        </Element> */}


      <button className="scroll-top-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default App;
