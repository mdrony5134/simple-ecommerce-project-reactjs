import './App.css'
import Banner from './Components/banner'
import ProductCard from './Components/productCard'
import Footer from './Components/footer'


// t-shirt-image import
import shirtImage1 from './assets/images/t-shirt-1.jpg'
import shirtImage2 from './assets/images/t-shirt-2.jpg'
import shirtImage3 from './assets/images/t-shirt-3.jpg'
import shirtImage4 from './assets/images/t-shirt-4.png'

// men's pant image import
import pantImage1 from './assets/images/pants-1.jpg'
import pantImage2 from './assets/images/pants-2.jpg'
import pantImage3 from './assets/images/pants-3.jpg'
import pantImage4 from './assets/images/pants-4.png'

// kids dress image import
import kidsImage1 from './assets/images/kids-dress-1.jpg'
import kidsImage2 from './assets/images/kids-drees-2.jpg'
import kidsImage3 from './assets/images/kids-drees-3.jpg'
import kidsImage4 from './assets/images/kids-drees-4.jpg'

function App() {
  // men's t-shirt data 

  const menShirt = [{
    img: shirtImage1,
    header: "Plain Essentials",
    title: 'Basic, solid-colored t-shirts for everyday wear.',
    price: "450 TK"
  },{
    img: shirtImage2,
    header: "Casual Classics",
    title: ' Traditional styles like crew neck and V-neck t-shirts.',
    price: "550 TK"
  },{
    img: shirtImage3,
    header: "Long Sleeve Tees",
    title: 'Ideal for cooler weather or layered looks.',
    price: "250 TK"
  },{
    img: shirtImage4,
    header: "Henleys and Polos",
    title: 'Offering a smart-casual alternative to regular tees.',
    price: "650 TK"
  },{
    img: shirtImage4,
    header: "Henleys and Polos",
    title: 'Offering a smart-casual alternative to regular tees.',
    price: "650 TK"
  },{
    img: shirtImage3,
    header: "Henleys and Polos",
    title: 'Offering a smart-casual alternative to regular tees.',
    price: "650 TK"
  },{
    img: shirtImage2,
    header: "Henleys and Polos",
    title: 'Offering a smart-casual alternative to regular tees.',
    price: "650 TK"
  },{
    img: shirtImage1,
    header: "Henleys and Polos",
    title: 'Offering a smart-casual alternative to regular tees.',
    price: "650 TK"
  }];

// men pant data
  const menPant= [{
    img: pantImage1,
    header: "Jeans",
    title: 'Classic denim pants in various styles like skinny, slim.',
    price: "650 TK"
  },{
    img: pantImage2,
    header: "Chinos",
    title: 'Versatile and stylish pants suitable.',
    price: "850 TK"
  },{
    img: pantImage3,
    header: "Cargo ",
    title: 'Featuring multiple pockets, perfect for a rugged.',
    price: "950 TK"
  },{
    img: pantImage4,
    header: "Dress Pants",
    title: 'Elegant options for formal events or professional attire.',
    price: "1150 TK"
  },{
    img: pantImage4,
    header: "Dress Pants",
    title: 'Elegant options for formal events or professional attire.',
    price: "1150 TK"
  },{
    img: pantImage3,
    header: "Dress Pants",
    title: 'Elegant options for formal events or professional attire.',
    price: "1150 TK"
  },{
    img: pantImage2,
    header: "Dress Pants",
    title: 'Elegant options for formal events or professional attire.',
    price: "1150 TK"
  },{
    img: pantImage1,
    header: "Dress Pants",
    title: 'Elegant options for formal events or professional attire.',
    price: "1150 TK"
  }];

// kids dress data 

const kidsDress= [{
  img: kidsImage1,
  header: "Party Dresses",
  title: 'Fancy dresses suitable for special occasions and celebrations.',
  price: "950 TK"
},{
  img: kidsImage2,
  header: "Summer Dress",
  title: 'Versatile and stylish pants suitable.',
  price: "1050 TK"
},{
  img: kidsImage3,
  header: "Floral Print",
  title: 'Featuring multiple pockets, perfect for a rugged.',
  price: "1250 TK"
},{
  img: kidsImage4,
  header: "Denim Dresses",
  title: 'Elegant options for formal events or professional attire. Elegant dresses for formal events like weddings',
  price: "1650 TK"
},{
  img: kidsImage4,
  header: "Denim Dresses",
  title: 'Elegant options for formal events or professional attire. Elegant dresses for formal events like weddings',
  price: "1650 TK"
},{
  img: kidsImage3,
  header: "Denim Dresses",
  title: 'Elegant options for formal events or professional attire.',
  price: "1650 TK"
},{
  img: kidsImage2,
  header: "Denim Dresses",
  title: 'Elegant options for formal events or professional attire.',
  price: "1650 TK"
},{
  img: kidsImage1,
  header: "Denim Dresses",
  title: 'Elegant options for formal events or professional attire. Elegant dress.',
  price: "1650 TK"
}];


  return (
    
    <div className='App'>

        <Banner/>
      <div className='all-products'> 
        
     {/* men's t-shirt section */}

     <h2>Men's T-shirt</h2>
     <div className='product-list'>
     {menShirt.map(({img, header, title, price}, index) => {
        // eslint-disable-next-line react/jsx-key
        return <ProductCard {...{img, header, title, price, key: index}}/>
      })} 
     </div>
{/* mens pant section */}
    <h2>Men's Pant</h2>
     <div className='product-list'>
     {menPant.map(({img, header, title, price}, index) => {
        // eslint-disable-next-line react/jsx-key
        return <ProductCard {...{img, header, title, price, key: index}}/>
      })} 
     </div>

     {/* kids dress section */}

     <h2>Kid's Dress</h2>
     <div className='product-list'>
     {kidsDress.map(({img, header, title, price}, index) => {
        // eslint-disable-next-line react/jsx-key
        return <ProductCard {...{img, header, title, price, key: index}}/>
      })} 
     </div>
      </div>

      <Footer/>

    </div>
  )
}

export default App
