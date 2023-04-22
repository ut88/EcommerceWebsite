// import  "./Home.css"
// import { Container,Row,Col } from "react-bootstrap";
const Home=()=>{

    return(<>
     {/* <div className="bg-primary border"></div> */}
     <div className="text-center"><h1>Tours</h1></div>
     <div>
            {/* <div className={classes.tour_items}>
                <span className={classes.date}>JUL16</span>
                <span className={classes.place}>DETROIT, MI</span>
                <span className={classes.spec-place}>DTE ENERGY MUSIC THEATRE</span>
                <button className={classes.btn}>BUY TICKETS</button>
            </div> */}
            <div className="tour-item">
                <span class="tour-date">JUL19</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-place">TORONTO,ON</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-spec-place">BUDWEISER STAGE</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="bg-primary">BUY TICKETS</button>
            </div><hr />
            <div class="tour-item">
                <span class="tour-date">JUL 22</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-place"> BRISTOW, VA</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-spec-place">JIGGY LUBE LIVE</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="bg-primary">BUY TICKETS</button>
            </div><hr />
            <div class="tour-item">
                <span class="tour-date">JUL 29</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-place">PHOENIX, AZ</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-spec-place"> AK-CHIN PAVILION</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="bg-primary">BUY TICKETS</button>
            </div><hr />
            <div class="tour-item">
                <span class="tour-date">AUG 2</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-place">LAS VEGAS, NV</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-spec-place">T-MOBILE ARENA</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="bg-primary">BUY TICKETS</button>
            </div><hr />
            <div class="tour-item">
                <span class="tour-date">AUG 7</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-place">CONCORD, CA</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span class="tour-spec-place"> CONCORD PAVILION</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="bg-primary">BUY TICKETS</button>
            </div><hr />
        </div>
    </>)

}

export default Home;