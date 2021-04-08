import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GlobalStyle } from "../theme/global-style";
import { mediaQueries } from "../commons/MediaQueries";
import { Fab } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";
import home from "../images/home.png";
import oops from "../images/oops.png";

const LegalContainer = styled.div`
  margin: 10%;
  padding: 2rem;
  display: grid;
  font-size: 2rem;
  color: var(--main-font-color);
  text-justify: auto;
  p,
  ul,
  li {
    font-size: 1.5rem;
    ${mediaQueries("sm")`
font-size: 1rem;
    `};
  }
  ${mediaQueries("sm")`
font-size: 0.7rem;
    `};
  ul,
  li {
    line-height: 1em;
    padding-bottom: 1em;
  }
`;

const H1 = styled.p`
  padding: 2rem;
  margin-left: 10%;
  width: 100%;
  height: auto;
  line-height: 0.7;
  font-family: "NimbusRegular";
  font-size: 17vw;
  color: var(--primary-color);
  -webkit-text-stroke-width: 0.3vw;
  -webkit-text-stroke-color: var(--secondary-font-color);
  font-size: 11vw;
  text-transform: uppercase;
  font-style: italic;
  text-decoration: underline #f0ff1f;
  transition: url(${oops}) 1s ease-out;
  ${mediaQueries("sm")`
  margin-right: 20px; 
  letter-spacing: 5px;
    font-size: 3rem;
    color: var(--secondary-font-color)
    `};
`;

export default function Legal() {
  return (
    <>
      <GlobalStyle />
      <H1>Impressum</H1>
      <LegalContainer>
        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Matthias Rodrigues de Fran&ccedil;a
          <br />
          50676 K&ouml;ln
        </p>
        <h2>Kontakt</h2>
        <p>E-Mail: blatsche@web.de</p>
        <h3>Haftung f&uuml;r Inhalte</h3>{" "}
        <p>
          Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
          f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
          gespeicherte fremde Informationen zu &uuml;berwachen oder nach
          Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
          hinweisen.
        </p>{" "}
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
          dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
          m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
          werden wir diese Inhalte umgehend entfernen.
        </p>{" "}
        <h3>Haftung f&uuml;r Links</h3>{" "}
        <p>
          Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
          deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
          f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
          F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
          Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>{" "}
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>{" "}
        <h3>Urheberrecht</h3>{" "}
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
          bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </p>{" "}
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
        <h3>Verwendete Frameworks, Libraries und Tools</h3> <br />
        <ul>
          <li>styled-components</li>
          <li>react-tiny-fab</li>
          <li>react-scroll-parallax</li>
          <li>react-multi-carousel</li>
          <li>react-icons</li>
          <li>@styled-icons/simple-icons</li>
          <li>react-grid-system</li>
          <li>react-chrono</li>
        </ul>{" "}
        <Fab
          mainButtonStyles={{ backgroundColor: "#e879de" }}
          style={{ bottom: 24, right: 24 }}
          icon={
            <Link to="/">
              <img src={home} alt="home" />
            </Link>
          }
        ></Fab>
      </LegalContainer>
    </>
  );
}
