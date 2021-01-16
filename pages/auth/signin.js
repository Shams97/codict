/* eslint-disable react/prop-types */
/**@jsxRuntime classic */
/**@jsx jsx */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { providers, signIn } from "next-auth/client";
import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { Button, jsx, Text, Card } from "theme-ui";
import Layout from "../../components/layout/Layout";

const _sx = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    zIndex: "3000",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
  },
  card: {
    width: "25%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    "@media(max-width: 768px)": {
      width: "70%",
      height: "30%",
    },
  },
  button: {
    borderColor: "text",
    border: "1px solid",
    display: "flex",
    margin: "auto",
    alignItems: "center",
  },
};

export default function SignIn({ providers }) {
  const router = useRouter();
  useEffect(() => {
    console.log("query", router);
  }, []);
  return (
    <Fragment>
      <Layout includeSearchInput={false} bluredBg></Layout>
      <div sx={_sx.root}>
        <Card sx={_sx.card} className="text-center mx-auto p-2 border">
          <Text className="my-2">Login With :</Text>
          {Object.values(providers).map((provider, id) => {
            return (
              <Button
                key={id}
                backgroundColor="background"
                color="text"
                sx={_sx.button}
                onClick={() =>
                  signIn(provider.id, { callbackUrl: router.query.callbackUrl })
                }
              >
                <FontAwesomeIcon
                  className="mx-2"
                  icon={{ prefix: "fab", iconName: provider.id }}
                  width={20}
                  height={20}
                />{" "}
                {provider.name}
              </Button>
            );
          })}
          <Button
            onClick={() => {
              router.back();
            }}
          >
            Back
          </Button>
        </Card>
      </div>
    </Fragment>
  );
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
  };
};
