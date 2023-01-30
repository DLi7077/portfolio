import PopeyesLogo from "../Assets/icons/Popeyes.png";
import PopeyesDevin from "../Assets/people/popeyes_devin.jpg";

import McDonaldsLogo from "../Assets/icons/McDonalds.png";
import McDonaldsDevin from "../Assets/people/mcdonalds_devin.jpg";

export const WORK_EXPERIENCES = [
  {
    title: "Undergraduate Teaching Assistant",
    highlight_color: "#D888FF",
    tools_used: ["C++", "Github"],
    link: "https://dli7077.github.io/katsudon-optimizer-client/",
    external_links: [],
    slides : [
      "https://www.hunter.cuny.edu/artsci/pressroom/slideshow-a-s-graduate-education/hunter-flag-and-street/image"
    ],
    tabs: [
      {
        label: "Stuff that happened",
        content: (
          <div className="text" style={{ width: "100%" }}>
            <ul>
              <li>CUNY - Hunter College</li>
              <li>Just tutored Data Structures and Algorithms in C++</li>
            </ul>
          </div>
        ),
      },
    ],
    date: "August 2022 - Present",
  },
  {
    highlight_color: "#F58522",
    title: (
      <>
        <img
          src={PopeyesLogo}
          style={{ height: "48px", width: "auto" }}
          alt="popeyes"
        />
        <div className="title">Popeyes Louisiana Kitchen</div>
      </>
    ),
    tools_used: [
      "Tongs",
      "Gloves",
      "Frying Batter",
      "Frying Baskets",
      "Mops",
      "Cash",
      "Toaster",
    ],
    link: "https://dli7077.github.io/katsudon-optimizer-client/",
    slides: [PopeyesDevin],
    external_links: [],
    tabs: [
      {
        label: "Stuff that happened",
        content: (
          <div className="text" style={{ width: "100%" }}>
            <ul>
              <li>Served fresh juicy chicken to 400+ customers per weekend</li>
              <li>
                Pipeline orders and processes to reduce average wait time per
                customer
              </li>
              <li>Speedran customer orders during rush hours</li>
              <li>I can make a Popeyes Chicken Sandwich with one hand</li>
              <li>
                Learned enough Chinese Cantonese to communicate with customers
              </li>
            </ul>
          </div>
        ),
      },
    ],
    date: "October 2019 - August 2021",
  },
  {
    highlight_color: "#FA4E5D",
    title: (
      <>
        <img
          src={McDonaldsLogo}
          style={{ height: "48px", width: "auto" }}
          alt="mcd"
        />
        <div className="title">McDonald's</div>
      </>
    ),
    tools_used: ["Gloves", "Frying Baskets", "Mops", "Cash"],
    link: "https://dli7077.github.io/katsudon-optimizer-client/",
    slides: [McDonaldsDevin],
    external_links: [],
    tabs: [
      {
        label: "Stuff that happened",
        content: (
          <div className="text" style={{ width: "100%" }}>
            <ul>
              <li>Handled cash register while taking orders</li>
              <li>
                Used highschool spanish to communicate with spanish speakers
              </li>
            </ul>
          </div>
        ),
      },
    ],
    date: "May 2018 - March 2019",
  },
];
