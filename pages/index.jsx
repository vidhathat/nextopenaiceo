/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import * as htmlToImage from "html-to-image";
import "../styles/global.css";

const html = (name, imageUrl) => {
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

export default function Home() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    console.log(name, imageUrl);
    if (name.length === 0 || imageUrl.length === 0) {
      alert("Please enter a name and image url");
      return;
    } else {
      const node = document.getElementById("html-node");
      // make node display block so that html2canvas can detect it
      node.style.display = "block";
      const dataUrl = await htmlToImage.toPng(node);
      // make node display none again
      node.style.display = "none";
      console.log(dataUrl);
      setImage(dataUrl);
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.download = "image.png";
    link.href = image;
    link.click();
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <div
        id="html-node"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{
          __html: html(capitalizeFirstLetter(name), imageUrl),
        }}
      />
      <div className="flex flex-col items-center h-screen justify-center">
        <p className="text-4xl mb-6 text-white">
          Be the Next <span style={{ color: "#4185F4" }}>OpenAI</span> CEO
        </p>
        <img
          className="mb-10 w-[600px] h-[500px]"
          src={
            image ||
            "https://i.ibb.co/Ns48NDm/F-b-ZX9-Cbc-AA4-Wcw-format-jpg-name-large.jpg"
          }
          alt="User Image"
        />
        <div className="flex justify-center items-center mb-4">
          <input
            type="text"
            id="name"
            className="bg-gray-500 hover:bg-gray-700 text-white font-normal py-2 px-4 rounded mx-2 placeholder-white"
            placeholder="Enter a Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="image"
            className="bg-gray-500 hover:bg-gray-700 text-white font-normal py-2 px-4 rounded mx-2 placeholder-white"
            placeholder="Paste Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        {
            image ? (
<button
          onClick={downloadImage}
          style={{ width: "468px" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded mt-4"
        >
          Download image
        </button>
            ) : (
                <button
          onClick={generateImage}
          style={{ width: "468px" }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded mt-4"
        >
          Generate image
        </button>
            )
        }
      </div>
    </div>
  );
}
