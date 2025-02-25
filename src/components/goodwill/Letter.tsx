// components/GoodwillLetterSection.tsx
import React from 'react';

const Letter: React.FC = () => {
  return (
    <section 
      className="w-full py-12 px-4 md:px-8 bg-[#E7E3D4]" 
    >
      <div className="max-w-[1000px] mx-auto px-20 ">
        <h2 className="text-2xl md:text-3xl font-serif font-normal mb-4">
          Goodwill letter from the DAO
        </h2>
        
        <p className="text-sm text-gray-600 mb-8 max-w-3xl">
          We are thrilled to present a series of groundbreaking projects that have 
          recently graduated from our esteemed crypto incubator program.
        </p>
        
        <div className="bg-white p-6 md:p-8 rounded shadow-sm">
          <p className="text-gray-700 text-sm md:text-base mb-6">
            Lorem ipsum dolor sit amet consectetur. Cursus tellus facilisi facilisis ipsum aliquam morbi rhoncus 
            scelerisque mauris. Justo cum semper elementum pharetra gravida ac consequat diam volutpat. Mauris 
            aliquam vestibulum nulla consectetur maecenas turpis porttitor volutpat diam. Sit non vestibulum dui 
            et pellentesque. Sed ullamcorper cras aenean imperdiet purus aliquet urna. Integer id adipiscing et 
            non sit. Morbi nulla condimentum mauris nunc sit parturient. Lacus nulla sem sed senectus id id. 
            Aliquam amet non dictumst nam integer rutrum.
            Lorem ipsum dolor sit amet consectetur. Cursus tellus facilisi facilisis ipsum aliquam morbi rhoncus 
            scelerisque mauris. Justo cum semper elementum pharetra gravida ac consequat diam volutpat. Mauris 
            aliquam vestibulum nulla consectetur maecenas turpis porttitor volutpat diam. Sit non vestibulum dui 
            et pellentesque. Sed ullamcorper cras aenean imperdiet purus aliquet urna. Integer id adipiscing et 
            non sit. Morbi nulla condimentum mauris nunc sit parturient. Lacus nulla sem sed senectus id id. 
            Aliquam amet non dictumst nam integer rutrum.
            Lorem ipsum dolor sit amet consectetur. Cursus tellus facilisi facilisis ipsum aliquam morbi rhoncus 
            scelerisque mauris. Justo cum semper elementum pharetra gravida ac consequat diam volutpat. Mauris 
            aliquam vestibulum nulla consectetur maecenas turpis porttitor volutpat diam. Sit non vestibulum dui 
            et pellentesque. Sed ullamcorper cras aenean imperdiet purus aliquet urna. Integer id adipiscing et 
            non sit. Morbi nulla condimentum mauris nunc sit parturient. Lacus nulla sem sed senectus id id. 
            Aliquam amet non dictumst nam integer rutrum.
          </p>
          
          <p className="text-gray-700 text-sm md:text-base">
            Urna quam duis duis cursus odio ullamcorper. Euismod diam massa id volutpat iaculis dui. Feugiat 
            vestibulum platea ornare eget platea ut arcu. Quam
          </p>
        </div>
      </div>
    </section>
    
  );
};

export default Letter;