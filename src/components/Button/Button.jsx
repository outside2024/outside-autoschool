import PropTypes from 'prop-types';
import ButtonStyles from '@/components/Button/Button.styles';

export const ButtonTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

export const ButtonContentTypes = {
  ICON: 'icon',
  TEXT: 'text',
};

export const IconColors = {
  DARK: 'dark',
  LIGHT: 'light',
};

const Button = ({
  type,
  btnType,
  contentType,
  content,
  btnWidth,
  onBtnClick,
  iconColor,
  iconAngle,
  btnHeight,
}) => (
  <ButtonStyles
    type={type}
    $btnWidth={btnWidth}
    $btnHeight={btnHeight}
    $borderWidth={contentType === ButtonContentTypes.ICON ? '1px' : '2px'}
    $iconAngle={iconAngle}
    onClick={onBtnClick}
    className={`${btnType} ${
      btnType === ButtonTypes.SECONDARY ? 'typoButtonSecondary' : 'typoButtonPrimary'
    }`}
  >
    {contentType === ButtonContentTypes.TEXT ? (
      <p className="typoColorBlack">{content}</p>
    ) : (
      <i className={`icon ${iconColor} ${content}`} />
    )}
  </ButtonStyles>
);
export default Button;

Button.propTypes = {
  type: PropTypes.string,
  btnType: PropTypes.oneOf([ButtonTypes.PRIMARY, ButtonTypes.SECONDARY, ButtonTypes.TERTIARY])
    .isRequired,
  contentType: PropTypes.oneOf([ButtonContentTypes.ICON, ButtonContentTypes.TEXT]).isRequired,
  content: PropTypes.string.isRequired,
  btnWidth: PropTypes.number,
  btnHeight: PropTypes.number,
  onBtnClick: PropTypes.func,
  iconColor: PropTypes.oneOf([IconColors.DARK, IconColors.LIGHT]),
  iconAngle: PropTypes.number,
};

Button.defaultProps = {
  type: 'button',
  btnWidth: null,
  btnHeight: null,
  onBtnClick: () => {},
  iconColor: IconColors.DARK,
  iconAngle: 0,
};
