import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import logo from '../assets/logo.png';
import logoSmall from '../assets/logoSmall.png';


function Header() {
  const { data: session } = useSession();
  const items = useSelector(selectBasketItems);

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-28 w-20 cursor-pointer opacity-75 transition hover:opacity-100">
            <Image
              src={logoSmall}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
        <a href="#saibamais" className="headerLink">Saiba mais</a>
        <a href="#nossamissao" className="headerLink">Nossa missão</a>
        <a href="#projetos" className="headerLink">Projetos</a>
        <a href="#contato" className="headerLink">Contato</a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
         
         

        {/*session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon className="headerIcon" onClick={() => signIn()} />
        )*/}
      </div>
    </header>
  );
}

export default Header;
