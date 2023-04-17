import React from "react"

function Card (){
    return(
   <div className="naviagtion">
    <div className="spec-btn">
            <div className="specials"><h2>Specials</h2></div>
            <div className="order-online"><button>Order Online</button></div>
        </div>
    <section className="card-sec">
        <article class="border">
            <img src="./assets/greek salad.jpg" alt="Greek Salad"></img>
            <h2>Greek Salad</h2>
            <h3 style={{color:"#EE9972"}}>$12.99</h3>
            <p>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </p>
        </article>
        
        <article class="border">
            <img src="./assets/bruchetta.svg" alt="Bruchetta"></img>
            <h2>Bruchetta</h2>
            <h3 style={{color:"#EE9972"}}>$5.99</h3>
            <p>
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
            </p>
        </article>
        
        <article class="border">
            <div className="box box3"><img src="./assets/lemon dessert.jpg" alt="Lemon Dessert"></img></div>
            <h2>Lemon Dessert</h2>
            <h3 style={{color:"#EE9972"}}>$5.00</h3>
            <p>
            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </p>
        </article>
    </section>
    </div>
    )
}

export default Card