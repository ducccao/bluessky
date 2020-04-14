import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchInput from "./SearchInput";
import Suggestions from "./Suggestions";
import SearchResult from "./SearchResult";

const usestyles = makeStyles((theme) => ({
  root: {},
  home_background: {
    height: "100%",
  },
  cl_white: {
    color: "white",
  },
  search_box: {
    height: "10%",
    padding: "15px",
  },
  result_box: {
    height: "90%",
  },
  //
  d_flex_end: {
    display: "flex",
    justifyContent: "flex-end",
  },
  d_flex_center: {
    display: "flex",
    justifyContent: "center",
  },
  time_and_icon: {
    alignItems: "center",
  },
  weather_status_icon: {
    height: 25,
    width: 25,
  },
  clock_icon: {
    height: 25,
    width: 25,
  },
  timer: {
    display: "flex",
  },

  mr_10: {
    marginRight: 10,
  },
  homeContent: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "20px 0",
    backgroundColor: "transparent",
  },
}));
//let log = console.log;

function RealTimeClock() {
  let clock = new Date();
  let hour = clock.getHours();
  let minute = clock.getMinutes();
  let second = clock.getSeconds();
  return { hour, minute, second };
}

function Home(props) {
  const classes = usestyles();
  const [completed, setCompleted] = React.useState(0);
  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 15; // không biết lấy độ chính xác của axios
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // log(this.state.foreData);
  let timer = RealTimeClock();
  return (
    <Box
      display="flex"
      justifyContent="around"
      flexDirection="column"
      alignItems="center"
      className={classes.home_background}
    >
      <Box
        className={classes.cl_white + " " + classes.search_box}
        width="80%"
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
      >
        <SearchInput />
      </Box>
      <Box className={classes.cl_white + " " + classes.result_box} width="100%">
        <Grid container className={classes.homeContent}>
          <Grid
            className={classes.d_flex_center + " " + classes.time_and_icon}
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
          >
            <div className={classes.timer}>
              <div
                id="time_icon"
                className={classes.mr_10 + " " + classes.clock_icon}
              >
                <svg viewBox="0 0 443.294 443.294">
                  <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
                  <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
                </svg>
              </div>
              <div id="real-time-clock">
                {timer.hour + ":" + timer.minute + ":" + timer.second}
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.d_flex_center + " " + classes.time_and_icon}
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
          >
            <div className={classes.weather_status_icon}>
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
              >
                <g>
                  <g>
                    <path
                      d="M410.909,123.091c-9.923,0-19.582,1.399-28.875,4.171c-21.786-58.498-77.836-98.106-141.477-98.106
			c-36.52,0-71.767,13.211-99.249,37.199c-23.92,20.879-40.581,48.653-47.758,79.232c-1.22-0.049-2.442-0.082-3.664-0.082
			C40.322,145.505,0,185.827,0,235.389c0,49.563,40.322,89.886,89.885,89.886h321.023c55.742,0,101.091-45.35,101.091-101.092
			C512,168.441,466.65,123.091,410.909,123.091z M410.909,295.275H89.885C56.864,295.275,30,268.411,30,235.389
			c0-33.021,26.864-59.885,59.886-59.885c4.252,0,8.489,0.445,12.597,1.323c8.105,1.736,16.073-3.43,17.805-11.531
			c0.056-0.262,0.085-0.522,0.127-0.784c0.167-0.606,0.312-1.222,0.405-1.861c4.121-28.484,18.403-54.656,40.217-73.696
			c22.017-19.217,50.259-29.801,79.522-29.801c54.967,0,102.847,36.868,116.916,89.805c0.2,1.679,0.671,3.352,1.473,4.951
			c3.715,7.404,12.729,10.396,20.134,6.681c9.922-4.978,20.631-7.502,31.829-7.502c39.2,0,71.092,31.892,71.092,71.092
			C482,263.383,450.108,295.275,410.909,295.275z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M109.584,346.257c-8.284,0-15,6.716-15,15v58.703c0,8.284,6.716,15,15,15s15-6.716,15-15v-58.703
			C124.584,352.973,117.868,346.257,109.584,346.257z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M241.584,346.257c-8.284,0-15,6.716-15,15v38.703c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-38.703
			C256.583,352.973,249.868,346.257,241.584,346.257z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M308.932,346.148c-8.284,0-15,6.716-15,15v58.703c0,8.284,6.716,15,15,15s15-6.716,15-15v-58.703
			C323.932,352.864,317.216,346.148,308.932,346.148z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M176.579,389.148c-8.284,0-15,6.716-15,15v63.697c0,8.284,6.716,15,15,15s15-6.716,15-15v-63.697
			C191.579,395.864,184.863,389.148,176.579,389.148z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M377.119,389.148c-8.284,0-15,6.716-15,15v63.697c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15v-63.697
			C392.119,395.864,385.403,389.148,377.119,389.148z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Suggestions />
            <SearchResult />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
