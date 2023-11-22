/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import * as htmlToImage from "html-to-image";
import "../styles/global.css";
import Lottie from "lottie-react";
import Loading from "../public/loading.json";
import Head from "next/head";
import Script from "next/script";
import { html, css, html1 } from "../constants/files";
import { keys } from "../constants/keys";

export default function Home() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    let ms1 = Date.now();
    setLoading(true);
    if (name.length === 0 || imageUrl.length === 0) {
      alert("Please enter a name and image url");
      setLoading(false);
      return;
    } else {
      try {
        console.log("CALLED");

        // get random key from keys
        const key = keys[Math.floor(Math.random() * keys.length)];

        const response = await fetch("https://hcti.io/v1/image", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic " +
              btoa(
                // "7e3294f3-08fa-4ecf-bab9-759bf8f39669:3b401572-e114-4521-bbe4-c13117b28be2"
                `${key.userid}:${key.apikey}`
              ), // replace with your user_id and api_key
          },
          body: JSON.stringify({ html: html(name, imageUrl), css }),
        });

        const data = await response.json();
        console.log(data);
        setImage(data.url);
        let ms2 = Date.now();
        if (ms2 - ms1 < 2000) {
          setTimeout(() => {
            setLoading(false);
          }, 2000 - (ms2 - ms1));
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        const node = document.getElementById("html-node");
        // make node display block so that html2canvas can detect it
        node.style.display = "block";
        const dataUrl = await htmlToImage.toPng(node);
        // make node display none again
        node.style.display = "none";
        console.log(dataUrl);
        setImage(dataUrl);
      }
    }
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <Head>
        <title>New OpenAI CEO</title>
        <meta name="description" content="Generate your own OpenAI CEO image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        id="html-node"
        style={{ display: "none" }}
        dangerouslySetInnerHTML={{
          __html: html1(capitalizeFirstLetter(name), imageUrl),
        }}
      />
      <div className="flex flex-col items-center h-screen justify-center bg-black">
        {loading ? (
          <div>
            <Lottie
              animationData={Loading}
              style={{ width: "300px", height: "300px" }}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
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
            {image ? (
              <a
                style={{ width: "468px" }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded mt-4 text-center"
                href={image}
                download="image.png"
                target="_blank"
              >
                Download image
              </a>
            ) : (
              <button
                onClick={generateImage}
                style={{ width: "468px" }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded mt-4"
              >
                Generate image
              </button>
            )}
          </div>
        )}
      </div>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GBSSGZ46EV"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());`}
      </Script>
      <Script>{`gtag('config', 'G-GBSSGZ46EV');`}</Script>
    </div>
  );
}
