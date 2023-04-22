


import ImageItem from "./ImageItem";
const productsArr = [

    {
        key:Math.random().toString(),

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        subHeading:'Album 1'

    },

    {
        key:Math.random().toString(),

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        subHeading:'Album 2'

    },

    {
        key:Math.random().toString(),

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        subHeading:'Album 3'

    },

    {
        key:Math.random().toString(),

        title: 'Blue Color',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

        subHeading:'Album 4'

    }

]
const Imager = () => {
 
    const k= productsArr.map((k1)=>( <ImageItem title={k1.title} price={k1.price} imageUrl={k1.imageUrl} subHeading={k1.subHeading} id={k1.key} key={k1.key}/>
    ))
  
    return (<>{k}</> )
    // return (<Stack gap={20}>
    //     <div className="variant-dark">
    //     <Container  >
    //         <Row >
    //             <Col className=" text-center" ><h1>Music</h1></Col>
    //         </Row>
    //         <Row>
    //             <Col className=" text-center">
    //             <h3> Album 1</h3> 
    //             <Image src={productsArr[0].imageUrl} thumbnail />   
    //             </Col>
    //             <Col className=" text-center">
    //             <h3> Album 2</h3>
    //             <Image src={productsArr[1].imageUrl}  thumbnail />
    //             </Col>
    //         </Row>
    //         <Row >
    //             <Col className="text-center">{`$${productsArr[1].price}`}</Col>
    //             <Col><Button variant="primary" onClick={pk}>Add To Cart</Button></Col>
    //             <Col className="text-center">{`$${productsArr[0].price}`}</Col>
    //             <Col><Button variant="primary">Add To Cart</Button></Col>
    //         </Row>
    //     </Container></div>
    //     <div className="variant-dark">
    //     <Container>
    //     <Row>
    //             <Col className=" text-center">
    //             <h3> Album 3</h3> 
    //             <Image src={productsArr[2].imageUrl} thumbnail />   
    //             </Col>
    //             <Col className=" text-center">
    //             <h3> Album 4</h3>
    //                 <Image src={productsArr[3].imageUrl}  thumbnail />
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col className="text-center">{`$${productsArr[2].price}`}</Col>
    //             <Col><Button variant="primary">Add To Cart</Button></Col>
    //             <Col className="text-center">{`$${productsArr[3].price}`}</Col>
    //             <Col><Button variant="primary">Add To Cart</Button></Col>
    //         </Row>
    //         </Container>
    //         </div><br/>
    //         <div className="variant-dark">
    //         <Container>
    //         <Row className="text-center"><h1>Merch</h1></Row>
    //         <Row>
    //             <Col className=" text-center">
    //             <h3> T-Shirt</h3> 
    //             <Image src="https://prasadyash2411.github.io/ecom-website/img/Shirt.png" thumbnail />   
    //             </Col>
    //             <Col className=" text-center">
    //             <h3> Coffee Cup</h3>
    //                 <Image src="https://prasadyash2411.github.io/ecom-website/img/Cofee.png"  thumbnail />
    //             </Col>
    //         </Row>
    //         <Row>
    //             <Col className="text-center">{`$${productsArr[2].price}`}</Col>
    //             <Col><Button variant="primary">Add To Cart</Button></Col>
    //             <Col className="text-center">{`$${productsArr[3].price}`}</Col>
    //             <Col><Button variant="primary">Add To Cart</Button></Col>
    //         </Row><br/>
    //         <Row ><Col className="text-center"><Button variant="secondary" size="lg" >See the Cart</Button></Col></Row>
    //     </Container>
    //     </div><br/> 
   
    // </Stack>)
}

export default Imager;