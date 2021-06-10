import { FabStyled, LightTooltip } from "./style";
import Zoom from "@material-ui/core/Zoom";

const FloatButton = ({ icon: Icon, title, greenIcon = false, ...rest }) => {
  return (
    <LightTooltip
      title={title}
      placement="top"
      arrow
      TransitionComponent={Zoom}
    >
      <FabStyled
        aria-label={title}
        color="secondary"
        size="small"
        greenIcon={greenIcon}
        {...rest}
      >
        {<Icon />}
      </FabStyled>
    </LightTooltip>
  );
};

export default FloatButton;
