const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);

module.exports = withTM({
  // your custom config goes here
  reactStrictMode: true,
});
