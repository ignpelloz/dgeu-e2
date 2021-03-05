// 0. En index.html con links, incluir refs a todos los assets (js y css). Lo habitual es NO tener scripts en el cuerpo (puede usarse para demorar la carga de javascript, de manera que la web cargue rapido y cuando ya se muestre se cargue javascript (botones de compartir aparecen lo más tarde posible... ))

// 1. Aquí todo el código (cuerpo) de la página descargada, usando su div raiz

// 2. Una vez tenga eso sin errores, extraer componentes poco a poco (por ejemplo nav )

//      pensar en estructuras que se repiten en la web original (como por ejemplo las tarjetas de La Tecnologería: estructura con titulo, numero de temporada, texto, 4 enlaces, etc...eso puede ayudar a definir las propiedades de un componente que sea reutilizable)

// 3. A partir de ahí, las hojas de estilo deben incorporarse con jss 

// CENTRARSE en aquello de la web que vaya a refactorizar pq el problema es muy grande. El resto dejarlo integrado en el proyecto en el index.html, es decir, dejar el html original
// Al fin y al cabo la refactorización pretende facilitar el cambio futuro

// Los huecos amarillos del html deben ser anuncios, que en la web normal no veo debido al adblocker?

import olavideLogo from './assets/img/olavide.jpg'
import ualLogo from './assets/img/ual.jpg'
import ucoLogo from './assets/img/uco.jpg'
import ucaLogo from './assets/img/uca-233x300.jpeg'
import ugrLogo from './assets/img/ugr.jpg'
import uhuLogo from './assets/img/uhu.jpg'
import ujaenLogo from './assets/img/ujaen.jpg'
import umaLogo from './assets/img/uma.jpg'
import univaLogo from './assets/img/univa.jpg'
import usevillaLogo from './assets/img/usevilla.jpg'
import Footer from './components/Footer'
import Menu from './components/Menu'
import TopHeader from './components/TopHeader'
import MainNav from './components/MainNav'
import Introduction from './components/Introduction'


