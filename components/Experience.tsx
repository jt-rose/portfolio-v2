/* -------------------------------------------------------------------------- */
/*                            original jquery code                            */
/* -------------------------------------------------------------------------- */

// $(() => {
/* -------------------------------------------------------------------------- */
/*                      get experience section elements                       */
/* -------------------------------------------------------------------------- */

//     const $gaLogo = $("#ga-logo-container");
//     const $challengerLogo = $("#challenger-logo-container");
//     const $bareLogo = $("#bare-logo-container");

//     const $gaExp = $("#ga-experience-info");
//     const $challengerExp = $("#challenger-experience-info");
//     const $bareExp = $("#bare-experience-info");

//     /* -------------------------------------------------------------------------- */
//     /*                      show and hide experience sections                     */
//     /* -------------------------------------------------------------------------- */

//     // define curried functions that can show/hide and experience section
//     // and toggle the border-bottom to show if it is currently selected
//     const hideExperience =
//       ($logo: JQuery<HTMLElement>, $description: JQuery<HTMLElement>) => () => {
//         $description.hide();
//         $logo.css("border-bottom", "4px solid #fff");
//       };
//     const showExperience =
//       ($logo: JQuery<HTMLElement>, $description: JQuery<HTMLElement>) => () => {
//         $description.show();
//         $logo.css("border-bottom", "4px solid #666666");
//       };

//     // store GA experience
//     const showGAExperience = showExperience($gaLogo, $gaExp);
//     const hideGAExperience = hideExperience($gaLogo, $gaExp);

//     // store Challenger
//     const showChallengerExperience = showExperience(
//       $challengerLogo,
//       $challengerExp
//     );
//     const hideChallengerExperience = hideExperience(
//       $challengerLogo,
//       $challengerExp
//     );

//     // store Bare experience
//     const showBareExperience = showExperience($bareLogo, $bareExp);
//     const hideBareExperience = hideExperience($bareLogo, $bareExp);

//     // set event listeners to manage showing/hiding appropriate experience section
//     $gaLogo.on("click", () => {
//       showGAExperience();
//       hideChallengerExperience();
//       hideBareExperience();
//     });

//     $challengerLogo.on("click", () => {
//       hideGAExperience();
//       showChallengerExperience();
//       hideBareExperience();
//     });

//     $bareLogo.on("click", () => {
//       hideGAExperience();
//       hideChallengerExperience();
//       showBareExperience();
//     });
//   });

export const ExperienceORIGINAL = () => {
  return (
    <section id="experience">
      <h1>Experience</h1>
      <div id="companies">
        <div id="company-logos">
          <div id="ga-logo-container">
            <img
              id="ga-logo"
              src="./assets/experience-logos/general-assembly_logo.png"
              alt=""
            />
          </div>

          <div id="challenger-logo-container">
            <img
              id="challenger-logo"
              src="./assets/experience-logos/CHALLENGER_INC_Logo.jpg"
              alt=""
            />
          </div>

          <div id="bare-logo-container">
            <img
              id="bare-logo"
              src="./assets/experience-logos/bare-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div id="experience-description">
        <article id="ga-experience-info">
          <h3>Software Engineering Fellow</h3>
          <h4>General Assembly</h4>
          <p>
            Currently enrolled in a 500-hour intensive software engineering
            immersive course, focusing on full stack web development with
            JavaScript, JQuery, EJS, React, Node, Python/ Django, and SQL.
          </p>
          <div className="experience-accomplishments-container">
            <ul>
              <li>Built multiple site mockups and layouts</li>
              <li>
                Designed control flow and logic of terminal and browser games
              </li>
              <li>
                Developed portfolio site leveraging JQuery, TypeScript, and Sass
              </li>
              <li>...and more to come!</li>
            </ul>
          </div>
        </article>
        <article id="challenger-experience-info">
          <h3>Challenger Inc</h3>
          <h4>Associate Manager</h4>
          <p>
            At Challenger, I partnered with the Sales Enablement depts of
            enterprise corporations to teach and embed the Challenger Selling
            Methodology into global sales and marketing teams, coordinating the
            rollout of learning programs through workshops, reinforcement
            activities, and skill diagnostic surveys. I served as a primary
            client contact running day-to-day project management and providing
            advisory support.
          </p>
          <div className="experience-accomplishments-container">
            <ul>
              <li>Managed succesful transition of projects to new teams</li>
              <li>Built trusted relationships with new and legacy clients</li>
              <li>
                Translated business needs into database model and server
                architecture
              </li>
            </ul>
          </div>
        </article>
        <article id="bare-experience-info">
          <h3>Project Manager</h3>
          <h4>Bare International</h4>
          <p>
            As a project manager with over 8 years of experience, I have
            successfully managed nationwide and Japanese market research
            campaigns, coordinating a network of 100+ evaluators to produce
            surveys and audits for diverse clients, including USPS, Fannie Mae,
            Amtrak, Microsoft, Apple, and the National Zoo. I was the main
            client contact and managed these campaigns from start to finish,
            including project setup, recruitment and training, fieldwork
            scheduling, quality control, billing, and project closeout.
          </p>
          <div className="experience-accomplishments-container">
            <ul>
              <li>
                Won renewal and and expansion of projects from 86% of major
                clients
              </li>
              <li>
                Improved survey completion rates from 87% to the project target
                of 99%
              </li>
              <li>
                Designed tracking tools to efficiently monitor daily progress
                and update project goals
              </li>
              <li>
                Reduced over 20 hours of time spent per month through automating
                tracking and reporting
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

interface ExperienceData {
  position: string;
  company: string;
  description: string;
  accomplishments: string[];
}

const gaExerienceData: ExperienceData = {
  position: "Software Engineering Fellow",
  company: "General Assembly",
  description: `Currently enrolled in a 500-hour intensive software engineering
immersive course, focusing on full stack web development with
    JavaScript, JQuery, EJS, React, Node, Python/ Django, and SQL.
  `,
  accomplishments: [
    "Designed control flow and logic of terminal and browser games",
    "Developed portfolio site leveraging JQuery, TypeScript, and Sass",
    "...and more to come!",
  ],
};

const ExperienceArticle = (config: { experienceData: ExperienceData }) => {
  const { position, company, description, accomplishments } =
    config.experienceData;
  return (
    <article>
      <h3>{position}</h3>
      <h4>{company}</h4>
      <p>{description}</p>
      <div className="experience-accomplishments-container">
        <ul>
          {accomplishments.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export const Experience = (/*config: { experienceData: ExperienceData }*/) => {
  return <ExperienceArticle experienceData={gaExerienceData} />;
};
