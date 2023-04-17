import React from "react"
import Card from "./Card"
function Main() {
    return(
            <main>
                <section>
                    <article>
                        <div className="summary">
                            <h2>Little Lemon</h2>
                            <h3>Chicago</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p>
                            <button>Reserve a table</button>
                        </div>
                    </article>
                    <article>
                        <div className="summary">
                        <img src="./assets/restauranfood.jpg" alt="hot dog"></img>
                        </div>
                    </article>
                </section>
                <Card />
            </main>
    )
}

export default Main
