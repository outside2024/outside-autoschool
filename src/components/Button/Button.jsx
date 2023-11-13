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
  iconSize,
  btnHeight,
}) => (
  <ButtonStyles
    type={type}
    $iconSize={iconSize}
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
      <p className={btnType === ButtonTypes.SECONDARY ? 'typoColorWhite' : 'typoColorBlack'}>
        {content}
      </p>
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
  iconSize: PropTypes.number,
};

Button.defaultProps = {
  type: 'button',
  btnWidth: null,
  btnHeight: null,
  onBtnClick: () => {},
  iconColor: IconColors.DARK,
  iconAngle: 0,
  iconSize: null,
};
