export const html = (name, imageUrl="https://tii.imgix.net/production/articles/11755/24192ed0-ab01-4ab9-b4d7-b6bf2bdd40fb.png?fm=jpeg&amp;auto=compress&amp;w=1600&amp;h=900") => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="./style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=PT+Serif:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <title>NEXTOPENAICEO</title>
    </head>
  
    <body>
      <main>
        <img
          src="${imageUrl}"
          alt="nextopenaiceo"
          id="main-image"
        />
        <div class="overlay"></div>
  
        <section class="header-text">
          <div class="body-main">
            <div class="topics">
              <p class="first-topic">Exclusive</p>
              <p class="second-topic">Startups</p>
              <p class="third-topic">AI</p>
              <p class="fourth-topic">Venture Capital</p>
            </div>
            <h1>
            OpenAI's Board Approached
            ${name} About CEO
            Role
            </h1>
            <div class="divider"></div>
            <p class="main-description">
              Before Emmett Shear accepted the Interim CEO role at OpenAI, the
              board offered it to ${name}, the former CEO of Microsoft-owned
              GitHub and a prolific investor in artificial intelligence startups,
              as well as Alex Wang, co-founder and CEO of Scale AI, according to
              people familiar with the matter. Both declined the offer, the people
              said. The refusals show the challenges facing OpenAI's board in
              finding a new leader following the board's Friday firing of OpenAI
              co-founder Sam Altman, which set off a string of senior
              resignations.
            </p>
          </div>
        </section>
        <div class="overlay-2"></div>
      </main>
    </body>
  </html>
  `;
};

export const css = `html {
    padding: 0;
    margin: 0;
  }

  body {
    background-color: #000;
    padding: 0;
    margin: 0;
    /* font-family: serif; */
    font-family: "PT Serif", serif;
  }

  #main-image {
    position: absolute;
    width: 100%;
    height: 75vh;
  }

  main {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .overlay {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.3) 10%, black 65%);
    position: absolute;
    top: 0;
    left: 0;
  }
  .overlay-2 {
    width: 100%;
    height: 100vh;
    background: linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0) 50%);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #main-image::after {
    content: "";
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0), black 100%);
    position: absolute;
    top: 0;
    left: 0;
  }

  .header-text {
    position: absolute;
    top: 70%;
    left: 40%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: left;
    font-weight: 100;
    font-size: 1.8rem;
    line-height: 1.2;
  }

  h1 {
    font-weight: 100;
  }

  .divider {
    opacity: 0.3;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #9b9b9b;
    height: 2px;
  }

  .topics {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10;
  }

  h1 {
    margin: 10px 0;
    font-size: 2.5rem;
  }

  .topics > p {
    margin: 0;
    font-size: 0.85rem;
    font-weight: 100;
    color: #fff;
  }

  .first-topic {
    background-color: #d04237;
    padding: 2px 5px;
    border-radius: 4px;
  }

  .second-topic,
  .third-topic,
  .fourth-topic {
    margin-left: 20px !important;
  }

  .main-description {
    font-size: 1.1rem;
    font-weight: 100;
    color: #fff;
    line-height: 2;
  }
  .body-main {
    width: 80%;
  }`;

export const html1 = (name, imageUrl) => {
  return `
  <body style="background-color: #000; padding: 0; margin: 0; font-family: 'PT Serif', serif;">
     <main style="width: 100%; height: 100vh; position: relative;">
       <img
         src="${imageUrl}"
         alt="nextopenaiceo"
         id="main-image"
         style="position: absolute; width: 100%; height: 75vh;"
       />
       <div class="overlay" style="width: 100%; height: 100vh; background-image: linear-gradient(rgba(0, 0, 0, 0.3) 10%, black 65%); position: absolute; top: 0; left: 0;"></div>
       <section class="header-text" style="position: absolute; top: 65%; left: 40%; transform: translate(-50%, -50%); color: #fff; text-align: left; font-weight: 100; font-size: 1.8rem; line-height: 1.2;">
         <div class="topics" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 10;">
           <p class="first-topic" style="background-color: #d04237; padding: 2px 5px; border-radius: 4px; font-size: 0.85rem;font-weight: 100;  color: #fff;">Exclusive</p>
           <p class="second-topic" style="margin-left: 20px; font-size: 0.85rem;font-weight: 100;  color: #fff;">Startups</p>
           <p class="third-topic" style="margin-left: 20px; font-size: 0.85rem;font-weight: 100;  color: #fff;">AI</p>
           <p class="fourth-topic" style="margin-left: 20px; font-size: 0.85rem;font-weight: 100;  color: #fff;">Venture Capital</p>
         </div>
         <h1 style="margin-bottom: 8px; margin-top:0; font-weight: 100;">OpenAI's Board approached ${name} About CEO Role</h1>
         <div class="divider" style="opacity: 0.3; margin-top: 20px; margin-bottom: 20px; background-color: #9b9b9b; height: 2px;"></div>
         <p class="main-description" style="font-size: 1.1rem; font-weight: 100; color: #fff; line-height: 2; margin-bottom: 10px;">
           Before Emmett Shear accepted the Interim CEO role at OpenAI, the board
           offered it to ${name}, the former CEO of Microsoft-owned GitHub
           and a prolific investor in artificial intelligence startups, as well
           as Alex Wang, co-founder and CEO of Scale AI, according to people
           familiar with the matter. Both declined the offer, the people said.
           The refusals show the challenges facing OpenAI's board in finding a
           new leader following the board's Friday firing of OpenAI co-founder
           Sam Altman, which set off a string of senior resignations. Late
           Sunday, OpenAI co-founder and chief scientist Ilya Sutskever said
           Altman would not be reinstated, as some employees wanted, and that
           Shear, co-founder of Amazon-owned video streaming site Twitch, would
           take over as Interim CEO.
         </p>
       </section>
     </main>
   </body>
  `;
};
