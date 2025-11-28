import { useParams, useNavigate } from "react-router-dom";
import dish9 from "../../assets/dish9.avif";
import dish8 from "../../assets/dish8.avif";
import dish10 from "../../assets/dish10.avif";
import dish11 from "../../assets/dish11.avif";
import dish12 from "../../assets/dish12.avif";
import dish13 from "../../assets/dish13.avif";
import dish17 from "../../assets/dish17.avif";
import dish15 from "../../assets/dish15.avif";
// import dish15 from "../assets/dish15.avif";
import "./recipe.css";

const data = {
  Salad: {
    img: dish9,
    time: "10 min",
    level: "Easy",
    ingredients: [
      "Onion",
      "Tomato",
      "Cucumber",
      "Olive oil",
      "Lemon juice",
      "Salt & Pepper",
    ],
    description:
      "A refreshing healthy mix of veggies, perfect for summer days.",
    steps: [
      "Sabhi veggies ko baarik kaat lo",
      "Ek bowl me sabko mix karo",
      "Salt & pepper daalo",
      "Lemon juice daalo",
      "Serve karo",
    ],
  },
  Samosa: {
    img: dish10,
    time: "45 min",
    level: "Hard",
    ingredients: ["Aloo", "Maida", "Masale", "Oil"],
    description: "Crispy fried triangles stuffed with spicy potato filling.",
    steps: [
      "Aloo ka masala tayar karo (boiled aloo, masale ke sath mix).",

      "Maida ka dough gundo aur patla bel lo.",

      "Filling daal ke triangle shape me fold karo.",

      "Garam tel me golden brown hone tak fry karo.",
    ],
  },
  "Pav-Bhaji": {
    img: dish12,
    time: "40 min",
    level: "Medium",
    ingredients: [
      "Potato, Tomato, Capsicum, Peas",
      "Pav bhaji masala",
      "Butter",
      "Pav",
    ],
    description:
      "Mumbai street style pav bhaji – spicy mashed vegetables served with buttery pav.",
    steps: [
      " Sab veggies ko ubal lo aur mash karo.",

      "Pan me butter garam karo, onion-tomato bhuno.",

      "Pav bhaji masala aur mashed veggies daal ke 10 min tak cook karo.",

      "Pav ko butter me sekh lo.",

      "Bhaji ke sath serve karo.",
    ],
  },
  Cauliflower: {
    img: dish8,
    time: "25 min",
    level: "Medium",
    ingredients: [
      "Cauliflower",
      "Onion",
      "Tomato",
      "Dhaniya",
      "Haldi, Mirch powder, Namak",
      "Oil",
    ],
    description:
      "Simple aur tasty gobi ki sabzi jo roti ya parathe ke sath perfect lagti hai",
    steps: [
      "Gobi ko wash karke chhote pieces me kaat lo.",

      "Pan me tel garam karo aur onion-tomato bhuno.",

      "Masale daal ke gobi add karo.",

      "Dhak kar 10-15 min tak pakao jab tak soft na ho jaye.",
      "Garam-garam serve karo.",
    ],
  },
  Idli: {
    img: dish11,
    time: "30 min",
    level: "Easy",
    ingredients: [
      "Idli batter",
      "Oil(greasing ke liye)",
      "Water(steaming ke liye)",
    ],
    description:
      "Soft aur fluffy South Indian dish, steamed aur light breakfast ke liye perfect.",
    steps: [
      "Idli batter ko thoda pani mila ke smooth karo.",
      "Idli mold ko grease karo aur batter daal do.",

      "10–12 min tak steam karo.",

      "Coconut chutney aur sambhar ke sath serve karo.",
    ],
  },
  Momo: {
    img: dish13,
    time: "35 min",
    level: "Medium",
    ingredients: [
      "Maida",
      "Cabbage",
      "Carrot",
      "Onion",
      "Soy sauce, Salt, Pepper",
    ],
    description:
      "Soft steamed dumplings filled with spicy vegetable ya chicken stuffing.",
    steps: [
      " Maida ka dough gundo aur thoda rest karne do.",

      "Stuffing ke liye veggies ko chop karke sauce aur masale me mix karo.",

      "Dough ke chhote balls banao, patla belke stuffing bharo.",

      "Steam me 10-12 min tak cook karo.",

      "Spicy chutney ke sath serve karo.",
    ],
  },
  "Chicken-wings": {
    img: dish17,
    time: "45 min",
    level: "Hard",
    ingredients: [
      "Chicken wings",

      "Maida & cornflour",

      "Red chili, garlic paste",

      "Sauce & oil",
    ],
    description:
      "Crispy aur juicy chicken wings coated with spicy sauce – party starter ke liye best.",
    steps: [
      " Chicken wings ko wash karke masale me marinate karo.",

      "Maida aur cornflour me coat karo.",

      "Deep fry karo jab tak golden brown ho jaye.",

      "Sauce me toss karo aur serve karo.",
    ],
  },
  Appe: {
    img: dish15,
    time: "25 min",
    level: "Easy",
    ingredients: [
      "Idli batter",

      "Mustard seeds",

      "Curry leaves",

      "Onion, green chili",
    ],
    description:
      "South Indian style snack jo rice batter se banta hai, crispy outside aur soft inside.",
    steps: [
      "Batter me sab ingredients mix karo.",

      "Appe pan ko grease karo aur thoda batter daal do.",

      "Dono sides golden brown hone tak cook karo.",

      "Coconut chutney ke sath serve karo.",
    ],
  },
};

const Recipe = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const recipe = data[name];

  if (!recipe) return <h2>Recipe not found 😅</h2>;

  return (
    <div className="recipe-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      {/* Image Section */}
      <img src={recipe.img} alt={name} className="recipe-img" />

      {/* Info Row */}
      <div className="recipe-header">
        {/* Left side */}
        <div className="header-left">
          <div className="info-item">
            <i className="fa-solid fa-clock"></i> {recipe.time}
          </div>
          <div className="info-item">
            <i className="fa-solid fa-star"></i> {recipe.level}
          </div>
        </div>

        {/* Center name */}
        <div className="recipe-name">{name}</div>

        {/* Right bookmark */}
        <div className="bookmark">
          <i className="fa-solid fa-bookmark"></i>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="recipe-content">
        {/* Left: Ingredients */}

        {/* Middle: Description */}
        <div className="description">
          <h3>Description</h3>
          <p>{recipe.description}</p>
        </div>

        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </div>

        {/* Right: Steps */}
        <div className="steps">
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((st, i) => (
              <li key={i}>{st}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
