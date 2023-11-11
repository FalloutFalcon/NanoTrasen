import HeaderComponent from "./header";
import FooterComponent from "./footer";

export default function MainLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex flex-col">
        <HeaderComponent></HeaderComponent>
        <main>{children}</main>
        <FooterComponent></FooterComponent>
      </div>
    )
  }