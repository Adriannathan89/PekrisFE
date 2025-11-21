"use client";

import Image from "next/image";
import Menu from "../components/menu"
import Header from "../components/header"
import ItemContainer from "@/components/itemcontainer";
import { use, useEffect, useState } from "react";
import { Inter } from 'next/font/google'
import { redirect } from "next/navigation";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  redirect("/dasboard");
}
