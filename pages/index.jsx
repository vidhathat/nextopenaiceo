import { useState } from 'react';
import * as htmlToImage from 'html-to-image';

const html = `
<body style="background-color: #000; padding: 0; margin: 0; font-family: 'PT Serif', serif;">
   <main style="width: 100%; height: 100vh; position: relative;">
     <img
       src="https://tii.imgix.net/production/articles/11755/24192ed0-ab01-4ab9-b4d7-b6bf2bdd40fb.png?fm=jpeg&amp;auto=compress&amp;w=1600&amp;h=900"
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
       <h1 style="margin-bottom: 8px; margin-top:0; font-weight: 100;">Former GitHub CEO Friedman, Scale AI Founder Wang Declined OpenAI Top Job</h1>
       <div class="divider" style="opacity: 0.3; margin-top: 20px; margin-bottom: 20px; background-color: #9b9b9b; height: 2px;"></div>
       <p class="main-description" style="font-size: 1.1rem; font-weight: 100; color: #fff; line-height: 2;">
         Before Emmett Shear accepted the Interim CEO role at OpenAI, the board
         offered it to Nat Friedman, the former CEO of Microsoft-owned GitHub
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

export default function Home() {
 const [image, setImage] = useState(null);

 const generateImage = async () => {
  const node = document.getElementById('html-node');
  const dataUrl = await htmlToImage.toPng(node);
  console.log(dataUrl);
  setImage(dataUrl);
 };

 const downloadImage = () => {
  const link = document.createElement('a');
  link.download = 'image.png';
  link.href = image;
  link.click();
 };

 return (
  <div>
    <div id="html-node" dangerouslySetInnerHTML={{ __html: html }} />
    <button onClick={generateImage}>Generate Image</button>
    {image && (
      <div>
        <img src={image} alt="Generated" />
        <button onClick={downloadImage}>Download Image</button>
      </div>
    )}
  </div>
 );
}
