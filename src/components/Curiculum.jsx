import CvTitle from "./CvTitle";
import Icon from "./Icon";
import InfoButton from "./InfoButton";
import PrintButton from "./PrintButton";
import profilePicture from "/src/assets/pdp-raphael-bard.jpg";
import qrCode from "/src/assets/qrcode.png";

function Curiculum() {
  return (
    <>
      <div id="cv" className="container-A4 tb-d-flex pr-d-flex">
        <div className="is-third-column">
          <img
            id="profile-picture"
            className="m-auto mb-20"
            src={profilePicture}
            alt="Raphaël Bard"
          />
          <div className="sm-d-block pr-d-none">
            <CvTitle />
          </div>
          <h2 className="blue-title mb-20">Contact</h2>
          <ul className="contact-list mb-20">
            <li>
              <Icon icon="address" />
              Talence 33400, France
            </li>
            <li>
              <a href="tel:0787002979">
                <Icon icon="phone" />
                07 87 00 29 79
              </a>
            </li>
            <li>
              <a href="mailto:raphael.bard.pro@gmail.com">
                <Icon icon="mail" />
                raphael.bard.pro@gmail.com
              </a>
            </li>
            <li className="pr-d-none">
              <a target="_blank" href="https://github.com/raph-bard">
                <Icon icon="github" />
                Github
              </a>
            </li>
            <li className="d-none pr-d-block">
              <a href="https://github.com/raph-bard">
                <Icon icon="github" />
                github.com/raph-bard
              </a>
            </li>
          </ul>
          <hr className="mb-20" />
          <h2 className="blue-title mb-20">Formations</h2>
          <div className="has-infos">
            <ul className="tri-list mb-20">
              <li>
                <b>POEC Java/Angular</b>
              </li>
              <li className="blue-text">Wild Code School Bordeaux</li>
              <li className="grey-text">Bootcamp 3 mois 2024</li>
            </ul>
          </div>
          <div className="has-infos">
            <ul className="tri-list mb-20">
              <li>
                <b>Développeur Web & Web Mobile</b>
              </li>
              <li className="blue-text">Wild Code School Bordeaux</li>
              <li className="grey-text">Bootcamp 5 mois 2023-2024</li>
            </ul>
            <InfoButton>
              RNCP37674 - TP - Développeur Web & Web mobile
              <br />
              (Niveau 5 - Bac+2)
            </InfoButton>
          </div>
          <ul className="tri-list mb-20">
            <li>
              <b>BTS Service Informatique aux Organisation</b>
            </li>
            <li className="blue-text">Ynov Bordeaux</li>
            <li className="grey-text">2015-2017</li>
          </ul>
          <h2 className="blue-title mb-20">Langues</h2>
          <ul className="mb-20">
            <li>
              <b>Français</b> : langue maternelle
            </li>
            <li>
              <b>Anglais</b> : B2
            </li>
          </ul>
          <h2 className="blue-title mb-20">Loisirs</h2>
          <ul>
            <li>MAO</li>
            <li>Jeux-Vidéos compétitifs</li>
          </ul>
          <div id="qr-code" className="d-none pr-d-block">
            <img src={qrCode} alt="https://raphael-bard.vercel.app/" />
            <p>
              Plus d'informations sur
              <br />
              https://raphael-bard.vercel.app/
            </p>
          </div>
        </div>
        <div className="triangle sm-d-block pr-d-none"></div>
        <div className="triangle-2 sm-d-block pr-d-none"></div>
        <div className="is-sixth-column">
          <div className="sm-d-none pr-d-block">
            <CvTitle />
          </div>
          <h2 className="blue-title mb-20">Projets</h2>
          <div className="tb-d-flex pr-d-flex">
            <div className="is-fifth-column">
              <p className="mb-10">
                <b>Project Fullstack - Street-Art Hunters</b>
              </p>
              <ul className="dot-list mb-20">
                <li>
                  Chasse aux street-arts avec Map + Prise de photo en temps réél
                </li>
                <li>Outils : React, Node/Express, Github, MySql</li>
              </ul>
              <p className="mb-10">
                <b>Projet React - Elemen5 <a className="ml-6" href="https://2023-09-js-bdx-p2-5-elemens.vercel.app/" target="_blank"><Icon icon="web"/></a></b>
              </p>
              <ul className="dot-list mb-20">
                <li>
                  Appel de l'API TMDB pour avoir un affichage de films et séries
                </li>
                <li>Outils : React, JS</li>
              </ul>
            </div>
            <div className="is-fifth-column">
              <p className="mb-10">
                <b>Hackaton 48h - Noëllissime</b>
              </p>
              <ul className="dot-list mb-20">
                <li>Réalisation d'un Calendrier de l'Avent interactif</li>
                <li>
                  Outils : React, JS - Collaboration avec promos Data et PHP
                </li>
                <li>Prix du meilleur Design</li>
              </ul>
              <p className="mb-10">
                <b>Projet Frontend - Rasta Rockets <a className="ml-6" href="https://raph-bard.github.io/rasta-rocket/index.html" target="_blank"><Icon icon="web"/></a></b>
              </p>
              <ul className="dot-list mb-20">
                <li>Site web pour référencer les bars du quartier</li>
                <li>Outils : HTML, CSS, JavaScript</li>
              </ul>
            </div>
          </div>
          <hr className="mb-20" />
          <h2 className="blue-title mb-20">Expériences professionnelles</h2>
          <h3>
            Intégrateur Web <span className="grey-text">2017 - 2020</span>
          </h3>
          <p className="blue-text mb-10">Freelance</p>
          <p className="mb-10">Intégration Web à partir de maquettes</p>
          <ul className="dot-list mb-20">
            <li>Intégration Web (HTML/CSS/JQuery)</li>
            <li>En collaboration avec agences web sur 25/30 projets</li>
            <li>Fromscratch/Wordpress</li>
          </ul>
          <h3>
            Technicien Support et Déploiement Client{" "}
            <span className="grey-text">2021 - 2023</span>
          </h3>
          <p className="blue-text mb-20">
            Compagnie Fiduciaire, Deal Informatique
          </p>
          <p className="mb-10">
            Support client de niveau 1 puis 2 sur logiciels de comptabilité
          </p>
          <ul className="dot-list mb-20">
            <li>Support & Formations client</li>
            <li>Déploiement client et paramétrages logiciels</li>
            <li className="pr-d-none">Ticketing (Jira)</li>
          </ul>
          <hr className="mb-20" />
          <h2 className="blue-title mb-20">Compétences</h2>
          <div className="tb-d-flex pr-d-flex">
            <div className="is-fifth-column">
              <h3 className="mb-10">Hard Skills</h3>
              <ul className="skills mb-20">
                <p className="mb-10">
                  <b>Maitrisé</b>
                </p>
                <li className="pr-d-none">
                  <Icon icon="html" />
                  HTML
                </li>
                <li className="mb-10">
                  <Icon icon="css" />
                  CSS/SASS/LESS
                </li>
                <p className="mb-10">
                  <b>En cours d'apprentissage</b>
                </p>
                <li>
                  <Icon icon="javascript" />
                  Javascript
                </li>
                <li>
                  <Icon icon="angular" />
                  Angular
                </li>
                <li>
                  <Icon icon="react" />
                  React
                </li>
                <li>
                  <Icon icon="java" />
                  Java/Spring
                </li>
                <li>
                  <Icon icon="node" />
                  Node/Express
                </li>
                <li>
                  <Icon icon="github" />
                  Git/Github
                </li>
                <li className="pr-d-none">
                  <Icon icon="lock" />
                  Jest/Supertest
                </li>
                <li>
                  <Icon icon="database" />
                  MySQL
                </li>
              </ul>
            </div>
            <div className="is-fifth-column soft-skills">
              <h3 className="mb-10">Soft Skills</h3>
              <ul className="mb-20">
                <li>Autonomie</li>
                <li>Curiosité</li>
                <li>Persévérance</li>
                <li>Travail en équipe</li>
                <li>Créativité</li>
                <li>Adaptabilité</li>
              </ul>
            </div>
            <PrintButton></PrintButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default Curiculum;
