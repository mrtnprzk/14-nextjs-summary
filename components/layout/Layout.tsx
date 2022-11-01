import MainNavigation from "./MainNavigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <MainNavigation />
      <main className="flex justify-center">{children}</main>
    </div>
  );
};

export default Layout;
