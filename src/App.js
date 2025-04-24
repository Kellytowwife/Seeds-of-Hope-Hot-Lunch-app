// Seeds of Hope App - Google Forms Integration UI

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader } from "lucide-react";
import { motion } from "framer-motion";

const forms = [
  {
    title: "Daily Attendance",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdoSjS6N7O2Divcq1krDI0_dFsAl0tRF4nk39_rhSefT4kKUA/viewform?usp=header",
  },
  {
    title: "New Client Registration",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScr93YXOVZ7pCJAEm-tAymsrhLoC1r8RjtJLsoX09iIYQNqCw/viewform?usp=header",
  },
  {
    title: "Food Box Request",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfw8i9hH2LjmF-AsAQ_x6iExThOsdu1T4p4PpsqoGFNYWdn0Q/viewform?usp=header",
  },
];

export default function
