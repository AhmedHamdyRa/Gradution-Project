import React, { useState } from 'react';
import axios from 'axios';

import './ImagePrediction.css';

function ImagePrediction() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  

  const handleFileChangee = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  
    // Display the selected image
    const imageUrl = URL.createObjectURL(selectedFile);
    setImageUrl(imageUrl);

  };
  

  const handleSubmit = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('image', file);

      try {
        const response = await axios.post(
          'http://143.198.138.64:9055/predictImage',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        setPrediction(response.data.label);
        console.log('Error:', response.data.label);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className='AADD'>
      <div className='HH2'><h2 >Garbage Separation</h2></div> <br/>
      <div className='HH2'><h5>Please Upload Waste Image to find it's Category</h5></div> <br/>
      <input className='custom-file-upload' type="file" onChange={handleFileChangee} /> 
      {imageUrl && <img src={imageUrl} alt="Selected" className="selected-image" />}
      <button className='BTNNN' onClick={handleSubmit}>Predict</button>
      {prediction && <div className='PridCont PIP'>Prediction: {prediction} </div>} <br/>
      {prediction && prediction === 'trash' ? (
          <div className='PridCont PIP'>-- Non-Recyclable --</div>
        ) : prediction === null ? (
          ''
        ) : (
          <div className='PridCont PIP'>-- Recyclable --</div>
        )}

        <br/>
        {prediction && prediction === 'metal' ? (
          
          <div className='PridCont PIP'>
            <h4>Here are the general steps involved in recycling metal:</h4>
            <ol>
              <li>Collection: Metal recycling begins with the collection of various metal items. </li>
              <li>Sorting: Once collected, the metal items are sorted based on their type and composition.</li>
              <li>Shredding: After sorting, the metal items are typically shredded into smaller pieces.</li>
              <li>Melting: The shredded metal pieces are then melted in a furnace. </li>
              <li>Purification: During the melting process, impurities such as paint, coatings.</li>
              <li>Alloying (optional): In some cases, the melted metal may be combined with other metals to create alloys with specific properties.</li>
              <li>Solidification: Once the metal has been melted and purified, it is allowed to cool and solidify. </li>
              <li>Shaping and Forming: The solidified metal is then typically shaped and formed into usable products or semi-finished materials. </li>
              <li>Further Processing: After shaping and forming, the metal may undergo additional processes.</li>
              <li>Distribution and Manufacturing: The recycled metal is then distributed to manufacturers who use it as raw material for various products.</li>
              <li>Consumption and Reuse: The recycled metal is incorporated into new products.</li>
            </ol>
            </div>
        ) : prediction === 'glass' ? (
          <div className='PridCont PIP'>
            <h4>To have a successful glass recycling, you have to go through the following steps:</h4>
            <ol>
              <li>Collection: Glass waste is collected from various sources, such as households, businesses, and recycling centers.</li>
              <li>Sorting: Once collected, glass waste is transported to a recycling facility.</li>
              <li>Cleaning and crushing: After sorting, the glass waste is cleaned to remove any remaining impurities.</li>
              <li>Melting: The crushed and sorted glass cullet is then heated in a furnace to a high temperature. </li>
              <li>Shaping and forming: Once in a molten state, the glass can be shaped and formed into various products.</li>
              <li>Quality control: Quality control checks are conducted throughout the recycling process to ensure that the recycled glass meets the required standards</li>
              <li>Distribution and use: The recycled glass products are then distributed to manufacturers,</li>
              
            </ol>
            </div>
        ): prediction === 'plastic' ? (
          <div className='PridCont PIP'>
            <h4>There are some steps to recycle plastic:</h4>
            <ol>
              <li>Clean and sort: Clean any plastic items before recycling them. Rinse out bottles and containers to remove any residual food or liquids.</li>
              <li>Identify recyclable plastics: Not all types of plastic are recyclable. Most recycling programs accept plastics labeled with a recycling symbol and a number between 1 and 7.</li>
              <li>Recycle plastic bags separately: Plastic bags and film should generally be recycled separately.</li>
              <li>Do not contaminate recycling bins: Make sure to only place recyclable plastic items in the designated recycling bins.</li>
              <li>Consider alternatives: Whenever possible, try to reduce your plastic consumption by opting for reusable</li>
            </ol>
            </div>
        ): prediction === 'cardboard' ? (
          <div className='PridCont PIP'>
            <h4>I will tell you all the steps of recycling paper from the beginning to the end:</h4>
            <ol>
              <li> Collection: The first step is the collection of paper waste.</li>
              <li>Sorting: After collection, the paper waste is transported to a recycling facility where it undergoes sorting.</li>
              <li>Cleaning: Once sorted, the paper waste goes through a cleaning process to remove contaminants like ink, staples, tape, and plastic films.</li>
              <li>Repulping: The next step is repulping, where the cleaned paper waste is mixed with water to create a slurry.</li>
              <li>Deinking (optional): For paper products that require a higher level of whiteness, such as office paper or printing paper, an additional deinking step may be included.</li>
              <li>Refining and bleaching: The pulp may undergo further refining and bleaching processes to improve its quality and meet specific product requirements.</li>
              <li>Papermaking: The refined pulp is then ready for papermaking.</li>
              <li>Distribution and use: The recycled paper rolls are sent to manufacturers, converters, and printers to be transformed into various paper products.</li>
            </ol>
            </div>
        ):''}
            
    </div>
  );
}

export default ImagePrediction;
