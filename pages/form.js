import { useState, useEffect } from 'react';
import '../styles/global.css'

export default function Form() {
 const [name, setName] = useState('');
 const [image, setImage] = useState('');

 useEffect(() => {
 const form = document.getElementById('userForm');
//  if (form) {
 form.addEventListener('submit', function(event) {
   event.preventDefault();

   var name = document.getElementById('name').value;
    console.log('name', name)
   var image = document.getElementById('image').value;

   // Fetch the article from the provided link
   fetch('https://www.theinformation.com/articles/former-github-chief-nat-friedman-declined-openai-interim-ceo-role', {
    mode: 'no-cors'
   })     .then(response => response.text())
     .then(data => {
       // Replace the name and image in the article
       var article = data.replace('Nat Friedman', name);
       article = article.replace('https://path/to/nat/image.jpg', image);

       // Render the updated article
       document.getElementById('article').innerHTML = article;
     });
 });
//  }
 }, []);

 return (
 <div className="flex flex-col items-center h-screen justify-center">
 <div className="flex justify-center items-center mb-4">
 <input type="text" id="name" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 placeholder-white" placeholder="Enter a Name" />
 <input type="text" id="image" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 placeholder-white" placeholder="Paste Image URL" />
 </div>
 <button type="submit" style={{width:'468px'}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
 Generate image
 </button>
 <form id="userForm"></form>
 <div id="article"></div>
 </div>
 );
}
