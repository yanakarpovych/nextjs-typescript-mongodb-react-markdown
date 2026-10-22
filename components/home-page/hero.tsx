import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/" alt="Yana" width={300} height={300}></Image>
      </div>
      <h1>Hi, I'm Yana</h1>
      <p>This is my blog</p>
    </section>
  )
}

export default Hero;