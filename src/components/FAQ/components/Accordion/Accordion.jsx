import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import AccordionStyles from '@/components/FAQ/components/Accordion/Accordion.styles';

const Accordion = ({ question, answer }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionStyles>
      <div className="accordionItem" onClick={() => setIsActive(!isActive)}>
        <div className="accordionQuestion">{t(`${question}`)}</div>
        <div className="accordionClose">{isActive ? '-' : '+'}</div>
      </div>
      <div className={`accordionAnswer ${isActive ? 'visible' : ''}`}>{t(`${answer}`)}</div>
    </AccordionStyles>
  );
};

export default Accordion;

Accordion.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
