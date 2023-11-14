import Link from 'next/link';
import PropTypes from 'prop-types';
import moment from "moment/moment";
import CardBlogStyles from '@/components/CardBlog/CardBlog.styles';

const CardBlog = ({ card }) => {
  const description = card.attributes.textBlock[0]?.text.richText.reduce(
    (res, item) => [...res, ...item.children.map((subItem) => subItem.text)],
    [],
  );

  const date = moment(card.attributes.createdAt).format('YYYY-MM-DD');
  return (
    <CardBlogStyles>
      <Link href={`blog/${card.attributes.slug}`}>
        <div className="border">
          <p className="typoTextSecondary gap-card">{date}</p>
          <h2 className="typoColorBlack typoButtonPrimary eclipse gap-card">
            {card.attributes.title}
          </h2>
          <p className="typoTextSecondary eclipse-text">{description?.join(' ')}</p>
        </div>
      </Link>
    </CardBlogStyles>
  );
};
export default CardBlog;

CardBlog.propTypes = {
  card: PropTypes.shape({
    slug: PropTypes.string,
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
      ),
      slug: PropTypes.string,
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
