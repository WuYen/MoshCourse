import Raven from "raven-js";

function init() {
  Raven.config("https://0f9c8f42fff34deeb81a678db8e79de4@sentry.io/1292951", {
    release: "1-0-0",
    environment: "development-test"
  }).install();
}

function log(error) {
  console.log(error);
  //Raven.captureException(error);
}

export default {
  init,
  log
};
