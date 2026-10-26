import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/"
          alt="An image"
          width={300}
          height={300}
        ></Image>
      </div>
      <h1>Hi!</h1>
      <p>This is a blog dedicated to the web development topics...</p>
    </section>
  );
}

export default Hero;
