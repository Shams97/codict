/* eslint-disable react/prop-types */
/**@jsxRuntime classic */
/**@jsx jsx */

import { jsx } from "theme-ui";
import Image from "next/image";

const _sx = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "40px",
    height: "40px",
    borderRadius: "50px",
    color: "text",
  },
  image: {
    borderRadius: "50px",
  },
  name: {
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export default function User({ userInfo }) {
  return (
    <div sx={_sx.root} className="mx-4" title={userInfo.user.name}>
      {userInfo.user.image.length > 0 ? (
        <Image
          sx={_sx.image}
          src={userInfo.user.image}
          alt={userInfo.user.name}
          layout="fixed"
          width={40}
          height={40}
        />
      ) : (
        <span>{userInfo.user.name}</span>
      )}
    </div>
  );
}
