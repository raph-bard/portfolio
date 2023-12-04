import CvTitle from "./CvTitle";
import Icon from "./Icon";
import InfoButton from "./InfoButton";
import PrintButton from "./PrintButton";
import profilePicture from "/src/assets/pdp-raphael-bard.jpg";

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
                <b>Développeur Web & Web Mobile</b>
              </li>
              <li className="blue-text">Wild Code School Bordeaux</li>
              <li className="grey-text">2023-2024</li>
            </ul>
            <InfoButton>
              Titre Professionnel Développeur Web et Web Mobile <br />
              (Niveau 5 - Bac+2)
            </InfoButton>
          </div>
          <ul className="tri-list mb-20">
            <li>
              <b>BTS Service Informatique aux Organisations</b>
            </li>
            <li className="blue-text">Ynov Bordeaux</li>
            <li className="grey-text">2015-2017</li>
          </ul>
          <h2 className="blue-title mb-20">Langues</h2>
          <ul>
            <li>
              <b>Français</b> : langue maternelle
            </li>
            <li>
              <b>Anglais</b> : B2
            </li>
          </ul>
        </div>
        <div className="triangle sm-d-block pr-d-none"></div>
        <div className="triangle-2 sm-d-block pr-d-none"></div>
        <div className="is-sixth-column">
          <div className="sm-d-none pr-d-block">
            <CvTitle />
          </div>
          <h2 className="blue-title mb-20">Expériences professionnelles</h2>
          <h3>
            Technicien Support Logiciel{" "}
            <span className="grey-text">2022 - 2023</span>
          </h3>
          <p className="blue-text mb-20">Deal informatique</p>
          <p className="mb-10">
            Support client de niveau 2 sur logiciel de comptabilité
          </p>
          <ul className="dot-list mb-20">
            <li>Gestion et analyse des problèmes clients sur logiciels</li>
            <li>Intervention en clientèle</li>
            <li>Rédaction des rapports pour le Niveau 3</li>
            <li className="pr-d-none">Tests versions en fin de sprints</li>
          </ul>
          <h3>
            Technicien Support et Déploiement Client{" "}
            <span className="grey-text">2021 - 2022</span>
          </h3>
          <p className="blue-text mb-20">Compagnie Fiduciaire</p>
          <p className="mb-10">
            Support client de niveau 1 sur logiciels de comptabilité
          </p>
          <ul className="dot-list mb-20">
            <li>Support Client</li>
            <li>Dépannage et assistance sur logiciels de comptabilité</li>
            <li>Déploiement client et paramétrages logiciels</li>
            <li className="pr-d-none">Formateur client sur logiciels</li>
            <li className="pr-d-none">Ticketing (Jira)</li>
          </ul>
          <h3>
            Intégrateur Web <span className="grey-text">2017 - 2020</span>
          </h3>
          <p className="blue-text mb-10">Freelance</p>
          <p className="mb-10">Intégration Web à partir de maquettes</p>
          <ul className="dot-list mb-20">
            <li>Intégration Web (HTML/CSS/JS)</li>
            <li>Gestion de Projet</li>
            <li>Fromscratch/Wordpress</li>
            <li>Formation Clients</li>
          </ul>
          <hr className="mb-20" />
          <h2 className="blue-title mb-20">Compétences</h2>
          <div className="tb-d-flex pr-d-flex">
            <div className="is-fifth-column">
              <h3 className="mb-10">Hard Skills</h3>
              <ul className="skills mb-20">
                <li>
                  <Icon icon="html" />
                  HTML <span className="grey-text">4 ans</span>
                </li>
                <li>
                  <Icon icon="css" />
                  CSS/SASS/LESS <span className="grey-text">4 ans</span>
                </li>
                <li>
                  <Icon icon="javascript" />
                  Javascript <span className="grey-text">~ 1 an</span>
                </li>
                <li>
                  <Icon icon="react" />
                  React <span className="grey-text">Débutant</span>
                </li>
                <li>
                  <Icon icon="node" />
                  Node <span className="grey-text">Débutant</span>
                </li>
                <li>
                  <Icon icon="github" />
                  Git/Github <span className="grey-text">~ 1 an</span>
                </li>
                <li>
                  <Icon icon="lock" />
                  Jest <span className="grey-text">Débutant</span>
                </li>
                <li>
                  <Icon icon="database" />
                  SQL/MySQL <span className="grey-text">Débutant</span>
                </li>
              </ul>
            </div>
            <div className="is-fifth-column soft-skills">
              <h3 className="mb-10">Soft Skills</h3>
              <ul className="mb-20">
                <li>Reflexions analytiques</li>
                <li>Gestion de projet</li>
                <li>Design thinking</li>
                <li>Travail en équipe</li>
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
