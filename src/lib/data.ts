import React from "react";
import { MdAdd } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import { CgMenuGridO } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { BiPencil } from "react-icons/bi";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

// nav icons
export const NavRightIcons = [
  {
    icon: React.createElement(MdAdd),
  },
  {
    icon: React.createElement(BiSun),
  },
  {
    icon: React.createElement(CgMenuGridO),
  },
  {
    icon: React.createElement(IoMdNotificationsOutline),
  },
] as const;

// InvestmentSubComponentOne
export const InvestmentSubComponentOne = [
  "Portfolio",
  "Analytics",
  "Calculators",
] as const;

// investment sub components
export const InvestmentSubComponentTwo = [
  {
    icon: React.createElement(IoIosPeople),
    text: "Community",
  },
  {
    icon: React.createElement(LuGraduationCap),
    text: "Courses",
  },
  {
    icon: React.createElement(IoMdPerson),
    text: "Account",
  },
] as const;

// card component
export const CardComponent = [
  {
    icon: React.createElement(FaRegCheckCircle),
    title: "Connect to your brokage",
    text: "Connect your brokerage account via 'Yodlee', a trusted cloud based account aggregator. All new transactions will be synced automatically.",
    button: "Connect",
    buttonIcon: React.createElement(MdKeyboardArrowRight),
  },
  {
    icon: React.createElement(BiPencil),
    title: "Enter your holdings",
    text: "Manually add your holdings. It's a quick way to evaluate our features.",
    button: "Enter",
    buttonIcon: React.createElement(MdKeyboardArrowRight),
  },
  {
    icon: React.createElement(MdOutlineFileUpload),
    title: "Upload statement (.csv)",
    text: "Import all your transactions frm the brokers report or create a custom spreadsheet with your trade history. 10+brokers & Binance APr are supported now.",
    button: "Upload",
    buttonIcon: React.createElement(MdKeyboardArrowRight),
  },
] as const;
