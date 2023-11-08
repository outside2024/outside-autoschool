import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import CardBlogStyles from '@/components/CardBlog/CardBlog.styles';

const CardBlog = ({ card }) => {
  const { t } = useTranslation();

  return (
    <CardBlogStyles>
      <div className="border">
        <p className="typoTextSecondary gap-card">{card.date}</p>
        <h2 className="typoColorBlack typoButtonPrimary eclipse gap-card">{card.title}</h2>
        <p className="typoTextSecondary eclipse-text">{card.description}</p>
      </div>
    </CardBlogStyles>
  );
};

export default CardBlog;

CardBlog.propTypes = {
  card: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
