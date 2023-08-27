import image1 from "@/assets/marguerite-729510_640.jpg";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h2>Home</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
        {/* image from assets */}
        <Image
        src={image1} 
        placeholder="blur" 
        alt="Image 1" 
        />

        {/* Image from public */}
        <Image
        src='/flower.jpeg' 
        width={400}
        height={300}
        alt="" 
        />        
        

        {/* image from url */}
        <Image 
        className="h-full object-cover" 
        width={400} 
        height={300}        
        src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
        alt="" />
      
        
      </div>
    </main>
  )
}

export default HomePage;
