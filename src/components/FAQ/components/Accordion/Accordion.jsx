import {useState} from "react";
import {useTranslation} from "next-i18next";



const Accordion = ({ question, answer }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{t(`${question}`)}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{t(`${answer}`)}</div>}
    </div>
  );
};

export default Accordion;
