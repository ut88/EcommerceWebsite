import Row from "react-bootstrap/Row";
import ImageItem from "./ImageItem";
const productsArr = [

    {
        id:'m1',

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        subHeading:'Album 1',

        review:"Awesome",

    },

    {
        id:'m2',

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        subHeading:'Album 2',

        review:"Good",

    },

    {
        id:'m3',

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        subHeading:'Album 3',

        review:"Best",

        Qty:0

    },

    {
        id:'m4',

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        subHeading:'Album 4',

        review:"Top-Notch",

        Qty:0

    }

]

const Imager = (props) => {
  
    const k= productsArr.map((k1)=>(<ImageItem title={k1.title} 
        price={k1.price} 
        imageUrl={k1.imageUrl}  
        subHeading={k1.subHeading} 
        key={k1.id}
         id={k1.id}
         review={k1.review}
         Qty={k1.Qty} />
    ))
 
    return (<><h1 className="text-center">Music</h1>
    <Row xs={1} sm={2} className="g-4">{k}</Row>
   </> )

}

export default Imager;