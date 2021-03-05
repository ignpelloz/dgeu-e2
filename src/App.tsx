// 0. En index.html con links, incluir refs a todos los assets (js y css). Lo habitual es NO tener scripts en el cuerpo (puede usarse para demorar la carga de javascript, de manera que la web cargue rapido y cuando ya se muestre se cargue javascript (botones de compartir aparecen lo más tarde posible... ))

// 1. Aquí todo el código (cuerpo) de la página descargada, usando su div raiz

// 2. Una vez tenga eso sin errores, extraer componentes poco a poco (por ejemplo nav )

//      pensar en estructuras que se repiten en la web original (como por ejemplo las tarjetas de La Tecnologería: estructura con titulo, numero de temporada, texto, 4 enlaces, etc...eso puede ayudar a definir las propiedades de un componente que sea reutilizable)

// 3. A partir de ahí, las hojas de estilo deben incorporarse con jss 

// CENTRARSE en aquello de la web que vaya a refactorizar pq el problema es muy grande. El resto dejarlo integrado en el proyecto en el index.html, es decir, dejar el html original
// Al fin y al cabo la refactorización pretende facilitar el cambio futuro

// Los huecos amarillos del html deben ser anuncios, que en la web normal no veo debido al adblocker?

import duaLogo from './assets/img/upa-300x276.jpg'
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


