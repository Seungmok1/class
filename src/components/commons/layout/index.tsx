import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface IProps {
  children: any;
}

const HIDDEN_BANNER = ["/boards/new"];

export default function Layout(props: IProps) {
  const router = useRouter();

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutNavigation />
      <body>{props.children}</body>
      <LayoutFooter />
    </>
  );
}
