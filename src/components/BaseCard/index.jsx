import "@/styles/components/baseCard.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const BaseCard = (props) => {
  return (
    <div className="base-card">
      <div className="base-card__content">
        <div className="base-card__content__title">
          {props.title && (
            <div className="d-flex align-items-center gap-3">
              <p>{props.title}</p>
              <div
                className="rounded"
                style={{ backgroundColor: "#3C4352", padding: "1px" }}
              >
                {props.upArrow && (
                  <ArrowUpwardIcon color="success" fontSize="small" />
                )}

                {props.downArrow && (
                  <ArrowDownwardIcon color="error" fontSize="small" />
                )}
              </div>
            </div>
          )}
          {props.info && (
          <InfoOutlinedIcon
            style={{ cursor: "help", marginLeft:"auto" }}
            titleAccess={props.info}
            color="inherit"
          />
          )}
        </div>
        {props.subTitle && (
          <p className="base-card__content__sub-title">{props.subTitle}</p>
        )}
        {props.body}
      </div>
    </div>
  );
};

export default BaseCard;
