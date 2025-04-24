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

export default function SeedsOfHopeApp() {
  const [loading, setLoading] = useState(false);

  const openForm = (url) => {
    setLoading(true);
    window.open(url, "_blank");
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-white p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {forms.map((form, idx) => (
        <motion.div key={idx} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Card className="shadow-xl rounded-2xl border border-gray-300">
            <CardContent className="p-6 flex flex-col gap-4 items-center">
              <h2 className="text-2xl font-semibold text-center text-gray-900">
                {form.title}
              </h2>
              <Button className="w-full text-lg font-medium" onClick={() => openForm(form.url)} disabled={loading}>
                {loading ? <Loader className="animate-spin" /> : `Open ${form.title}`}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

