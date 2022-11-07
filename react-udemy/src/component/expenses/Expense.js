import "./Expense.css";
import Card from "../Card.js";
import { useContext } from "react";
import Context from "../../Context";
import Date from "./Date.js";
import "../Card.css";

function Expense(props) {
  let ctx = useContext(Context);
  let handleDelete = () => {
    fetch(
      `https://react1-9a97e-default-rtdb.firebaseio.com/expenses/${props.id}.json`,
      { method: "DELETE" }
    ).then((response) => {
      ctx.reFetch(Math.random());
    });
  };

  return (
    <div onClick={handleDelete}>
      <Card className="expense-item">
        <Date date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
      </Card>
    </div>
  );
}
export default Expense;
