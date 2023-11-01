import {useTranslation} from "next-i18next";
import StyledFAQ from "@/components/FAQ/FAQ.styles";
import {faqData} from "@/components/FAQ/data";
import Accordion from "@/components/FAQ/components/Accordion";



const FAQ = () => {
  const { t } = useTranslation();
  return (
  <StyledFAQ className="contentContainer">
    <div className="contentWrapper">
      <h2 className="typoColorBlack typoTitleSecondary">{t('faq.title')}</h2>
      <div className="accordionContainer">
        {faqData.map((question)=>(
          <Accordion
            key={question.id}
            question={question.question}
            answer={question.answer}
          />
        ))}

      </div>
    </div>
  </StyledFAQ>
  )};
export default FAQ;