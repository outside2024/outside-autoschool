import Link from 'next/link';
import PropTypes from 'prop-types';
import CardBlogStyles from '@/components/CardBlog/CardBlog.styles';

const CardBlog = ({ card }) => (
  <CardBlogStyles>
    <Link href={`blog/${card.id}`} target="_blank" rel="noopener noreferrer nofollow">
      <div className="border">
        <p className="typoTextSecondary gap-card">{card.attributes.createdAt.slice(0, 10)}</p>
        <h2 className="typoColorBlack typoButtonPrimary eclipse gap-card">
          {card.attributes.title}
        </h2>
        <p className="typoTextSecondary eclipse-text">
          {card.attributes.textBlock[0]?.text.richText[0].children[0].text}
        </p>
      </div>
    </Link>
  </CardBlogStyles>
);

export default CardBlog;

CardBlog.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    attributes: PropTypes.shape({
      textBlock: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.shape({
            richText: PropTypes.arrayOf(
              PropTypes.shape({
                children: PropTypes.arrayOf(
                  PropTypes.shape({
                    text: PropTypes.string,
                  }),
                ),
              }),
            ),
          }),
        }),
      ).isRequired,
      title: PropTypes.string,
      createdAt: PropTypes.string,
      blog_articles: PropTypes.shape({
        data: PropTypes.arrayOf(
          PropTypes.shape({
            attributes: PropTypes.shape({ title: PropTypes.string }),
          }),
        ).isRequired,
      }),
    }),
  }).isRequired,
};
