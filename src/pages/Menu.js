import Logo from "../assets/photos/logo-fudd.png";
import { Container, Row } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row className="mb-4">
          <div className="logo">
            <img src={Logo} />
          </div>
        </Row>
      </Container>

      <Container fluid>
        <div className="mb-4 text-center">
          GF = GULTEN FREE | GFO = GULTEN FREE ON REQUEST | V = VEGETERIAN | VE
          = VEGAN | DF = DAIRYFREE | DFO = DAIRY FREE ON REQUEST
        </div>
        <section className="mx-3">
          <div className="menu-title">BREAKFAST UNTIL 10:30AM</div>
          <ul className="menu-list">
            <li>
              <div className="item">
                <div className="item-name">ORGANIC EGGS (GFO)</div>
                <div className="discription">
                  Poached, scrambled or fried eggs, sourdough, pepe Saya butter
                </div>
              </div>
              <div className="price">$14.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">BACON & EGG ROLL (GFO)</div>
                <div className="discription">
                  Rindless premium bacon, folded eggs, house sauce on milk bun
                </div>
              </div>
              <div className="price">$12.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">CHORIZO EGGS (GFO)</div>
                <div className="discription">
                  Poached eggs, Cypriot halloumi, chorizo, spiced harissa,
                  parmesan on rye sourdough.
                </div>
              </div>
              <div className="price">$19.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">CROSSAINT BENNY (GFO) </div>
                <div className="discription">
                  Poached eggs, Rindless premium bacon/ smoked salmon, spiced
                  hollandaise, wilted spinach on Croissant
                </div>
              </div>
              <div className="price">$18.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">AVO BRUSCHETTA (V, GFO)</div>
                <div className="discription">
                  Smashed avocado, almond nut butter, Ricotta, Heirloom
                  tomatoes, mix herbs, balsamic glaze on rye sourdough
                </div>
              </div>
              <div className="price">$17.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">SCHMEAR & TOMATO BAGEL (v)</div>
                <div className="discription">
                  Marinated tomatoes, capers, onion and whipped Philadelphia
                </div>
              </div>
              <div className="price">$13.00</div>
            </li>
            <div className="extra">
              <div className="sub-title text-center">Ultimate Upgrades</div>
              <li>
                <div>2 Hash brown</div>
                <div>$5</div>
              </li>
              <li>
                <div>Free-Range Egg</div>
                <div>$3</div>
              </li>
              <li>
                <div>Grilled chicken</div>
                <div>$5</div>
              </li>
              <li>
                <div>Smashed Avocado</div>
                <div>$5</div>
              </li>
              <li>
                <div>Smoked salmon</div>
                <div>$5</div>
              </li>
              <li>
                <div>Rindless premium bacon</div>
                <div>$5</div>
              </li>
              <li>
                <div>Chorizo</div>
                <div>$5</div>
              </li>
            </div>
          </ul>
        </section>
        <section className="mx-3">
          <div className="menu-title">LUNCH FROM 10:30AM</div>
          <div className="rakkas"> BURGERS AND SANDWICHES</div>
          <ul className="menu-list">
            <li>
              <div className="item">
                <div className="item-name">FISH BURGER</div>
                <div className="discription">
                  Battered Fish, pickles, onions, House tartare and ice berge
                </div>
              </div>
              <div className="price">$18.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">PERI PERI CHICKEN BURGER</div>
                <div className="discription">
                  Marinated grilled chicken, tomatoes, peri peri mayo, pickles,
                  American cheese & iceberg
                </div>
              </div>
              <div className="price">$17.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">DOUBLE SMASHED BURGER</div>
                <div className="discription">
                  Beef patties, bacon,American cheese, onion, pickles & house
                  mayo
                </div>
              </div>
              <div className="price">$17.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">CAULIFLOWER STEAK BURGER (V) </div>
                <div className="discription">
                  Buttermilk fried cauliflower, homemade pesto, pickle cabbage,
                  tomatoes, American cheese & house mayo
                </div>
              </div>
              <div className="price">$15.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">PRAWN ROLL</div>
                <div className="discription">
                  Cocktail mix prawn, , iceberg, chili crips, fried shallots &
                  sweet chili mayo
                </div>
              </div>
              <div className="price">$16.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">SCHNITZEL SANDWICH</div>
                <div className="discription">
                  Herb garlic chicken breast, onion, lettuce, American cheese &
                  pepper mayo on white bead
                </div>
              </div>
              <div className="price">$18.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">REUBEN SANDWITCH</div>
                <div className="discription">
                  Sliced smoked beef, dijon mustard, pickled cabbage, swiss
                  cheese with house mayo
                </div>
              </div>
              <div className="price">$18.00</div>
            </li>
            <div className="extra">
              <div className="sub-title text-center">Ultimate Upgrades</div>
              <li>
                <div>ADD FRIES</div>
                <div>$5</div>
              </li>
              <li>
                <div>ADD CHILLI</div>
                <div>$3</div>
              </li>
            </div>
          </ul>
        </section>

        <section className="mx-3">
          <div className="h1 text-center rakkas">MAINS</div>
          <ul className="menu-list">
            <li>
              <div className="item">
                <div className="item-name">CHICKEN SCHNITZEL</div>
                <div className="discription">
                  Herb garlic chicken breast, chips, garden salad & gravy.
                </div>
              </div>
              <div className="price">$22.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">FISH AND CHIPS</div>
                <div className="discription">
                  Spiced battered fish, chips, garden salad, lemon & home-made
                  tartare sauce.
                </div>
              </div>
              <div className="price">$23.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">PRAWN & CHORIZO LINGUINE (DFO)</div>
                <div className="discription">
                  Garlic prawns, chorizo, cherry tomato, Spinach, charred tomato
                  tapenade, chilli with parmesan cheese
                </div>
              </div>
              <div className="price">$23.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">SPINACH AND RICOTTA RAVIOLI (V)</div>
                <div className="discription">
                  Homemade creamy pesto, semi dried tomatoes with parmesan
                  cheese
                </div>
              </div>
              <div className="price">$20.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">DEVIL WINGS 10Pcs (DFO)</div>
                <div className="discription">
                  Served with chips marinated hot sauce and garlic aioli
                </div>
              </div>
              <div className="price">$16.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">
                  FUDDHUNGERS BBQPORK RIBS (GF, DF)
                </div>
                <div className="discription">
                  Full racked Braised Pork ribs served with chip and salad
                </div>
              </div>
              <div className="price">$38.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">
                  FUDDHUNGERS RIBS& WINGS COMBO (GF, DF)
                </div>
                <div className="discription">
                  Half rack BBQ pork ribs and 5 wings served with chips and
                  salad
                </div>
              </div>
              <div className="price">$35.00</div>
            </li>
            <div className="extra">
              <div className="d-flex justify-content-between">
                <div className="sub-title text-center">Kiddie Bites</div>
                <div>$10.00</div>
              </div>
              <li>
                <div>ADD FRIES</div>
              </li>
              <li>
                <div>ADD CHILLI</div>
              </li>
            </div>
          </ul>
        </section>

        <section>
          <div className="h1 text-center rakkas">DRINKS MENU</div>
          <div className="rakkas pt-5"> COFFEE</div>
          <ul className="menu-list">
            <li>
              <div className="item">
                <div className="item-name">WHITE</div>
              </div>
              <div className="price">S $4.50</div>
              <div className="price"> L $5.50</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">BLACK</div>
              </div>
              <div className="price">S $4.50</div>
              <div className="price"> L $5.50</div>
            </li>
            <div className="rakkas pt-5">ICED</div>
            <li>
              <div className="item">
                <div className="item-name">ICED LATTE </div>
              </div>
              <div className="price">$7.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">ICED COFFEE </div>
              </div>
              <div className="price">$9.00</div>
            </li>

            <li>
              <div className="item">
                <div className="item-name">ICED LONG BLACK </div>
              </div>
              <div className="price">$6.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">ICED MOCHA </div>
              </div>
              <div className="price">$9.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">ICED CHOCOLATE</div>
              </div>
              <div className="price">$9.00</div>
            </li>

            <div className="rakkas pt-5">NON-COFFEE</div>

            <li>
              <div className="item">
                <div className="item-name"> HOT CHOCOLATE </div>
              </div>
              <div className="price">(s) $4.50</div>
              <div className="price"> (l) $5.50</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">CHAI LATTE </div>
              </div>
              <div className="price">(s) $4.50</div>
              <div className="price"> (l) $5.50</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">MATCHA LATTE</div>
              </div>
              <div className="price">$6.00</div>
              <div className="price"> (iced) + $1.00</div>
            </li>
            <li>
              <div className="item">
                <div className="item-name">BABYCHINO</div>
              </div>
              <div className="price">$2.50</div>
            </li>
          </ul>

          <div className="rakkas pt-5"> TEAS</div>
          <ul className="menu-list">
            <li>
              <div className="item">
                <div className="item-name">
                  {" "}
                  English Breakfast Tea | Earl Grey | Peppermint |<br />{" "}
                  Lemongrass Ginger | Green Tea
                </div>
              </div>
              <div className="price">$4.00</div>
            </li>
          </ul>

          <div className="rakkas pt-5">HOUSE SPECIALS</div>
          <ul className="menu-list">
            <li>
              <div className="item">
                <div className="item-name">
                  {" "}
                  ICED MILO | PEACH ICED TEA | LEMONADE |
                </div>
              </div>
              <div className="price">$9.00</div>
            </li>
            <div className="extra">
              <div className="d-flex justify-content-between">
                <div>EXTRA SHOT/DECAF/ SYRUPS</div>
                <div>$0.50</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>ALTERNATIVE MILKS</div>
                <div>$0.80</div>
              </div>
            </div>
          </ul>
        </section>
      </Container>

      <Container>
        <footer className="text-center py-2">
          <small> @ Fudd Hungers | 2024</small>
        </footer>
      </Container>
    </>
  );
}

export default Menu;
