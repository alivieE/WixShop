import React from "react";
import GoogtoEat from "../../components/GoodtoEat/GoogtoEat";
import s from "./About.module.css";
import images from "../../assets/index";

const About = () => {
  return (
    <div className={s.About}>
      <GoogtoEat className={s.GoogtoEat} text={"ABOUT US"}></GoogtoEat>

      <img className={s.img} src={images.bg2} />
      <div className={s.description}>
        <p className={s.descriptionWrap}>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <p className={s.descriptionWrap}>
          At Wix we’re passionate about making templates that allow you to build
          fabulous websites and it’s all thanks to the support and feedback from
          users like you! Keep up to date with New Releases and what’s Coming
          Soon in Wixellaneous in Support. Feel free to tell us what you think
          and give us feedback in the Wix Forum. If you’d like to benefit from a
          professional designer’s touch, head to the Wix Arena and connect with
          one of our Wix Pro designers. Or if you need more help you can simply
          type your questions into the Support Forum and get instant answers. To
          keep up to date with everything Wix, including tips and things we
          think are cool, just head to the Wix Blog!
        </p>
      </div>
      <div className={s.buttons}>
        <div>
          <button className={s.button}>Shop Cheeses</button>
        </div>
        <div>
          <button className={s.button}>Shop Meats</button>
        </div>
        <div>
          <button className={s.button}>Shop Provisions</button>
        </div>
      </div>
    </div>
  );
};

export default About;
