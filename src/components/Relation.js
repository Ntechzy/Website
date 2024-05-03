import backgroundImages from "../assets/images/backgrounds/3.jpg"


const Relation = () => {

    return(
      <div>
      <div style={{ 
        position: 'relative',
        backgroundImage: `url(${backgroundImages})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        marginTop:'8px',
        paddingTop:'15px',
      }}>
        
        {/* <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}/> */}
        
            <div className="text-3xl m-4 px-4 mt-7 pt-5 text-white font-medium flex justify-center">
                How We collaborate With You:
            </div>
          <div className="flex flex-wrap">
        <div className="container mx-auto px-4 py-8 mt-6 w-2/4 h-auto m-4  flex items-start ">
      <img
        className="w-40 h-auto mr-4 rounded-full object-cover ring-1 ring-black"
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" // Replace with actual image URL
        alt="Client Image"
      />
      <div className="text-lg leading-loose text-white">
        <p>
          "The Olivine team played a crucial role in helping us craft and launch a new brand and website. Despite entering a competitive market, we were able to identify our unique value proposition as a brand and product, and clearly reflect that positioning in our overall marketing strategy. Olivine has been creative, thoughtful, and nimble throughout our partnership."
        </p>
        <div className="mt-4">
          <p>Tatiana Morozova</p>
          <p className="text-gray-500">Director of Marketing at ServiceNow</p>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-8 mt-6 w-2/4 h-auto m-4  flex items-start ">
      <img
        className="w-40 h-auto mr-4 rounded-full object-cover ring-1 ring-black"
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" // Replace with actual image URL
        alt="Client Image"
      />
      <div className="text-lg leading-loose text-white">
        <p>
          "The Olivine team played a crucial role in helping us craft and launch a new brand and website. Despite entering a competitive market, we were able to identify our unique value proposition as a brand and product, and clearly reflect that positioning in our overall marketing strategy. Olivine has been creative, thoughtful, and nimble throughout our partnership."
        </p>
        <div className="mt-4">
          <p>Tatiana Morozova</p>
          <p className="text-gray-500">Director of Marketing at ServiceNow</p>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-8 mt-6 w-2/4 h-auto m-4  flex items-start ">
      <img
        className="w-40 h-auto mr-4 rounded-full object-cover ring-1 ring-black"
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" // Replace with actual image URL
        alt="Client Image"
      />
      <div className="text-lg leading-loose text-white">
        <p>
          "The Olivine team played a crucial role in helping us craft and launch a new brand and website. Despite entering a competitive market, we were able to identify our unique value proposition as a brand and product, and clearly reflect that positioning in our overall marketing strategy. Olivine has been creative, thoughtful, and nimble throughout our partnership."
        </p>
        <div className="mt-4">
          <p>Tatiana Morozova</p>
          <p className="text-gray-500">Director of Marketing at ServiceNow</p>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-8 mt-6 w-2/4 h-auto m-4  flex items-start ">
      <img
        className="w-40 h-auto mr-4 rounded-full object-cover ring-1 ring-black"
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" // Replace with actual image URL
        alt="Client Image"
      />
      <div className="text-lg leading-loose text-white">
        <p>
          "The Olivine team played a crucial role in helping us craft and launch a new brand and website. Despite entering a competitive market, we were able to identify our unique value proposition as a brand and product, and clearly reflect that positioning in our overall marketing strategy. Olivine has been creative, thoughtful, and nimble throughout our partnership."
        </p>
        <div className="mt-4">
          <p>Tatiana Morozova</p>
          <p className="text-gray-500">Director of Marketing at ServiceNow</p>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    

    )
}
export default Relation;