import { useContext, useState } from "react";
import "./orderpage.css";
import { Context } from "../..";

const OrderPage = () => {
  const { ticket } = useContext(Context);
  console.log(ticket._selectedFlight);
  // form states
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");

  // form handlers

  // card states
  const [cardNumber, setCardNumber] = useState("");
  const [cardNameSurname, setCardNameSurname] = useState("");
  const [cardMMYY, setCardMMYY] = useState("");
  const [cardCVV, setCardCVV] = useState("");

  // card Handlers
  const cardNumberHandler = (e) => {
    const value = e.target.value
      .replace(/\D+/g, "")
      .toString()
      .replace(/\d{4}(?=.)/g, "$& ");
    if (value.length <= 19) {
      setCardNumber(value);
    } else {
      return;
    }
  };

  const cardNameSurnameHandler = (e) => {
    const value = e.target.value.replace(/[\d]/g, "").toUpperCase();
    if (value.length <= 20) {
      setCardNameSurname(value);
    } else {
      return;
    }
  };

  const cardMMYYHandler = (e) => {
    const value = e.target.value
      .replace(/\D+/g, "")
      .toString()
      .replace(/\d{2}(?=.)/g, "$&/");
    if (value.length <= 5) {
      setCardMMYY(value);
    } else {
      return;
    }
  };

  const cardCVVHandler = (e) => {
    const value = e.target.value.replace(/\D+/g, "");
    if (value.length <= 3) {
      setCardCVV(value);
    } else {
      return;
    }
  };
  return (
    <div className="OrderPage">
      <div className="OrderPage__container">
        <div className="OrderPage__content">
          <div className="ContactForm__content">
            <div className="ContactForm__title">КОНТАКТНАЯ ИНФА</div>
            <form className="form">
              <input
                className="form__input"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Номер"
              />
              <input
                className="form__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Имя"
              />
              <input
                className="form__input"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Фамилия"
              />
              <input
                className="form__input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Дата рождения"
              />
              <input
                className="form__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Почта"
              />
              <button className="form__button">ПОДТВЕРДИТЬ</button>
            </form>
          </div>
          <div className="purchase__content">
            <div className="card">
              <input
                className="card__input__number"
                value={cardNumber}
                onChange={(e) => cardNumberHandler(e)}
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
              <div className="card__bottom">
                <input
                  className="card__input__namesurname"
                  value={cardNameSurname}
                  onChange={(e) => cardNameSurnameHandler(e)}
                  placeholder="NAME SURNAME"
                />
                <input
                  className="card__input__mmyy"
                  value={cardMMYY}
                  onChange={(e) => cardMMYYHandler(e)}
                  placeholder="MM/YY"
                />
                <input
                  className="card__input__cvv"
                  value={cardCVV}
                  onChange={(e) => cardCVVHandler(e)}
                  placeholder="CVV"
                />
              </div>
            </div>
            <div className="total">
              <div className="choosen__categories">
                <div className="choosen__hotel">
                  {ticket._selectedHotel.title}
                </div>
                <div className="choosen__flight">
                  {ticket._selectedFlight.title}
                </div>
                <div className="choosen__ticket"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
