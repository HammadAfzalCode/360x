import styles from "../styles/PricingCard.module.css";
import CustomButton from "./CustomButton";
import CustomDivider from "./CustomDivider";

// import "react-datepicker/dist/react-datepicker.css";


const PricingCard = ({ title, features, onGetQuote, fields }) => {

  return (
    <>
    
      <div className={styles.pricingCard}>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index} className={styles.feature}>
              <img
                className={styles.img}
                src="/icons/line-dash.svg"
                alt="check"
              />
              {feature}
            </li>
          ))}
        </ul>
        <CustomDivider />

        {fields.map((field, index) => (
          <div key={index}>
            {field.type === "select" && (
              // Code for the select field
              <select className={styles.dropdown}>
                {field.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}

            {field.type === "checkbox" && (
              // Code for the checkbox field
              <div className={styles.checkboxContainer}>
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  name={`checkbox-${index}`}
                  value={field.label}
                />
                <label
                  htmlFor={`checkbox-${index}`}
                  className={styles.checkboxLabel}
                >
                  {field.label}
                </label>
              </div>
            )}

            {field.type === "text" && (
              // Code for the text field
              <div className={styles.textContainer}>
                <input
                  type="text"
                  id={`text-${index}`}
                  name={`text-${index}`}
                  placeholder={field.placeholder}
                  className={styles.textField}
                />
              </div>
            )}

          

          </div>
        ))}

        <CustomButton onClick={onGetQuote}>Get Quotation</CustomButton>
      </div>
    </>
  );
};

export default PricingCard;
