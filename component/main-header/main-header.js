import Link from "next/link";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logoImg.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  console.log("in the MainHeader");
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="">
          <Image src={logoImg} alt="logo page" priority />
          Food App
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/meals">Browse Meals</Link>
            </li>
            <li>
              <Link href="/community">Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
