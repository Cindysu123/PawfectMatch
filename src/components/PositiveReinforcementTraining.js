import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/PetCarePages.css';

import Footer from './Footer';

import user from '../assets/img/user.png'
import link from '../assets/img/link.png'
import linkIn from '../assets/img/linkIn.png'
import facebook from '../assets/img/facebook.png'
import twitterX from '../assets/img/twitterX.png'

import frontImage from '../assets/img/image 23.png'

const BasicPetCare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{textAlign:"left", background:"white", paddingTop:"6vw"}} className='fade-in-top-element'>
      <div style={{width:"70vw", margin:"0 auto"}}>
        <Link to="/pet-care-guide" style={{textDecoration:"underline"}}>Go Back to Pet Care Guide</Link>
        <div style={{fontSize:"3vw", margin:"2vw 0"}}>Positive Reinforcement Training</div>
        <div style={{display:"flex", justifyContent:"space-between", width:"60vw",alignItems:"center", margin:"0 auto"}}>
          <div style={{display:"flex", alignItems:"center"}}>
            <img src={user} style={{width:"3vw", margin:"1vw"}}/>
            <div>Author Name</div>
          </div>
          <div>Tue 3/12/2024</div>
        </div>
        <img src={frontImage} style={{width:"70vw", height:"30vw", borderRadius:"1vw", objectFit:"cover", objectPosition:"center"}}/>
        <div style={{display:"flex"}}>
          <div style={{display:"flex", flexDirection:"column", margin:"0vw 2vw"}}>
            <img src={facebook} style={{width:"2vw", margin:"1vw"}}/>
            <img src={twitterX} style={{width:"2vw", margin:"1vw"}}/>
            <img src={linkIn} style={{width:"2vw", margin:"1vw"}}/>
            <img src={link} style={{width:"2vw", margin:"1vw"}}/>
          </div>
          <div>
            <div style={{background:"#fcf2dc", padding:"2vw", borderRadius:"1vw",border:"1px solid black", margin:"2vw 0"}}>
              <div>
                Adopting a pet marks the beginning of a journey filled with joy, companionship, and the fulfillment of providing a nurturing environment for a new member of your family. However, embarking on this journey brings with it a significant responsibility to ensure the welfare and happiness of your furry companion. 
              </div>
              <div>
                A comprehensive understanding of the essentials of basic pet care is indispensable for fostering a healthy, vibrant life for your pet. Let’s delve deeper into the core aspects of pet care, each of which plays a pivotal role in your pet's overall well-being.
              </div>
            </div>
            <div style={{fontSize:"3vw", margin:"2vw"}}>Comprehensive Nutrition</div>
            <div>
            Nutrition is the cornerstone of your pet's health, significantly influencing their growth, energy levels, and immunity. The dietary needs of pets vary widely based on numerous factors including species, age, breed, weight, and any specific health conditions they may have. A balanced diet tailored to these individual requirements is crucial. This involves selecting high-quality pet food that meets all their nutritional needs and consulting with a veterinarian to make adjustments as necessary. In addition to solid food, ensuring constant access to fresh, clean water is essential for maintaining optimal hydration, which is vital for their bodily functions.
            </div>
            <div style={{fontSize:"3vw", margin:"2vw"}}>Comprehensive Nutrition</div>
            <div>
            Nutrition is the cornerstone of your pet's health, significantly influencing their growth, energy levels, and immunity. The dietary needs of pets vary widely based on numerous factors including species, age, breed, weight, and any specific health conditions they may have. A balanced diet tailored to these individual requirements is crucial. Here is a breakdown of what this entails:
            </div>
            <div style={{margin:"1vw"}}>
              <ul>
                <li style={{margin:"1vw"}}>
                High-Quality Pet Food: Selecting a diet that meets the AAFCO (Association of American Feed Control Officials) standards is a good starting point, ensuring the food provides complete and balanced nutrition.
                </li>
                <li style={{margin:"1vw"}}>
                Understanding Life Stages: The nutritional needs of pets change as they move from being puppies or kittens to adults and seniors. Foods are often formulated specifically for these life stages.
                </li>
                <li style={{margin:"1vw"}}>
                Special Diets for Health Conditions: Pets with health conditions such as diabetes, kidney disease, or allergies may require special diets. Consultation with a veterinarian is crucial for managing these conditions through diet.
                </li>
                <li style={{margin:"1vw"}}>
                Consistent Fresh Water Supply: Adequate hydration is essential for health. Always ensure your pet has access to clean, fresh water.
                </li>
                <li style={{margin:"1vw"}}>
                Avoiding Toxic Foods: Be aware of foods that can be harmful to pets, such as chocolate, grapes, onions, and xylitol, among others.
                </li>
              </ul>
            </div>
            <div style={{fontSize:"3vw", margin:"2vw"}}>Regular Exercise and Activity</div>
            <div>
            Exercise is indispensable for your pet’s physical and mental health. Adequate physical activity aids in maintaining a healthy weight, fostering good cardiovascular health, and ensuring proper digestion. It also plays a crucial role in mitigating behavioral problems by keeping your pet mentally stimulated and physically engaged. The specific needs for exercise vary greatly among pets, depending on factors such as breed, age, and health status. It's important to devise an exercise regimen that aligns with these needs, incorporating activities like walking, playing fetch, or participating in breed-specific sports. For some pets, mental stimulation through puzzle toys or training exercises is equally important as physical exercise.
            </div>
            <div style={{fontSize:"3vw", margin:"2vw"}}>Conclusion: A Lifelong Commitment to Care</div>
            <div style={{marginBottom:"2vw"}}>
            Embarking on the journey of pet ownership is a deeply rewarding experience that enriches your life in countless ways. However, it is also a commitment to understanding and meeting the complex needs of your pet throughout their life. This involves continuous learning and adaptation to ensure that your care strategies evolve with your pet's changing needs. By embracing the essentials of pet care—nutrition, grooming, exercise, and bonding—you lay the foundation for a rewarding and joyful life together, filled with love and mutual respect. Remember, the journey of pet ownership is one of shared growth and discovery, offering endless opportunities for joy and fulfillment.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BasicPetCare;