import React, { useRef, useState, createContext } from "react";
import { Grid } from "react-styled-flexboxgrid";
import { useRouter } from "next/router";
import styled from "styled-components";
import Box from "reusecore/src/elements/Box";
import Card from "reusecore/src/elements/Card";
import InfoBlocks from "../../components/InfoBlock";
import TextSearch from "../../containers/Home/TextSearch";
import PostByLocation from "../../containers/Home/PostByLocation";
import CategoryPost from "../../containers/Home/Categories";
import withLayout from "../../hoc/withLayout";
import PageMeta from "../../components/PageMeta";
import { withApollo } from "../../helpers/apollo";
import LocationSearch from "../../containers/Home/LocationSearch";
import { LocationContext, ScrollContext } from "../../contexts/HomepageContext";

// Static Images
import BannerImage from "core/static/images/banner.png";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const InfoBlock = styled(InfoBlocks)`
  @media only screen and (max-width: 767px) {
    h2 {
      font-size: 28px;
    }

    p {
      font-size: 15px;
    }
  }
`;

const bannerStyle = {
  pt: [60, 80],
  pb: [95, 180],
  bg: "#f3f3f3",
  backgroundImage: `url(${BannerImage})`,
  backgroundRepeat: "repeat-x",
  backgroundPosition: "bottom center",
};

export default withApollo(
  withLayout(({ location, ...props }) => {
    const bodyRef = useRef("home");
    const [enableScroll, setEnableScroll] = useState(true);
    const router = useRouter()
    const query = router.query
    const [searchLocation, setSearchLocation] = useState(query.location);

    enableScroll
      ? enableBodyScroll(bodyRef.current)
      : disableBodyScroll(bodyRef.current);
    return (
      <div ref={bodyRef}>
        <PageMeta
          title="Sell It"
          description="Place where you can buy, sell &amp; donate products"
        />
        <Card as="section" {...bannerStyle}>
          <Grid style={{ padding: 0 }}>
            <InfoBlock
              className="banner-infoblock"
              title="A Community of Buy, Sell &amp; Donate"
              description="Buy and sell everything from used cars to mobile phones and computers, or search for property, skillsets, jobs, charities and more around Rwanda. Easily post your Ad and share the Ad in any social media. 🎁"
              textAlign="center"
              style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            />
            <LocationContext.Provider
              value={{
                location: searchLocation,
                changeLocation: (value) => setSearchLocation(value),
              }}
            >
              <ScrollContext.Provider
                value={{
                  enableScroll: true,
                  setScroll: () => setEnableScroll(!enableScroll),
                }}
              >
                <LocationSearch />
              </ScrollContext.Provider>
            </LocationContext.Provider>

            <TextSearch />
            <CategoryPost />
          </Grid>
        </Card>
    
          <Box as="section" pt={60} pb={40}>
            <Grid>
            <LocationContext.Provider
              value={{
                location: searchLocation,
                changeLocation: (value) => setSearchLocation(value),
              }}
            >
              <PostByLocation getLocation={location} />
              </LocationContext.Provider>
            </Grid>
          </Box>
      </div>
    );
  })
);
