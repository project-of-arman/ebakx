import { Inter } from "next/font/google";
import Activity from "@/components/Activity/Activity";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={'Activity'}>
      <div className="max-w-[1440px] mx-auto">
        <Activity />
      </div>
    </Layout>
  );
}
