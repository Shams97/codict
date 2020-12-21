/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";

export default function DescNavItem({ social }) {
  const router = useRouter();
  const handleEdit = (e) => {
    e.preventDefault();
    router.replace("/edit");
  };

  const _SX = {
    socialItem: {
      backgroundColor: "background",
      color: "text",
      ":hover": {
        cursor: "pointer",
      },
    },
    socialItemIcon: {
      color: "primary",
      ":hover": { color: social.color },
    },
    socialItemSup: {
      fontSize: "12px",
      fontWeight: "bold",
    },
  };
  return social.name === "edit" ? (
    <li sx={_SX.socialItem}>
      <IconButton
        onClick={handleEdit}
        disableRipple
        aria-label={social.name}
        sx={{ ":focus": { outline: "none" } }}>
        <Badge>
          <FontAwesomeIcon
            icon={social.icon}
            width={20}
            height={20}
            sx={_SX.socialItemIcon}
          />
        </Badge>
      </IconButton>
      <sup sx={_SX.socialItemSup}>{social.count}</sup>
    </li>
  ) : (
    <li sx={_SX.socialItem}>
      <IconButton
        disableRipple
        aria-label={social.name}
        sx={{ ":focus": { outline: "none" } }}
      >
        <Badge>
          <FontAwesomeIcon
            icon={social.icon}
            width={20}
            height={20}
            sx={_SX.socialItemIcon}
          />
        </Badge>
      </IconButton>
      <sup sx={_SX.socialItemSup}>{social.count}</sup>
    </li>
  );
}
