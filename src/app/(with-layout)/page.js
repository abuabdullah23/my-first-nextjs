import Categories from "@/components/HomePage/Categories/Categories";
import PopularProducts from "@/components/HomePage/PopularProducts/PopularProducts";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <main>
      <Categories />
      <Suspense fallback={<h1 className='text-center font-semibold text-2xl text-black'>Loading...</h1>}>
        <PopularProducts />
      </Suspense>

    </main>
  )
}

export default HomePage;


{/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
  <Image
    src={image1}
    placeholder="blur"
    alt="Image 1"
  />

  <Image
    src='/flower.jpeg'
    width={400}
    height={300}
    alt=""
  />


  <Image
    className="h-full object-cover"
    width={400}
    height={300}
    src="https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    alt="" />

</div> */}