import React, {useRef, useState} from "react";
import { Grid } from "react-styled-flexboxgrid";
import styled from "styled-components";
import Box from "reusecore/src/elements/Box";
import Card from "reusecore/src/elements/Card";
import InfoBlocks from "../components/InfoBlock";
import TextSearch from "../containers/Home/TextSearch";
import RecentPost from "../containers/Home/RecentPost";
import NearestPost from "../containers/Home/NearestPost";
import CategoryPost from "../containers/Home/Categories";
import withLayout from "../hoc/withLayout";
import PageMeta from "../components/PageMeta";
import { withApollo } from "../helpers/apollo";
import LocationSearch from "../containers/Home/LocationSearch"

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
    const bodyRef = useRef(null)
    const [enableScroll, setEnableScroll] = useState(true)
    enableScroll? enableBodyScroll(bodyRef.current): disableBodyScroll(bodyRef.current)
    return (
      <div ref={bodyRef}>
        <PageMeta
          title="Sell It"
          description="Place where you can buy &amp; sell products"
        />
      <Card as="section" {...bannerStyle}>
          <Grid style={{ padding: 0 }}>
            <InfoBlock
              className="banner-infoblock"
              title="A Community of Buy &amp; Sell"
              description="Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more around the world. Easily post your Ad and share the Ad in any social media. 🎁"
              textAlign="center"
              style={{ paddingLeft: "2rem", paddingRight: "2rem" }}
            />
            <LocationSearch enableScroll={enableScroll} setScroll = {setEnableScroll}/>
            <TextSearch />
            <CategoryPost />
          </Grid>
        </Card>
        <Box as="section" pt={60} pb={0}>
          <Grid>
            <RecentPost />
          </Grid>
        </Box>

        <Box as="section" pt={60} pb={40}>
          <Grid>
            <NearestPost location={location} />
          </Grid>
        </Box>
      </div>
    );
  })
);
