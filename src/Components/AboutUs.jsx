import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setHistory } from "../action/GlobalAction";
import AdsSection from "./AdsSection";
import AdsSectionBottom from "./AdsSectionBottom";
import AdsSectionTopMobile from "./AdsSectionTopMobile";
import AdsSectionBottomMobile from "./AdsSectionBottomMobile";

import { Hidden } from "@material-ui/core";

const AboutUs = () => {
  const colorSelector = useSelector((state) => state.globalData.colorState);
  let history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setHistory(history.location.pathname));
  }, []);

  let handelHome = () => {
    history.push("/home");
  };

  return (
    <>
      <Hidden only={["md", "lg", "xl"]}>
        <AdsSectionTopMobile />
      </Hidden>
      <Hidden only={["sm", "xs"]}>
        <AdsSection />
      </Hidden>

      <style>{`
#aboutus {
  min-height: calc(100vh - 149px - 64px - 250px );
}
#aboutusdark {
  min-height: calc(100vh - 149px - 64px - 250px  );
}
`}</style>

      <div id={colorSelector ? "aboutusdark" : "aboutus"}>
        <div id="socialbanner"></div>
        <div
          id="topbanner"
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        ></div>
        <h1>How does it work?</h1>
        <p>
          At GlobalTop20 we have developed software that takes a snapshot of
          data once a day and calculates the Top 20 (YouTube) videos viewed
          globally over the last 24 hours, and the Hottest Top 20 (YouTube)
          videos that have just been released, globally.
        </p>
        <br />
        <p>
          Our database can be searched by Date, Region, and Subject letting the
          viewer discover many Top 20 and Hot 20 variations, including the Top
          20 Music, Sports, News videos and many more. Furthermore,
          GlobalTop20.com lets you search YouTube’s various Regions, Globally or
          Individually. So you can take the time to find out what’s popular in
          different regions of the world. Lastly, you can search by Date, which
          means in the future GlobalTop20 can be like a time-machine, letting
          you go back and view what was popular on a specific day in history.
          You can easily track what’s going on now, or see what people were
          watching on your birthday, for example.
        </p>
        <br />

        {/* <h2>GlobalTop20.com can be:</h2>
        <br />

        <ol>
          <li>
            A Global view on the world that crosses all predefined regions.
          </li>
          <li>
            A bridge across all geographic locations based on objective measures
            (views) that shine credit on the videos that stand out worldwide.
          </li>
          <li>
            Part of your daily routine: see what’s been happening in the world
            tailored to your search interests. [By logging in and setting up
            your own custom searches you will be able to auto-play custom Top 20
            lists just for you. (Still in development)]
          </li>
          <li>
            A searchable time capsule that will keep a record of the most
            popular videos in history.
          </li>
        </ol> */}

        <br />
        <div style={{ display: "flex" }}>
          <h3>Click for</h3>
          <h3
            style={{
              cursor: "pointer",
              color: colorSelector ? "#87ceeb" : "blue",
              textDecoration: "underline",
              marginLeft: "10px",
            }}
            onClick={handelHome}
          >
            SearchPage/Homepage
          </h3>
        </div>
        <div
          id="bottombanner"
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        ></div>

        {/* <h2>Charity:</h2>
      <br />
      <p>
        At GlobalTop20 we hope to make a difference in the quality of life
        around the world by donating 50% of our revenue to Mental Health
        Charities. Mental Health is an ever increasing issue, especially during
        the Covid-19 Pandemic, and is something that can affect anyone anywhere.
      </p> */}
      </div>

      <Hidden only={["md", "lg", "xl"]}>
        <AdsSectionBottomMobile />
      </Hidden>
      <Hidden only={["sm", "xs"]}>
        <AdsSectionBottom />
      </Hidden>

      <div style={{ marginBottom: "20px" }}></div>
    </>
  );
};

export default AboutUs;
