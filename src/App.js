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
        <div className="background">
          <div className="basis-1/2 py-12">
          <h1 className=" py-20 font-sans text-6xl md:text-8xl  font-bold">
          Konsumräume
          </h1>
          </div>
          <div className="basis-1/2 py-20 md:py-28">
          <h1 className="font-sans text-6xl md:text-8xl font-bold">
          retten leben
        </h1>
          </div>
        </div>
      </Element>

      <Element name="section2" className="element">
        <div className=" mt-5 md:flex md:flex-row md:h-full justify-center items-center">
          <div className="block md:flex-row md:h-full basis-1/2 rounded-xl">
          <div className="flex flex-col md:mt-20">
            <p className="text-sm md:text-lg md:font-medium justify-center items-center md:mt-10">
            Die Zahl der Drogentoten ist im letzten Jahr in München erneut dramatisch angestiegen.
            Schon lange ist klar: Konsumräume wie sie in anderen Bundesländern bereits bestehen retten leben!
           <br/>
            <br/>
            In Bayern gibt es aktuell keine Konsumräume bisher nicht, obwohl die Stadt diese bereits seit langem fordert.
            2010 und 2018 gab es entsprechende <a href="https://www.muenchen-transparent.de/antraege/5017665"> <i>Stadtratsbeschlüsse.</i></a> 
            Auch andere Kommunen in Bayern haben sich immer wieder für Konsumräume eingesetzt. 
            </p>
            <br/>

            <p className="text-sm md:text-lg font-medium">
            Die nötige Verordnung wurde bei der bayerischen Staatsregierung erbeten.
            Diese entschied sich aber trotz positiver Erfahrungswerte dagegen.
            wir wollen uns erneut für Drogenkonsumräume in Bayern stark machen und dafür als breites Bündnis eine Petition im bayrischen Landtag einreichen.
            </p>
          </div> 
          </div>

          <div className=" mt-5 md:flex md:basis-1/2 md:px-5 md:flex-col md:h-full md:justify-center md:items-center rounded-xl">
            <div className ='h-60 md:w-full md:h-96 bg-slate-50 rounded-xl'>
            <LineChart className=" h-60 md:h-full md:w-full"/>
            </div>
            <div className='text-xs text-black italic' > Courtesy: www.Statista.com</div>
            <button type="button" className="w-80 h-20 mt-2 md:mt-10 md:justify-center md:w-80 md:h-50 text-base font-medium text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300  text-center dark:bg-gray-800 dark:hover:bg-gray-500 dark:focus:ring-white-800"> Zur Petition <br/> Jetzt unterschreiben!</button>
         </div>
        </div>

      </Element>

      <Element name="section3" className="element">
      <div className='md:flex md:basis-full h-full  justify-cent'>
        <div className='md:flex justify-center md:basis-1/3 md:h-full flex-col mt-5 w-full'>
          <CaptionDiv className='caption' source={require('./images/clara.jpeg')} name="Clara Nitsche" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="Stadträtin, Grüne"/>
          <CaptionDiv className='caption' source={require('./images/katrin.jpg')} name="Katrin Bahr" text=" Drug Checking und Drogenkonsumräume sind wichtige Schritte, um die Leben vieler Menschen zu retten. Drogenkonsumräume wirken gesamtgesellschaftlich sichernd und problemlösend. Deswegen hören wir nicht auf, Drogenkonsumräume hier in Bayern zu fordern! Denn alle Menschen haben ein Recht auf ein würdiges Leben."   title="Geschäftsführende Vorständin Condrobs"/>
        </div>
        <div className='md:flex justify-center md:basis-1/3 md:h-full flex-col mt-5 w-full'>
         <CaptionDiv source={require('./images/barbara.jpeg')} name="Barbara Likus" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="Stadträtin, SPD"/>
        <CaptionDiv source={require('./images/tobias.jpeg')} name="Dr. Tobias " text="Drogenkonsumräume helfen nicht nur dabei, das Gesundheitssystem zu entlasten und die Zahl der Drogentoten zu reduzieren. Auch die Übertragung von Hepatitis B und C oder auch HIV kann durch einen überwachten Konsum mit sauberen Spritzen verhindert werden."  title="Geschäftsführer, Münchner aids-hilfe"/>
         </div>
         <div className='md:flex justify-center md:basis-1/3 md:h-full flex-col mt-5 w-full'>
         <CaptionDiv source={require('./images/stefan.jpeg')} name="Stefan Jagel" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="Stadtrat, Die Linke"/>
         <CaptionDiv source={require('./images/matthias-laub.jpg')} name="Matthias Laub" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."   title="Prof. Dr. Matthias Laub, Hochschule Landshut"/>
         </div>
      </div>
      </Element>

        <Element name="section4" className="element">
        <div className='md:flex basis-full h-full justify-center'>
        <div className='md:flex justify-center md:basis-1/3 md:h-full flex-col mt-5 w-full'>
          <CaptionDiv source={require('./images/Renate.jpg')} name="Dr. Renate Demharter" text="In Drogenkonsumräumen kann durch geschulte Laien (z.B.  Streetworker) bei Intoxikationen z.B. mit nasalem Antidot schneller geholfen werden, als der Rettungsdienst ankommen kann!"  title="FÄ für Notfallmedizin, ÄKV Augsburg"/>
          <CaptionDiv source={require('./images/Beatrix.jpeg')} name="Beatrix Zurek" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."   title="Gesundheitsreferentin, LHM"/>
        </div>
        <div className='md:flex justify-center md:basis-1/3 md:h-full flex-col mt-5 w-full'>
         <CaptionDiv source={require('./images/Hanna.jpeg')} name="Hanna Sammüller Gradl" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="Kreisverwaltungsreferentin LHM"/>
        <CaptionDiv source={require('./images/Andrea_Betz_Diakonie.jpeg')} name="Andrea Betz" text="Drogenabhängige Menschen gelten als Menschen mit Behinderungen. Auch für sie gilt die UN-Behindertenrechtskonvention, die ein Recht auf Teilhabe, Unversehrtheit und Diskriminierungsfreiheit zusichert. Drogenkonsumräume sind daher menschenrechtlich geboten."  title="CEO, Diakonie"/>
         </div>
         <div className='flex ustify-center basis-1/3 h-full flex-col mt-5 w-20'>  
         </div>
      </div>
        </Element>

        <Element>
        <p className='text-white'>
          <div className='text-2xl text-cyan-400 mb-5'>  Weitere Unterstützer*innen </div>
                  Arabackyj	Claudia	
            <p className='ititle text-sm'>SPD Stadträtin in Nürnberg, Stellvertretende Fraktionsvorsitzende</p> 	
	                 Bahr	Katrin 
                <p className='ititle text-sm'> Geschäftsführerin Condrobs </p>																							
	              Betz	Andrea	
                <p className='ititle text-sm'>  Vorstand Diakonie München und Oberbayern </p>																					
	                Bonigut	Matthias	
                  <p className='ititle text-sm'> Notfallsanitäter	</p>																			
                  Dr. med.	Briesenick	Claus	
                  <p className='ititle text-sm'>Nervenarzt und Suchtmediziner</p>																					
                    Dr. med. 	Demharter	Renate	
                    <p className='ititle text-sm'> Ärztlicher Kreisverband Augsburg, Notärztin</p>																			
	                Dietl 	Verena	
              <p className='ititle text-sm'> 3. Bürgermeisterin Landeshauptstadt München </p>		
                  Friemelt	Peter	
                  <p className='ititle text-sm'>  Geschäftsführer Gesundheitsladen München	</p>																		
                          Dr. med.	Gerstenkorn	Hannah	
                          <p className='ititle text-sm'> Ärztin	</p>
	                        Gohlke	Nicole	
                      <p className='ititle text-sm'> MdB stellv. Fraktionsvorsitzende im Bundestag DIE LINKE </p>																			
	                    Gorgas	Birgit	
                      <p className='ititle text-sm'> Psychologische Psychotherapeutin	</p>																						
	                    Gürpinar	Ates	
                      <p className='ititle text-sm'> MdB, Sprecher für Drogenpolitik DIE LINKE.</p>																			
	                  Häuslmann	Michael 	
                    <p className='ititle text-sm'>Münchner Aids-Hilfe e.V. </p>
	                      Heinze	Phillip	
                        <p className='ititle text-sm'>Arbeitskreis kritische Soziale Arbeit </p>
	                    Hermann 	Susanne
                      <p className='ititle text-sm'> Stadtdirektorin Gesundheitsreferat München </p>
	                        Hintermayr	Frederik	
                        <p className='ititle text-sm'>  Stadtrat und Bezirksrat Augsburg, Krankepfleger </p>

                    Dr. med.	Hinzmann	Dominik	
                    <p className='ititle text-sm'> Facharzt für Anästhesiologie, Notfall- und Intensivmedizin </p>																							
	                  Jagel 	Stefan 	
                    <p className='ititle text-sm'> Stadtrat, Fraktionsvorsitzender Die Linke München </p>																					
                    Dr. med. 	Kastenbauer	Uli	
                    <p className='ititle text-sm'>  HIV-Schwerpunktpraxis Schwabing </p>																						
	                    Likus 	Barbara	Stadträtin 
                      <p className='ititle text-sm'> SPD Volt		</p>

	                  Majewski	Karin	
                    <p className='ititle text-sm'> Geschäftsführung Paritätischer Wohlfahrtsverband, Bezirksverband Oberbayern</p>																			
                  Dr. med. 	Meurer	Anja	
                  <p className='ititle text-sm'>Fachärztin für Innere Medizin und Infektiologie </p>																					
	              Muderlak	Astrid	
                <p className='ititle text-sm'> Vorsitzende Arbeitsgemeinschaft der Sozialdemokratinnen und Sozialdemokraten im Gesundheitswesen	</p>																						
	                Niederbühl 	Thomas 	
                  <p className='ititle text-sm'> Stadtrat Rosa Liste München 	</p>
	                  Nitsche	Clara	
                    <p className='ititle text-sm'>  Stadträtin München, stellvertretende Fraktionsvorsitzende	</p>	

                Dr.	Oliveira Weismantel	Tobias	
                <p className='ititle text-sm'> Geschäftsführer Münchner Aids-Hilfe e.V </p>																					
              Dr. 	Plaß	Michael
              <p className='ititle text-sm'> Pädagoge M.A, Chemsex-Beratung SUB </p>																	
          Dr. med. Priv.- Doz. Adorjan	Christina	
          <p className='ititle text-sm'>Fachärztin für Psychiatrie und Psychotherapie, LMU </p>

        Prof. Dr.	Laub	Matthias
        <p className='ititle text-sm'>Professor für Wissenschaft Soziale Arbeit und Sozialarbeitsforschung Hochschule Landshut </p>
        
        Dr. med. Bogner-Flatz	Victoria	
        <p className='ititle text-sm'> Fachärztin für Unfallchirurgie und Orthopäde Notfallmedizin - Klinische Akut und Notfallmedizin</p>																						
	      Rauscher	Peter	
        <p className='ititle text-sm'> Fraktionsvorsitzender Grüne Augsburg</p> 																							
        Dr. Sammüller-Gradl Hanna	
        <p className='ititle text-sm'>  Kreisverwaltungsreferentin Landeshauptstadt München </p>																				
	      Sauer	Anja	
        <p className='ititle text-sm'> Aktion Brücke ev	</p>																						
	        Scheuermann	Jörn M.	
          <p className='ititle text-sm'> Geschäftsführung Arbeitsgemeinschaft Wohnungsnotfallhilfe München und Oberbayern  </p>																							
	        Schiwy 	Dorothee	
          <p className='ititle text-sm'> Sozialreferentin Landeshauptstadt München</p>																			
	        Sterzer	Julia
          <p className='ititle text-sm'> Geschäftsführerin AWO München-Stadt	 </p>																						
	          Weishaupt	Saskia	
            <p className='ititle text-sm'> Mitglied des Gesundheitsausschuss im Bundestag	 </p>
            Wickenhäuser-Egger Kathrin
            <p className='ititle text-sm'> Verein südliches Bahnhofsviertel München </p>													
	        Zurek	Beatrix	
          <p className='ititle text-sm'>  Gesundheitsreferentin der Landeshauptstadt München, Vorsitzende Mieterverein </p>																						
	      Pflaum	Johannes 	
        <p className='ititle text-sm'>  Geschäftsführung Aktiv für interkulturellen Austausch e.V. </p>																							
        Prof. Dr.	Mylonas	Basilios	
        <p className='ititle text-sm'> Sozialwissenschaftler und ehemaliger Streetworker </p>
        Schüller	Titus 	
        <p className='ititle text-sm'>Stadtrat in Nürnberg DIE LINKE. und weiterer stellvertretender Bezirkstagspräsident in Mittelfranken </p>																					
      Dr.	Anker	Ingrid 	
      <p className='ititle text-sm'> extra e.V.</p>																					
	      Ehrt	Bettina	
        <p className='ititle text-sm'>  extra e.V.</p>																					
	      Hügenell	Helga 	
        <p className='ititle text-sm'>extra e.V. </p>																				
      </p>

        </Element>


      <button className="scroll-top-button" onClick={scrollToTop}>
        Scroll to Top
      </button>
    </div>
  );
};

export default App;