function App() {
  return (
    <body className="home page-template-default page page-id-15 wp-embed-responsive global-layout-no-sidebar slider-disabled">

      <div id="page" className="hfeed site">
        <a className="skip-link screen-reader-text" href="https://www.distritounicoandaluz.org/#content">Skip to content</a>		
        <div className="mobile-nav-wrap">
          <a id="mobile-trigger" href="https://www.distritounicoandaluz.org/#mob-menu"><i className="fa fa-bars"></i></a>
          <Menu/>
          <a id="mobile-trigger2" href="https://www.distritounicoandaluz.org/#mob-menu2"><i className="fa fa-bars"></i></a>
          {/*REMOVED 1 FROM HERE*/}
        </div>
        <TopHeader/>
        <header id="masthead" className="site-header" role="banner">
          <div className="container">			    
          <div className="site-branding">
          <div id="site-identity">
            <h1 className="site-title"><a href="https://www.distritounicoandaluz.org/" rel="home">Distrito Unico Andaluz</a></h1>
          </div>
          </div>
          <div id="quick-contact">
          </div>
          <MainNav/>
        </div>
        </header>

        <div id="content" className="site-content">
          <div className="container">
            <div className="inner-wrapper">
              <div id="primary" className="content-area">
                <main id="main" className="site-main" role="main">
                  <article id="post-15" className="post-15 page type-page status-publish hentry">
                    <header className="entry-header">
                      <h1 className="entry-title">Distrito Unico Andaluz</h1>
                    </header>
                    <div className="entry-content-wrapper">
                      <div className="entry-content">
                        <Introduction/>
                        
                        {/* REFACTORING SHOULD START HERE */}

                        <h3>Distrito Unico Andaluz: Universidades</h3>
                        <p>A través de su acceso al <strong>Distrito Unico Andaluz</strong>, las personas
                        pueden elegir todas las opciones académicas que ofrecen los siguientes
                        Establecimientos Universitarios Públicos de la Comunidad:</p>

                        <p>
                          <a href="https://www.ual.es/" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="wp-image-7664 aligncenter" title="Universidad de Almería" src={ualLogo} alt="ual" width="105" height="105" />
                          </a>
                          <strong><a title="Universidad de Almeria" href="https://www.distritounicoandaluz.org/universidad-de-almeria/">UNIVERSIDAD DE ALMERÍA</a>:</strong> Creada
                              por el Parlamento Andaluz en 1993. Es una de las universidades más jóvenes de España. Su oferta académica incluye más&nbsp;de 30 titulaciones, más
                              de 37 programas de doctorado (9 de ellos con mención de calidad), 13 másteres oficiales y 12 másteres propios.
                              </p>

                        <p>
                          <a href="https://www.uca.es/" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="wp-image-7665 aligncenter" title="Universidad de Cádiz" src={ucaLogo} alt="UNIVERSIDAD DE CÁDIZ" width="105" height="105" />
                          </a>
                          <strong><a title="Universidad de Cadiz" href="https://www.distritounicoandaluz.org/universidad-de-cadiz/">UNIVERSIDAD DE CADIZ</a>:</strong>&nbsp;Comenzó
                            sus actividades en octubre de 1979.&nbsp;La oferta actual de estudios abarca un total de 41 titulaciones de Grado, 12 Programas Conjuntos de Estudios
                            Oficiales de Grado (PCEO), 39 Másteres Universitarios y 15 Programas de Doctorado.
                        </p>

                        <p>
                          <a href="https://www.uco.es/" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="wp-image-7666 aligncenter" src={ucoLogo} alt="UNIVERSIDAD DE CÓRDOBA" width="105" height="105" />
                          </a>
                          <strong><a title="Universidad de Cordoba" href="https://www.distritounicoandaluz.org/universidad-de-cordoba/">UNIVERSIDAD DE CÓRDOBA</a>:</strong>&nbsp;fundada
                            como tal en 1972, sus raíces se remontan a la Universidad Libre que funcionó en la provincia a finales del siglo XIX y cuenta con estudios centenarios como los
                            de Veterinaria, únicos en Andalucía.&nbsp;Los estudios de esta universidad van desde las Humanidades y las Ciencias Jurídico-Sociales a las Ciencias de la
                            Salud y las carreras científico-técnicas.
                        </p>

                        <p>
                          <a href="https://www.ugr.es/" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="wp-image-7667 aligncenter" title="Universidad de Granada" src={ugrLogo} alt="Universidad de Granada" width="105" height="105" />
                          </a>
                          <strong><a title="Universidad de Granada" href="https://www.distritounicoandaluz.org/universidad-de-granada/">UNIVERSIDAD DE GRANADA</a>:</strong> Fundada
                            en 1531, es la continuadora de una larga tradición docente que enlaza con la de la Madraza del último Reino Nazarí.&nbsp;Actualmente se imparten
                            75&nbsp;titulaciones&nbsp;en los 28&nbsp;centros docentes&nbsp;de que dispone la Universidad. Por otro lado,&nbsp;su&nbsp;<a title="servicios/ep" href="http://www.ugr.es/pages/servicios/ep">Escuela
                            Internacional de Posgrado</a>&nbsp;ofrece 68 Másteres, 116 Doctorados y 113 cursos complementarios.
                        </p>

                        <p>
                          <a href="http://www.uma.es/" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="wp-image-7669 aligncenter" src={umaLogo} alt="Universidad de Málaga" width="105" height="105" />
                          </a>
                          <strong><a title="Universidad de Malaga" href="https://www.distritounicoandaluz.org/universidad-de-malaga/">UNIVERSIDAD DE MÁLAGA</a>:</strong> Creada
                            oficialmente en agosto de 1972. Su oferta académica comprende 62 Grados, 43 Programas de Doctorado, 55 Másteres, y 39 Títulos Propios de Postgrado (Máster y Experto).
                        </p>

                        <p>
                          <a href="https://www.uhu.es/" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="wp-image-7668 aligncenter" src={uhuLogo} alt="Universidad de Huelva" width="105" height="105" />
                          </a>
                          <strong><a title="Universidad de Huelva" href="https://www.distritounicoandaluz.org/universidad-de-huelva/">UNIVERSIDAD DE HUELVA</a>:&nbsp;</strong>Creada
                            en julio de 1993. Actualmente cuenta con una oferta de 36 titulaciones de Grado, 4 Estudios de Segundo Ciclo, 28 Másteres Oficiales, y 21 Programas de Doctorados.
                        </p>

                        <p>
                          <a href="https://www.us.es/">
                            <img loading="lazy" className="wp-image-7670 aligncenter" src={usevillaLogo} alt="Universidad de Sevilla" width="105" height="105" />
                          </a>
                          <strong><a title="Universidad de Sevilla" href="https://www.distritounicoandaluz.org/universidad-de-sevilla/">UNIVERSIDAD DE SEVILLA</a>: </strong>Fundada 
                          hace más de quinientos años, es la segunda universidad española en número de estudiantes y la primera de Andalucía. Su oferta académica actual ronda 
                          las 66 titulaciones de Grado desde el Primer Curso, 86 Másteres Universitarios, 152 Programas de Doctorado, y 335 Estudios de Postgrado Universitario.
                        </p>

                        <p>
                          <a href="https://www10.ujaen.es/">
                            <img loading="lazy" className="size-full wp-image-7673 aligncenter" src={ujaenLogo} alt="Universidad de Jaén" width="105" height="112" />
                          </a>
                          <strong><a title="Universidad de Jaen" href="https://www.distritounicoandaluz.org/universidad-de-jaen/">UNIVERSIDAD DE JAÉN</a>:&nbsp;</strong>Sus 
                          orígenes&nbsp;se remontan a la creación de la Universidad de Baeza en la Edad Moderna, con un amplio recorrido hasta llegar a 1993 en que inicia su 
                          andadura como institución autónoma.&nbsp;&nbsp;Su oferta académica, “diseñada de acuerdo con las necesidades laborales y profesionales de la 
                          sociedad”, está conformada por más de 50 titulaciones de Grado, Primer y Segundo Ciclo y 22 másteres, algunos de ellos impartidos a través de Internet.
                        </p>

                        <p>
                          <a href="https://www.upo.es/portal/impe/web/portada" target="_blank" rel="noopener noreferrer">
                            <img loading="lazy" className="size-full wp-image-7674 aligncenter" title="Universidad Pablo de Olavide" src={olavideLogo} alt="olavide" width="105" height="131" />
                          </a>
                          <strong><a title="Universidad Pablo de Olavide" href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/">UNIVERSIDAD PABLO DE OLAVIDE</a>:&nbsp;</strong>Ubicada 
                          en Sevilla, esta universidad fue creada en julio de 1997. Su oferta de estudios en la actualidad se distribuye en&nbsp;31 Grados y dobles Grados,&nbsp;40 Másteres 
                          Oficiales,&nbsp;9&nbsp;Programas de Doctorado, y&nbsp;147&nbsp;Títulos Propios.
                        </p>

                        <p>
                          <a href="http://www.unia.es/">
                            <img loading="lazy" className=" wp-image-91 aligncenter" src={univaLogo} alt="univa" width="55" height="58" />
                          </a>
                          <strong>UNIVERSIDAD INTERNACIONAL DE ANDALUCÍA: </strong>Fue creada por Ley de la Comunidad Autónoma de Andalucía en 1994. Las enseñanzas que se imparten en esta 
                          universidad son especializadas y de postgrado e incluyen&nbsp;Programas Oficiales de Postgrado, Doctorados, Títulos Propios (Másteres Universitarios y Cursos de 
                          Experto Universitario), Cursos de Formación Permanente y Cursos de Verano.
                        </p>

                        {/* REFACTORING SHOULD END HERE */}

                        <p>Mas info sobre el <strong>Distrito Unico Andaluz</strong>: <a href="https://www.juntadeandalucia.es/economiainnovacionyciencia/sguit/">https://www.juntadeandalucia.es/economiainnovacionyciencia/sguit/</a>#</p>
                        <div style={{ fontSize: "0px", height: "0px", lineHeight: "0px", margin: "0", padding: "0", clear: "both" }}></div>					</div>
                    </div>
                    <footer className="entry-footer">
                    </footer>
                  </article>
                </main>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
      <a href="https://www.distritounicoandaluz.org/#page" className="scrollup" id="btn-scrollup" style={{ display: "none" }}><i className="fa fa-angle-up"></i></a>
    </body>
  );
}

export default App;