function App() {
  return (
    <body className="home page-template-default page page-id-15 wp-embed-responsive global-layout-no-sidebar slider-disabled">

      <div id="page" className="hfeed site">
        <a className="skip-link screen-reader-text" href="https://www.distritounicoandaluz.org/#content">Skip to content</a>		<div className="mobile-nav-wrap">
          <a id="mobile-trigger" href="https://www.distritounicoandaluz.org/#mob-menu"><i className="fa fa-bars"></i></a>
          
          <div id="mob-menu">
            <ul id="menu-universidades" className="menu"><li id="menu-item-146" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-146"><a title="UAL" href="https://www.distritounicoandaluz.org/universidad-de-almeria/">UAL</a>
              <ul className="sub-menu">
                <li id="menu-item-433" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-433"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ciencias-ambientales-en-universidad-de-almeria/">Ciencias Ambientales</a></li>
                <li id="menu-item-428" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-428"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-educacion-infantil-en-universidad-de-almeria/">Educación Infantil</a></li>
                <li id="menu-item-432" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-432"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-agricola-en-universidad-de-almeria/">Ingeniería Agrícola</a></li>
                <li id="menu-item-431" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-431"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-electronica-industrial-en-universidad-de-almeria/">Ingeniería Electrónica</a></li>
                <li id="menu-item-430" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-430"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-informatica-en-universidad-de-almeria/">Ingeniería Informática</a></li>
                <li id="menu-item-429" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-429"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-mecanica-en-universidad-de-almeria/">Ingeniería Mecánica</a></li>
                <li id="menu-item-427" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-427"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-quimica-industrial-en-universidad-de-almeria/">Ingeniería Química Industrial</a></li>
                <li id="menu-item-426" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-426"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-matematicas-en-universidad-de-almeria/">Matemáticas</a></li>
                <li id="menu-item-425" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-quimica-en-universidad-de-almeria/">Química</a></li>
              </ul>
            </li>
              <li id="menu-item-145" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-145"><a title="UCA" href="https://www.distritounicoandaluz.org/universidad-de-cadiz/">UCA</a>
                <ul className="sub-menu">
                  <li id="menu-item-467" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-467"><a href="https://www.distritounicoandaluz.org/universidad-de-cadiz/grado-en-administracion-y-direccion-de-empresas-en-universidad-de-cadiz/">Administración y Dirección de Empresas</a></li>
                  <li id="menu-item-539" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-539"><a href="https://www.distritounicoandaluz.org/universidad-de-cadiz/grado-en-arquitectura-naval-e-ingenieria-maritima-en-universidad-de-cadiz/">Arquitectura Naval e Ingeniería Marítima</a></li>
                  <li id="menu-item-538" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-538"><a href="https://www.distritounicoandaluz.org/universidad-de-cadiz/grado-en-biotecnologia-en-universidad-de-cadiz/">Biotecnología</a></li>
                  <li id="menu-item-730" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-730"><a href="https://www.distritounicoandaluz.org/universidad-de-cadiz/grado-en-educacion-infantil-en-la-universidad-de-cadiz/">Educación Infantil</a></li>
                </ul>
              </li>
              <li id="menu-item-222" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-222"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/">UCO</a>
                <ul className="sub-menu">
                  <li id="menu-item-581" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-581"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-administracion-y-direccion-de-empresas-en-la-universidad-de-cordoba/">Administración y Dirección de Empresas</a></li>
                  <li id="menu-item-791" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-791"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-ciencias-ambientales-en-la-universidad-de-cordoba/">Ciencias Ambientales</a></li>
                  <li id="menu-item-466" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-466"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-medicina-en-la-universidad-de-cordoba/">Medicina</a></li>
                  <li id="menu-item-580" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-580"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-relaciones-laborales-y-recursos-humanos-en-la-universidad-de-cordoba/">Relaciones Laborales y RRHH</a></li>
                  <li id="menu-item-792" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-792"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-veterinaria-en-la-universidad-de-cordoba/">Veterinaria</a></li>
                </ul>
              </li>
              <li id="menu-item-204" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-204"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/">UGR</a>
                <ul className="sub-menu">
                  <li id="menu-item-724" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-724"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-administracion-y-direccion-de-empresas-en-universidad-de-granada/">Administración y Dirección de Empresas</a></li>
                  <li id="menu-item-480" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-480"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-bellas-artes-en-la-universidad-de-granada/">Bellas Artes</a></li>
                  <li id="menu-item-560" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-560"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-biologia-en-la-universidad-de-granada/">Biología</a></li>
                  <li id="menu-item-726" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-726"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-ciencias-politicas-y-de-la-administracion-en-universidad-de-granada/">Ciencias Políticas y de la Administración</a></li>
                  <li id="menu-item-723" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-723"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-educacion-infantil-en-la-universidad-de-granada/">Educación Infantil</a></li>
                  <li id="menu-item-725" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-725"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-relaciones-laborales-y-recursos-humanos-en-universidad-de-granada/">Relaciones Laborales y Recursos Humanos</a></li>
                </ul>
              </li>
              <li id="menu-item-261" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-261"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/">UJAEN</a>
                <ul className="sub-menu">
                  <li id="menu-item-637" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-637"><a title="Grado en Biología en Universidad de Jaén" href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-biologia-en-universidad-de-jaen/">Biología</a></li>
                  <li id="menu-item-501" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-501"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-derecho-en-universidad-de-jaen/">Derecho</a></li>
                  <li id="menu-item-559" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-559"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-educacion-infantil-en-la-universidad-de-jaen/">Educación Infantil</a></li>
                  <li id="menu-item-795" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-795"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-enfermeria-en-la-universidad-de-jaen/">Enfermería</a></li>
                  <li id="menu-item-636" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-636"><a title="Grado en Ingeniería Civil en Universidad de Jaén" href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-ingenieria-civil-en-universidad-de-jaen/">Ingeniería Civil</a></li>
                  <li id="menu-item-796" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-796"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-ingenieria-de-organizacion-industrial-en-la-universidad-de-jaen/">Ingeniería de Organización Industrial</a></li>
                  <li id="menu-item-794" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-794"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-trabajo-social-en-la-universidad-de-jaen/">Trabajo Social</a></li>
                </ul>
              </li>
              <li id="menu-item-243" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-243"><a href="https://www.distritounicoandaluz.org/universidad-de-huelva/">UHU</a>
                <ul className="sub-menu">
                  <li id="menu-item-500" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a href="https://www.distritounicoandaluz.org/universidad-de-huelva/grado-en-ciencias-ambientales-en-universidad-de-huelva/">Ciencias Ambientales</a></li>
                  <li id="menu-item-793" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-793"><a href="https://www.distritounicoandaluz.org/universidad-de-huelva/grado-en-finanzas-y-contabilidad-en-la-universidad-de-huelva/">Finanzas y Contabilidad</a></li>
                  <li id="menu-item-595" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-595"><a title="Grado en Historia en la Universidad de Huelva" href="https://www.distritounicoandaluz.org/universidad-de-huelva/grado-en-historia-en-la-universidad-de-huelva/">Historia</a></li>
                  <li id="menu-item-594" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-594"><a title="Grado en Psicología en la Universidad de Huelva" href="https://www.distritounicoandaluz.org/universidad-de-huelva/grado-en-psicologia-en-la-universidad-de-huelva/">Psicología</a></li>
                </ul>
              </li>
              <li id="menu-item-357" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-357"><a title="Universidad de Malaga" href="https://www.distritounicoandaluz.org/universidad-de-malaga/">UMA</a>
                <ul className="sub-menu">
                  <li id="menu-item-727" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-727"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-administracion-y-direccion-de-empresas-en-universidad-de-malaga/">Administración y Dirección de Empresas</a></li>
                  <li id="menu-item-797" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-797"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-bellas-artes-en-la-universidad-de-malaga/">Bellas Artes</a></li>
                  <li id="menu-item-728" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-728"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-educacion-social-en-la-universidad-de-malaga/">Educación Social</a></li>
                  <li id="menu-item-479" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-479"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-periodismo-en-la-universidad-de-malaga/">Periodismo</a></li>
                  <li id="menu-item-623" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-matematicas-en-la-universidad-de-malaga/">Matemáticas</a></li>
                </ul>
              </li>
              <li id="menu-item-265" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-265"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/">UPO</a>
                <ul className="sub-menu">
                  <li id="menu-item-722" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-722"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/grado-en-administracion-y-direccion-de-empresas-en-la-universidad-pablo-de-olavide/">Administración y Dirección de Empresas</a></li>
                  <li id="menu-item-720" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-720"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/grado-en-biotecnologia-en-universidad-pablo-de-olavide/">Biotecnología</a></li>
                  <li id="menu-item-721" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-721"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/grado-en-humanidades-en-la-universidad-pablo-de-olavide/">Humanidades</a></li>
                  <li id="menu-item-512" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-512"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/grado-en-sociologia-en-la-universidad-pablo-de-olavide/">Sociología</a></li>
                </ul>
              </li>
              <li id="menu-item-318" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-318"><a title="Universidad de Sevilla" href="https://www.distritounicoandaluz.org/universidad-de-sevilla/">US</a>
                <ul className="sub-menu">
                  <li id="menu-item-621" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-621"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-antropologia-social-y-cultural-en-la-universidad-de-sevilla/">Antropología</a></li>
                  <li id="menu-item-620" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-620"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-fundamentos-de-arquitectura-en-la-universidad-de-sevilla/">Arquitectura</a></li>
                  <li id="menu-item-622" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-622"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-criminologia-en-la-universidad-de-sevilla/">Criminología</a></li>
                  <li id="menu-item-513" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-513"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-ingenieria-aeroespacial-en-la-universidad-de-sevilla/">Ingeniería Aeroespacial</a></li>
                  <li id="menu-item-729" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-729"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-ingenieria-electronica-industrial-en-universidad-de-sevilla/">Ingeniería Electrónica Industrial</a></li>
                </ul>
              </li>
            </ul>		
          </div>
          <a id="mobile-trigger2" href="https://www.distritounicoandaluz.org/#mob-menu2"><i className="fa fa-bars"></i></a>
          
          {/*REMOVED 1 FROM HERE*/}


        </div>

        <div id="tophead">
          <div className="container">


            <div id="top-nav">
              <nav className="top-navigation"><ul id="menu-unico-1" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-15 current_page_item menu-item-30"><a title="Home page" href="https://www.distritounicoandaluz.org/" aria-current="page">Principal</a></li>
                <li className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-910"><a href="https://www.distritounicoandaluz.org/category/noticias/">Noticias</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-29"><a title="Preinscripción en el distrito único andaluz" href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-preinscripcion/">Preinscripción</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-38"><a title="Selectividad en el distrito unico andaluz" href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-selectividad/">Selectividad</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-48"><a href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-automatricula/">Automatrícula</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-84"><a href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-examenes/">Examenes</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"><a href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-becas/">Becas</a></li>
                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-57"><a href="https://www.distritounicoandaluz.org/distrito-unico-andaluz-master/">Máster</a></li>
              </ul></nav>				
              
            </div>

          </div>
        </div>


        <header id="masthead" className="site-header" role="banner"><div className="container">			    <div className="site-branding">


          <div id="site-identity">
            <h1 className="site-title"><a href="https://www.distritounicoandaluz.org/" rel="home">Distrito Unico Andaluz</a></h1>
          </div>
        </div>
          <div id="quick-contact">
          </div>

          <div id="main-nav">
            <nav id="site-navigation" className="main-navigation" role="navigation">
              <div className="wrap-menu-content">
                <div className="menu-universidades-container"><ul id="primary-menu" className="menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-146"><a title="UAL" href="https://www.distritounicoandaluz.org/universidad-de-almeria/">UAL</a>
                  <ul className="sub-menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-433"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ciencias-ambientales-en-universidad-de-almeria/">Ciencias Ambientales</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-428"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-educacion-infantil-en-universidad-de-almeria/">Educación Infantil</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-432"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-agricola-en-universidad-de-almeria/">Ingeniería Agrícola</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-431"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-electronica-industrial-en-universidad-de-almeria/">Ingeniería Electrónica</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-430"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-informatica-en-universidad-de-almeria/">Ingeniería Informática</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-429"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-mecanica-en-universidad-de-almeria/">Ingeniería Mecánica</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-427"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-ingenieria-quimica-industrial-en-universidad-de-almeria/">Ingeniería Química Industrial</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-426"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-matematicas-en-universidad-de-almeria/">Matemáticas</a></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-425"><a href="https://www.distritounicoandaluz.org/universidad-de-almeria/grado-en-quimica-en-universidad-de-almeria/">Química</a></li>
                  </ul>
                </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-145"><a title="UCA" href="https://www.distritounicoandaluz.org/universidad-de-cadiz/">UCA</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-467"><a href="https://www.distritounicoandaluz.org/universidad-de-cadiz/grado-en-administracion-y-direccion-de-empresas-en-universidad-de-cadiz/">Administración y Dirección de Empresas</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-539"><a href="https://www.distritounicoandaluz.org/universidad-de-cadiz/grado-en-arquitectura-naval-e-ingenieria-maritima-en-universidad-de-cadiz/">Arquitectura Naval e Ingeniería Marítima</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-538"><a href="https://www.distritounicoandaluz.org/universidad-de-cadiz/grado-en-biotecnologia-en-universidad-de-cadiz/">Biotecnología</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-730"><a href="https://www.distritounicoandaluz.org/universidad-de-cadiz/grado-en-educacion-infantil-en-la-universidad-de-cadiz/">Educación Infantil</a></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-222"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/">UCO</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-581"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-administracion-y-direccion-de-empresas-en-la-universidad-de-cordoba/">Administración y Dirección de Empresas</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-791"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-ciencias-ambientales-en-la-universidad-de-cordoba/">Ciencias Ambientales</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-466"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-medicina-en-la-universidad-de-cordoba/">Medicina</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-580"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-relaciones-laborales-y-recursos-humanos-en-la-universidad-de-cordoba/">Relaciones Laborales y RRHH</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-792"><a href="https://www.distritounicoandaluz.org/universidad-de-cordoba/grado-en-veterinaria-en-la-universidad-de-cordoba/">Veterinaria</a></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-204"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/">UGR</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-724"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-administracion-y-direccion-de-empresas-en-universidad-de-granada/">Administración y Dirección de Empresas</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-480"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-bellas-artes-en-la-universidad-de-granada/">Bellas Artes</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-560"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-biologia-en-la-universidad-de-granada/">Biología</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-726"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-ciencias-politicas-y-de-la-administracion-en-universidad-de-granada/">Ciencias Políticas y de la Administración</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-723"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-educacion-infantil-en-la-universidad-de-granada/">Educación Infantil</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-725"><a href="https://www.distritounicoandaluz.org/universidad-de-granada/grado-en-relaciones-laborales-y-recursos-humanos-en-universidad-de-granada/">Relaciones Laborales y Recursos Humanos</a></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-261"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/">UJAEN</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-637"><a title="Grado en Biología en Universidad de Jaén" href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-biologia-en-universidad-de-jaen/">Biología</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-501"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-derecho-en-universidad-de-jaen/">Derecho</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-559"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-educacion-infantil-en-la-universidad-de-jaen/">Educación Infantil</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-795"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-enfermeria-en-la-universidad-de-jaen/">Enfermería</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-636"><a title="Grado en Ingeniería Civil en Universidad de Jaén" href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-ingenieria-civil-en-universidad-de-jaen/">Ingeniería Civil</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-796"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-ingenieria-de-organizacion-industrial-en-la-universidad-de-jaen/">Ingeniería de Organización Industrial</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-794"><a href="https://www.distritounicoandaluz.org/universidad-de-jaen/grado-en-trabajo-social-en-la-universidad-de-jaen/">Trabajo Social</a></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-243"><a href="https://www.distritounicoandaluz.org/universidad-de-huelva/">UHU</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-500"><a href="https://www.distritounicoandaluz.org/universidad-de-huelva/grado-en-ciencias-ambientales-en-universidad-de-huelva/">Ciencias Ambientales</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-793"><a href="https://www.distritounicoandaluz.org/universidad-de-huelva/grado-en-finanzas-y-contabilidad-en-la-universidad-de-huelva/">Finanzas y Contabilidad</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-595"><a title="Grado en Historia en la Universidad de Huelva" href="https://www.distritounicoandaluz.org/universidad-de-huelva/grado-en-historia-en-la-universidad-de-huelva/">Historia</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-594"><a title="Grado en Psicología en la Universidad de Huelva" href="https://www.distritounicoandaluz.org/universidad-de-huelva/grado-en-psicologia-en-la-universidad-de-huelva/">Psicología</a></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-357"><a title="Universidad de Malaga" href="https://www.distritounicoandaluz.org/universidad-de-malaga/">UMA</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-727"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-administracion-y-direccion-de-empresas-en-universidad-de-malaga/">Administración y Dirección de Empresas</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-797"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-bellas-artes-en-la-universidad-de-malaga/">Bellas Artes</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-728"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-educacion-social-en-la-universidad-de-malaga/">Educación Social</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-479"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-periodismo-en-la-universidad-de-malaga/">Periodismo</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-623"><a href="https://www.distritounicoandaluz.org/universidad-de-malaga/grado-en-matematicas-en-la-universidad-de-malaga/">Matemáticas</a></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-265"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/">UPO</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-722"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/grado-en-administracion-y-direccion-de-empresas-en-la-universidad-pablo-de-olavide/">Administración y Dirección de Empresas</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-720"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/grado-en-biotecnologia-en-universidad-pablo-de-olavide/">Biotecnología</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-721"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/grado-en-humanidades-en-la-universidad-pablo-de-olavide/">Humanidades</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-512"><a href="https://www.distritounicoandaluz.org/universidad-pablo-de-olavide/grado-en-sociologia-en-la-universidad-pablo-de-olavide/">Sociología</a></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-318"><a title="Universidad de Sevilla" href="https://www.distritounicoandaluz.org/universidad-de-sevilla/">US</a>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-621"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-antropologia-social-y-cultural-en-la-universidad-de-sevilla/">Antropología</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-620"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-fundamentos-de-arquitectura-en-la-universidad-de-sevilla/">Arquitectura</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-622"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-criminologia-en-la-universidad-de-sevilla/">Criminología</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-513"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-ingenieria-aeroespacial-en-la-universidad-de-sevilla/">Ingeniería Aeroespacial</a></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-729"><a href="https://www.distritounicoandaluz.org/universidad-de-sevilla/grado-en-ingenieria-electronica-industrial-en-universidad-de-sevilla/">Ingeniería Electrónica Industrial</a></li>
                    </ul>
                  </li>
                </ul></div>	            </div>
            </nav>
            <div className="header-search-box">
              <div className="search-box-wrap">
                <form role="search" method="get" className="search-form" action="https://www.distritounicoandaluz.org/">
                  <label>
                    <span className="screen-reader-text">Search for:</span>
                    <input className="search-field" placeholder="Search …" value="" name="s" type="search" />
                  </label>
                  <input className="search-submit" value="" type="submit" />
                </form>
              </div>
            </div>
          </div>
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


                        <p><strong>Distrito Unico Andaluz</strong>, es un portal informativo no oficial acerca de la <strong>Comisión Distrito Unico Universitario de Andalucía</strong> y está destinado a aquellas personas que desean ingresar a los distintas universidades públicas de la Comunidad, ya sea para cursar carreras de Grado, Másters Universitarios, e Itinerarios Curriculares concretos.</p>
                        <p><img loading="lazy" className="size-medium wp-image-7675 aligncenter" src={duaLogo} alt="Distrito Unico Andaluz" width="300" height="276" /></p>
                        <p>A través del sitio del <strong><span style={{ textDecoration: "underline" }}>Distrito Unico Andaluz</span></strong>, los interesados que cumplan con los requisitos de acceso podrán participar en el proceso de admisión (preinscripción) que regula el ingreso en los distintos Centros Universitarios andaluces, cuyo procedimiento y plazos son establecidos anualmente por la Comisión.</p>
                        <p>De esta forma, por ejemplo, quienes deseen realizar su solicitud ingreso en los estudios de Grado del <strong>Distrito Unico Andaluz</strong>, deben cumplir con una serie de requisitos específicos, como:</p>

                        <ul>
                          <li>Haber superado la Prueba de Acceso a la universidad.</li>
                          <li>Haber superado el curso de orientación universitaria (COU) con anterioridad al curso académico 1974/75, el curso Preuniversitario y las Pruebas de Madurez, o el Bachillerato de planes anteriores a 1953.</li>
                          <li>Estar en posesión del título de Técnico superior de Formación Profesional, Técnico superior de Artes Plásticas y Diseño, o Técnico Deportivo superior, o equivalentes.</li>
                          <li>Estar en posesión de un título universitario o equivalente que habilite para el acceso a la universidad.</li>
                          <li>Haber superado la Prueba de Acceso a la universidad para mayores de 25 años.</li>
                          <li>Estar en posesión de documentación expedida por una universidad Andaluza que acredite el Acceso a la universidad para mayores de 40 años con experiencia laboral o profesional.</li>
                          <li>Haber superado la Prueba de Acceso a la universidad para Mayores de 45 años en una universidad de Andalucía.</li>
                          <li>Estudiantes que han cursado planes de estudios de países extranjeros que estén en posesión de documentación acreditativa expedida por organismo o institución española que les habilite para el acceso a la universidad en España.</li>
                          <li>Cumplir otros requisitos académicos exigidos para el Acceso a la universidad distinto a los anteriores.</li>
                        </ul>
                        <p>En este punto se debe aclarar que se denomina acceso al hecho de reunir los requisitos que permiten ingresar al <strong>Distrito Unico Andaluz</strong>, mientras que admisión significa conseguir plaza en la carrera y establecimiento educativo deseados. De ahí que los estudiantes pueden tener acceso a la Universidad, pero no la admisión en los estudios de su elección por no obtener plaza en el proceso de preinscripción.</p>
                        <h3>Personas que pueden aspirar a ingresar en una universidad de Andalucía:</h3>
                        <ul>
                          <li><strong>Estudiantes que proceden del Bachillerato.</strong></li>
                          <li><strong>Estudiantes procedentes de ciclos formativos de grado superior.</strong></li>
                          <li><strong>Titulados universitarios.</strong></li>
                          <li><strong>Los Mayores de 25 años.</strong>&nbsp;En este caso, el único requisito es tener cumplidos los 25 años el 1 de octubre del año en el que se desea acceder, no estar en posesión de la selectividad, un título de técnico o un título universitario y superar la prueba de acceso correspondiente.</li>
                          <li><strong>Los Mayores de 40 años.</strong>&nbsp;Se accede por experiencia laboral y careciendo de otros requisitos de acceso a la universidad. Es necesario poseer experiencia laboral en un área relacionada con los estudios que se desean cursar. No hay examen, pero se valorará la relevancia de la experiencia laboral aportada y se llevará a cabo una entrevista.</li>
                          <li><strong>Los Mayores de 45 años.</strong>&nbsp;Abierto a todos los alumnos que desean ingresar en la universidad, y careciendo de otros requisitos de acceso a la universidad, no puedan acreditar experiencia laboral o profesional. Sólo será posible acceder a través de una prueba adaptada.</li>
                        </ul>
                        <p>Si una persona cumple más de un requisito de acceso, podrá hacerlos valer simultáneamente en el procedimiento de admisión.</p>
                        <p>Para acceder a un Máster que se dicte en alguna de las universidades integradas al <strong>Distrito Unico Andaluz</strong>, hay que estar en posesión de un título de grado, licenciado, diplomado o equivalente. No obstante, también se han de cumplir los requisitos de entrada específicos que establezca el Máster de que se trate.</p>
                        <p>Debe recordarse que, tanto en el caso de los estudios de Grado como para los Másteres oficiales, durante los plazos de presentación de solicitudes, el sitio Web del <strong>Distrito Unico Andaluz</strong> habilita una herramienta on-line para que los interesados puedan realizar el correspondiente trámite, que es exclusivamente de forma telemática.</p>

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
