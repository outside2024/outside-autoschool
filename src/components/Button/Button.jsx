import PropTypes from 'prop-types';
import ButtonStyles from '@/components/Button/Button.styles';

const ButtonTypes = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
};

const ButtonContentTypes = {
  ICON: 'icon',
  TEXT: 'text',
};

const IconColors = {
  DARK: 'dark',
  LIGHT: 'light',
};

const GetButtonHeight = (btnType, contentType) => {
  if (btnType === ButtonTypes.PRIMARY) return 56;
  if (btnType === ButtonTypes.SECONDARY) return 36;
  if (btnType === ButtonTypes.TERTIARY) return contentType === ButtonContentTypes.ICON ? 32 : 48;
  return null;
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
}) => (
  <ButtonStyles
    $type={type}
    $btnWidth={btnWidth}
    $btnHeight={GetButtonHeight(btnType, contentType)}
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
  onBtnClick: PropTypes.func,
  iconColor: PropTypes.oneOf([IconColors.DARK, IconColors.LIGHT]),
  iconAngle: PropTypes.number,
};

Button.defaultProps = {
  type: 'button',
  btnWidth: null,
  onBtnClick: () => {},
  iconColor: IconColors.DARK,
  iconAngle: 0,
};
