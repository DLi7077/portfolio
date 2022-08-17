import React from "react";
import ICONS from "../../Assets/icons";

const classes = {
  icon: {
    width: "36px",
  },
  list: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "center",
    gap: "1rem",
  },
};

/**
 * @param {String[]} icons
 * @returns a list of icons
 */
export default function IconList(props) {
  return (
    <div style={classes.list}>
      {props.icons.map((icon, idx) => {
        return (
          ICONS[icon] && (
            <img src={ICONS[icon]} key={idx} style={classes.icon} alt={icon} />
          )
        );
      })}
    </div>
  );
}
