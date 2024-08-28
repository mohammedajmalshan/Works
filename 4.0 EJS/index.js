import express from "express";

const app = express();

const port = 3000;
app.get("/", (req, res) => {
  const today = new Date("July 08, 2024 12:30:00");
  const day = today.getDay();
  // console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "a weekend";
    adv = "it's time to relax. Have fun.";
  }
  res.render("index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard",
  });
});


app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
