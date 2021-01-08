/**@jsxRuntime classic */
/**@jsx jsx */

import { useEffect } from "react";
import { jsx } from "theme-ui";
import Image from "next/image";

const _sx = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    backgroundColor: "orange",
    color: "text",
  },
  image: {
    borderRadius: "50px",
  },
};

export default function User({ userInfo }) {
  return (
    <div sx={_sx.root} className="mx-3">
      {userInfo.picture.length > 0 ? (
        <Image
          sx={_sx.image}
          src={userInfo.picture}
          alt={userInfo.family_name}
          layout="fixed"
          width={40}
          height={40}
        />
      ) : (
        <span>{`${userInfo.given_name[0]}${userInfo.family_name[0]}`}</span>
      )}
    </div>
  );
}
